import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { RevenueCard } from '../components/RevenueCard';
import { BottomNavigation } from '../components/BottomNavigation';
import { colors, spacing } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

const revenueCategories = [
  {
    icon: 'fish',
    title: 'Fish Cess',
    description: 'Fishermen are taxed per kilogram on their lake catches.',
    route: 'FishCessForm',
  },
  {
    icon: 'tree',
    title: 'Park Fee',
    description: 'Pay for entries fee and services',
    route: 'ParkFeeForm',
  },
  {
    icon: 'fire',
    title: 'Fire Service Levies',
    description: 'Streamlined collection to support fire services.',
    route: 'FireServiceForm',
  },
  {
    icon: 'sync',
    title: 'Transaction Recon',
    description: 'Copy and an Original MPESA message in this section to auto reconcile them.',
    route: 'TransactionRecon',
  },
  {
    icon: 'tractor',
    title: 'Hire of County Assets',
    description: 'Charges applicable for hire of county assets such as tractors, stadiums etc',
    route: 'AssetHireForm',
  },
  {
    icon: 'medical-bag',
    title: 'Public Health',
    description: 'Medical Certificates, food hygiene, food handlers and so on.',
    route: 'PublicHealthForm',
  },
];

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [activeRoute, setActiveRoute] = React.useState('Home');

  const handleSupportPress = () => {
    // Implement support functionality
  };

  const handleCategoryPress = (route: string) => {
    navigation.navigate(route);
  };

  const handleRouteChange = (route: string) => {
    setActiveRoute(route);
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <Header title="Home" onSupportPress={handleSupportPress} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.grid}>
          {revenueCategories.map((category, index) => (
            <RevenueCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              onPress={() => handleCategoryPress(category.route)}
            />
          ))}
        </View>
      </ScrollView>
      <BottomNavigation
        activeRoute={activeRoute}
        onRouteChange={handleRouteChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.medium,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}); 