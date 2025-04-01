import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, typography, spacing } from '../theme/theme';

interface BottomNavigationProps {
  activeRoute: string;
  onRouteChange: (route: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeRoute,
  onRouteChange,
}) => {
  const routes = [
    { name: 'Home', icon: 'apps' },
    { name: 'My History', icon: 'clock-outline' },
    { name: 'My Profile', icon: 'account-outline' },
  ];

  return (
    <View style={styles.container}>
      {routes.map((route) => (
        <TouchableOpacity
          key={route.name}
          style={styles.tab}
          onPress={() => onRouteChange(route.name)}
        >
          <Icon
            name={route.icon}
            size={24}
            color={activeRoute === route.name ? colors.primary : colors.text.light}
          />
          <Text
            style={[
              styles.label,
              {
                color:
                  activeRoute === route.name ? colors.primary : colors.text.light,
              },
            ]}
          >
            {route.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    paddingVertical: spacing.small,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: typography.fontSize.tiny,
    marginTop: spacing.tiny,
  },
}); 