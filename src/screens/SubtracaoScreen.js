import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useFont } from '../context/FontContext';
import NumericInput from '../components/NumericInput';
import { calculate } from '../utils/calculator';
import getGlobalStyles from '../styles/globalStyles';

const SubtracaoScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const { fontSize } = useFont();
  const globalStyles = getGlobalStyles(theme, fontSize);

  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      setError('');
      const calculation = calculate(val1, val2, 'subtracao');
      navigation.navigate('Resultado', {
        title: 'Subtração',
        formula: calculation.formula,
        val1: calculation.val1,
        val2: calculation.val2,
        symbol: calculation.symbol,
        result: calculation.result,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ScrollView 
      style={globalStyles.container}
      contentContainerStyle={globalStyles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Operação de Subtração ➖</Text>

        <Text style={globalStyles.label}>Primeiro Valor (Valor 1)</Text>
        <NumericInput 
          value={val1} 
          onChangeText={setVal1} 
          placeholder="Digite o primeiro valor" 
        />

        <Text style={globalStyles.label}>Segundo Valor (Valor 2)</Text>
        <NumericInput 
          value={val2} 
          onChangeText={setVal2} 
          placeholder="Digite o segundo valor" 
        />

        {error ? <Text style={globalStyles.errorText}>{error}</Text> : null}

        <TouchableOpacity 
          style={globalStyles.button} 
          onPress={handleCalculate}
          activeOpacity={0.8}
        >
          <Text style={globalStyles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SubtracaoScreen;
