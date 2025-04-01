import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  ScrollView 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MobileLayout } from '../components/layout/MobileLayout';

export const ProfileScreen = () => {
  const userInfo = {
    name: 'John Doe',
    role: 'Revenue Collector',
    zone: 'Isiolo Central',
    employeeId: 'ISL-2024-001'
  };

  const menuItems = [
    {
      title: 'Account Settings',
      icon: 'person-outline',
      items: [
        { label: 'Edit Profile', icon: 'edit' },
        { label: 'Change Password', icon: 'lock-outline' },
        { label: 'Language', icon: 'language' }
      ]
    },
    {
      title: 'App Settings',
      icon: 'settings-outlined',
      items: [
        { label: 'Notifications', icon: 'notifications-none' },
        { label: 'Offline Mode', icon: 'cloud-off' },
        { label: 'Data Sync', icon: 'sync' }
      ]
    },
    {
      title: 'Support',
      icon: 'help-outline',
      items: [
        { label: 'Help Center', icon: 'help' },
        { label: 'Contact Support', icon: 'headset-mic' },
        { label: 'Report Issue', icon: 'bug-report' }
      ]
    }
  ];

  const renderMenuItem = (item: { label: string; icon: string }) => (
    <TouchableOpacity 
      key={item.label}
      style={styles.menuItem}
      onPress={() => {/* Handle menu item press */}}
    >
      <View style={styles.menuItemLeft}>
        <Icon name={item.icon} size={24} color="#6B7280" />
        <Text style={styles.menuItemText}>{item.label}</Text>
      </View>
      <Icon name="chevron-right" size={24} color="#6B7280" />
    </TouchableOpacity>
  );

  return (
    <MobileLayout>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileImage}>
            <Text style={styles.profileInitials}>
              {userInfo.name.split(' ').map(n => n[0]).join('')}
            </Text>
          </View>
          <Text style={styles.name}>{userInfo.name}</Text>
          <Text style={styles.role}>{userInfo.role}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Zone</Text>
              <Text style={styles.infoValue}>{userInfo.zone}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Employee ID</Text>
              <Text style={styles.infoValue}>{userInfo.employeeId}</Text>
            </View>
          </View>
        </View>

        {menuItems.map((section, index) => (
          <View key={section.title} style={styles.section}>
            <Text style={styles.sectionTitle}>
              <Icon name={section.icon} size={20} color="#374151" />
              {' '}{section.title}
            </Text>
            {section.items.map(renderMenuItem)}
          </View>
        ))}

        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => {/* Handle logout */}}
        >
          <Icon name="logout" size={24} color="#EF4444" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </MobileLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FE'
  },
  header: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB'
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  profileInitials: {
    fontSize: 32,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4
  },
  role: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 16
  },
  infoItem: {
    alignItems: 'center'
  },
  infoLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151'
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItemText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
    marginHorizontal: 16
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
    marginLeft: 8
  }
}); 