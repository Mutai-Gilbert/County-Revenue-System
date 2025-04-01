import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  TouchableOpacityProps 
} from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ 
  title, 
  variant = 'primary',
  style,
  ...props 
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'secondary' && styles.secondaryButton,
        { fontFamily: theme.platform.fontFamily },
        style
      ]}
      {...props}
    >
      <Text style={[
        styles.text,
        variant === 'secondary' && styles.secondaryText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    borderRadius: 10,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#22C55E'
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  secondaryText: {
    color: '#22C55E'
  }
}); 