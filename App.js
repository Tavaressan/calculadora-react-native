import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { FontProvider } from './src/context/FontContext';
import AppNavigator from './src/navigation/AppNavigator';

const RootApp = () => {
  const { theme, isDarkMode } = useTheme();

  const navigationTheme = {
    dark: isDarkMode,
    colors: {
      primary: theme.primary,
      background: theme.background,
      card: isDarkMode ? '#1F2937' : '#FFFFFF',
      text: theme.text,
      border: theme.border,
      notification: theme.primary,
    },
  };

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} backgroundColor={isDarkMode ? '#1F2937' : '#FFFFFF'} />
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <FontProvider>
        <RootApp />
      </FontProvider>
    </ThemeProvider>
  );
}
