import React, { createContext, useContext } from 'react';
import { Platform } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';
import { typography } from './typography';

// Platform-specific values
const platformValues = {
  ios: {
    headerHeight: 44,
    tabBarHeight: 84,
    bottomSpacing: 30,
    fontFamily: 'System',
  },
  android: {
    headerHeight: 56,
    tabBarHeight: 64,
    bottomSpacing: 12,
    fontFamily: 'Roboto',
  },
};

export const theme = {
  colors,
  spacing,
  typography,
  platform: Platform.select({
    ios: platformValues.ios,
    android: platformValues.android,
    default: platformValues.ios,
  }),
};

type Theme = typeof theme;

const ThemeContext = createContext<Theme>(theme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 