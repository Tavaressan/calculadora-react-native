import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExpoSlider from '@expo/ui/community/slider';
import { useTheme } from '../context/ThemeContext';
import { useFont } from '../context/FontContext';
import getGlobalStyles from '../styles/globalStyles';

const FontSlider = ({ value, onChange }) => {
  const { theme } = useTheme();
  const { fontSize } = useFont();
  const globalStyles = getGlobalStyles(theme, fontSize);

  return (
    <View style={styles.container}>
      <View style={globalStyles.row}>
        <Text style={[globalStyles.text, { fontWeight: '600' }]}>Tamanho da Fonte</Text>
        <Text style={[globalStyles.text, { fontWeight: 'bold', color: theme.primary }]}>
          {Math.round(value)}px
        </Text>
      </View>
      <ExpoSlider
        style={styles.slider}
        minimumValue={14}
        maximumValue={36}
        step={1}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor={theme.primary}
        maximumTrackTintColor={theme.border}
        thumbTintColor={theme.primary}
      />
      <View style={[globalStyles.row, styles.labels]}>
        <Text style={[globalStyles.label, { fontSize: 12 }]}>A- (14)</Text>
        <Text style={[globalStyles.label, { fontSize: 12 }]}>A+ (36)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  labels: {
    marginTop: -8,
  },
});

export default FontSlider;
