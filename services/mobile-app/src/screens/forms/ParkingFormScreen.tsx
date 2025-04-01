import React, { useState } from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Animated, { 
  FadeInUp, 
  FadeOutDown,
  SlideInRight,
  SlideOutLeft 
} from 'react-native-reanimated';
import { CustomInput } from '../../components/forms/CustomInput';
import { CustomDropdown } from '../../components/forms/CustomDropdown';
import { CustomButton } from '../../components/forms/CustomButton';
import { useRevenueStore } from '../../store/revenueStore';
import { generateUUID } from '../../utils/uuid';

const parkingSchema = z.object({
  duration: z.string().min(1, 'Please select parking duration'),
  vehicleCategory: z.string().min(1, 'Please select vehicle category'),
  plateNumber: z.string()
    .min(1, 'Please enter plate number')
    .regex(/^[A-Z]{3}\s\d{3}[A-Z]$/, 'Invalid plate number format'),
  phoneNumber: z.string()
    .min(10, 'Phone number must be 10 digits')
    .regex(/^0[17]\d{8}$/, 'Invalid M-Pesa phone number')
});

type ParkingFormData = z.infer<typeof parkingSchema>;

const PARKING_DURATIONS = [
  { label: 'STREET PARKING', value: 'street' },
  { label: 'DAILY PARKING', value: 'daily' },
  { label: 'MONTHLY PARKING', value: 'monthly' }
];

const VEHICLE_CATEGORIES = [
  { 
    label: 'Salon car/Pickup per day zone A - CBD', 
    value: 'salon_cbd',
    amount: 100
  },
  { 
    label: 'Matatu/Mini bus per day zone A - CBD', 
    value: 'matatu_cbd',
    amount: 200
  }
];

export const ParkingFormScreen = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState(0);
  const { addCollection, addPendingPayment } = useRevenueStore();

  const { control, handleSubmit, formState: { errors } } = useForm<ParkingFormData>({
    resolver: zodResolver(parkingSchema)
  });

  const calculateAmount = (duration: string, category: string) => {
    const vehicleCategory = VEHICLE_CATEGORIES.find(c => c.value === category);
    if (!vehicleCategory) return;

    switch (duration) {
      case 'street':
        setAmount(vehicleCategory.amount);
        break;
      case 'daily':
        setAmount(vehicleCategory.amount * 1.5);
        break;
      case 'monthly':
        setAmount(vehicleCategory.amount * 20);
        break;
      default:
        setAmount(0);
    }
  };

  const onSubmit = async (data: ParkingFormData) => {
    const collectionId = generateUUID();
    
    const collection = {
      id: collectionId,
      type: 'PARKING',
      amount,
      timestamp: new Date().toISOString(),
      details: {
        duration: data.duration,
        vehicleCategory: data.vehicleCategory,
        plateNumber: data.plateNumber
      },
      paymentStatus: 'PENDING'
    };

    const payment = {
      id: generateUUID(),
      collectionId,
      amount,
      phoneNumber: data.phoneNumber,
      timestamp: new Date().toISOString(),
      status: 'PENDING'
    };

    addCollection(collection);
    addPendingPayment(payment);
    
    // Navigate back after submission
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Animated.View 
        entering={SlideInRight} 
        exiting={SlideOutLeft}
        style={styles.formContainer}
      >
        <Controller
          control={control}
          name="duration"
          render={({ field: { onChange, value } }) => (
            <CustomDropdown
              label="Parking duration"
              placeholder="STREET PARKING"
              items={PARKING_DURATIONS}
              value={value}
              onChange={(val) => {
                onChange(val);
                calculateAmount(val, control.getValues('vehicleCategory'));
              }}
              error={errors.duration?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="vehicleCategory"
          render={({ field: { onChange, value } }) => (
            <CustomDropdown
              label="Vehicle category"
              placeholder="Select vehicle category"
              items={VEHICLE_CATEGORIES}
              value={value}
              onChange={(val) => {
                onChange(val);
                calculateAmount(control.getValues('duration'), val);
              }}
              error={errors.vehicleCategory?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="plateNumber"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="Car Plate Number"
              placeholder="Enter The No. Plate"
              value={value}
              onChangeText={(text) => onChange(text.toUpperCase())}
              autoCapitalize="characters"
              error={errors.plateNumber?.message}
            />
          )}
        />

        <Animated.View 
          entering={FadeInUp}
          exiting={FadeOutDown}
          style={styles.billingSection}
        >
          <Text style={styles.billingLabel}>Billing Totals</Text>
          <Text style={styles.billingAmount}>KES {amount}</Text>
        </Animated.View>

        <Controller
          control={control}
          name="phoneNumber"
          render={({ field: { onChange, value } }) => (
            <CustomInput
              label="Mpesa Phone Number"
              placeholder="Enter Phone Number"
              value={value}
              onChangeText={onChange}
              keyboardType="phone-pad"
              error={errors.phoneNumber?.message}
            />
          )}
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="SEND PAYMENT REQUEST"
            onPress={handleSubmit(onSubmit)}
            style={styles.submitButton}
          />
          
          <CustomButton
            title="Receive payment"
            variant="secondary"
            onPress={() => {/* Handle direct payment */}}
            style={styles.receiveButton}
          />
        </View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FE'
  },
  formContainer: {
    flex: 1,
    padding: 16
  },
  billingSection: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 12,
    marginVertical: 24
  },
  billingLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151'
  },
  billingAmount: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginTop: 4
  },
  buttonContainer: {
    gap: 12,
    marginTop: 'auto',
    paddingBottom: Platform.OS === 'ios' ? 24 : 16
  },
  submitButton: {
    backgroundColor: '#22C55E'
  },
  receiveButton: {
    backgroundColor: '#0066FF'
  }
}); 