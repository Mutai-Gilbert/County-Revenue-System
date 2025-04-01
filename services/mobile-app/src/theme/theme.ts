import { Dimensions } from 'react-native';

export const colors = {
  primary: '#0066CC',
  secondary: '#4CAF50',
  background: '#F5F6FA',
  cardBackground: '#FFFFFF',
  text: {
    primary: '#000000',
    secondary: '#666666',
    light: '#999999',
  },
  error: '#FF3B30',
  warning: '#FFCC00',
  success: '#34C759',
  border: '#E5E5E5',
};

export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  fontSize: {
    tiny: 10,
    small: 12,
    regular: 14,
    medium: 16,
    large: 18,
    xlarge: 20,
    xxlarge: 24,
  },
};

export const spacing = {
  tiny: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 48,
};

export const layout = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
  },
};

export default {
  colors,
  typography,
  spacing,
  layout,
}; 