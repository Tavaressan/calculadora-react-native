import React from 'react';
import { TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useFont } from '../context/FontContext';
import getGlobalStyles from '../styles/globalStyles';

const NumericInput = ({ value, onChangeText, placeholder }) => {
  const { theme } = useTheme();
  const { fontSize } = useFont();
  const globalStyles = getGlobalStyles(theme, fontSize);

  return (
    <TextInput
      style={globalStyles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.textSecondary}
      keyboardType="numeric"
      returnKeyType="done"
    />
  );
};

export default NumericInput;
