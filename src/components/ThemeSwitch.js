import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useFont } from '../context/FontContext';
import getGlobalStyles from '../styles/globalStyles';

const ThemeSwitch = ({ enabled, onChange }) => {
  const { theme } = useTheme();
  const { fontSize } = useFont();
  const globalStyles = getGlobalStyles(theme, fontSize);

  return (
    <View style={[globalStyles.row, styles.container]}>
      <Text style={[globalStyles.text, { fontWeight: '600' }]}>
        {enabled ? 'Tema Escuro' : 'Tema Claro'}
      </Text>
      <Switch
        trackColor={{ false: '#767577', true: theme.primary }}
        thumbColor={enabled ? '#FFFFFF' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={enabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: '100%',
  },
});

export default ThemeSwitch;
