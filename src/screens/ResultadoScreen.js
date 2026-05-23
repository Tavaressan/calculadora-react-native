import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useFont } from '../context/FontContext';
import getGlobalStyles from '../styles/globalStyles';

const ResultadoScreen = ({ route, navigation }) => {
  const { theme } = useTheme();
  const { fontSize } = useFont();
  const globalStyles = getGlobalStyles(theme, fontSize);

  const { title, val1, val2, symbol, result } = route.params || {};

  return (
    <View style={[globalStyles.container, styles.container]}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Resultado da Operação</Text>
        
        <View style={styles.detailContainer}>
          <Text style={[globalStyles.label, styles.centeredLabel]}>Operação Executada</Text>
          <Text style={[globalStyles.subtitle, styles.centeredValue]}>{title}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={[globalStyles.label, styles.centeredLabel]}>Valores Utilizados</Text>
          <Text style={[globalStyles.text, styles.centeredValue, { fontWeight: '600' }]}>
            Valor 1 = {val1}  |  Valor 2 = {val2}
          </Text>
        </View>

        <View style={globalStyles.resultContainer}>
          <Text style={globalStyles.resultFormula}>
            {val1} {symbol} {val2}
          </Text>
          <Text style={[globalStyles.text, styles.equalsText]}>=</Text>
          <Text style={globalStyles.resultValue}>{result}</Text>
        </View>

        <TouchableOpacity 
          style={globalStyles.buttonOutline} 
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={globalStyles.buttonOutlineText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  detailContainer: {
    marginVertical: 8,
    alignItems: 'center',
  },
  centeredLabel: {
    textAlign: 'center',
    marginBottom: 2,
  },
  centeredValue: {
    textAlign: 'center',
  },
  equalsText: {
    fontSize: 28,
    fontWeight: 'bold',
    opacity: 0.7,
    marginVertical: 4,
    textAlign: 'center',
  },
});

export default ResultadoScreen;
