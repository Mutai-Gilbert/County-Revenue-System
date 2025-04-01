import React from 'react';
import { 
  TouchableNativeFeedback,
  View,
  Text, 
  StyleSheet 
} from 'react-native';
import { useTheme } from '../../../theme/ThemeProvider';

interface ButtonProps {
  title: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
  disabled?: boolean;
  style?: any;
}

export const Button = ({ 
  title, 
  variant = 'primary',
  onPress,
  disabled,
  style
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <View style={[
      styles.container,
      variant === 'secondary' && styles.secondaryContainer,
      disabled && styles.disabledContainer,
      style
    ]}>
      <TouchableNativeFeedback
        onPress={onPress}
        disabled={disabled}
        background={TouchableNativeFeedback.Ripple(
          variant === 'secondary' ? '#22C55E20' : '#FFFFFF20',
          false
        )}
      >
        <View style={[
          styles.button,
          variant === 'secondary' && styles.secondaryButton,
          { fontFamily: theme.platform.fontFamily }
        ]}>
          <Text style={[
            styles.text,
            variant === 'secondary' && styles.secondaryText,
            disabled && styles.disabledText
          ]}>
            {title.toUpperCase()}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#22C55E',
    elevation: 2
  },
  secondaryContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#22C55E'
  },
  disabledContainer: {
    backgroundColor: '#E5E7EB',
    borderColor: '#E5E7EB',
    elevation: 0
  },
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF'
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: '#FFFFFF'
  },
  secondaryText: {
    color: '#22C55E'
  },
  disabledText: {
    color: '#9CA3AF'
  }
}); 