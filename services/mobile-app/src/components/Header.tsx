import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, typography, spacing } from '../theme/theme';

interface HeaderProps {
  title: string;
  onSupportPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onSupportPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Icon name="menu" size={24} color={colors.text.primary} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.supportButton} onPress={onSupportPress}>
        <Icon name="headphones" size={20} color={colors.primary} />
        <Text style={styles.supportText}>Contact Support</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    backgroundColor: colors.cardBackground,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginLeft: spacing.medium,
    fontSize: typography.fontSize.large,
    fontFamily: typography.fontFamily.medium,
    color: colors.text.primary,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.small,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  supportText: {
    marginLeft: spacing.tiny,
    fontSize: typography.fontSize.small,
    color: colors.primary,
  },
}); 