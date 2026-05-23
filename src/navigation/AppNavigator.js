import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';
import { useFont } from '../context/FontContext';

import HomeScreen from '../screens/HomeScreen';
import SomaScreen from '../screens/SomaScreen';
import MultiplicacaoScreen from '../screens/MultiplicacaoScreen';
import DivisaoScreen from '../screens/DivisaoScreen';
import SubtracaoScreen from '../screens/SubtracaoScreen';
import ResultadoScreen from '../screens/ResultadoScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const { theme, isDarkMode } = useTheme();
  const { fontSize } = useFont();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: isDarkMode ? '#1F2937' : '#FFFFFF',
        },
        headerTintColor: theme.text,
        headerTitleStyle: {
          fontSize: fontSize * 0.9,
          fontWeight: 'bold',
        },
        headerShadowVisible: true,
        contentStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Calculadora' }} 
      />
      <Stack.Screen 
        name="Soma" 
        component={SomaScreen} 
        options={{ title: 'Adição' }} 
      />
      <Stack.Screen 
        name="Multiplicacao" 
        component={MultiplicacaoScreen} 
        options={{ title: 'Multiplicação' }} 
      />
      <Stack.Screen 
        name="Divisao" 
        component={DivisaoScreen} 
        options={{ title: 'Divisão' }} 
      />
      <Stack.Screen 
        name="Subtracao" 
        component={SubtracaoScreen} 
        options={{ title: 'Subtração' }} 
      />
      <Stack.Screen 
        name="Resultado" 
        component={ResultadoScreen} 
        options={{ title: 'Resultado' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
