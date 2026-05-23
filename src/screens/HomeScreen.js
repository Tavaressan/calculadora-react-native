import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useFont } from '../context/FontContext';
import ThemeSwitch from '../components/ThemeSwitch';
import FontSlider from '../components/FontSlider';
import getGlobalStyles from '../styles/globalStyles';

const HomeScreen = ({ navigation }) => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const { fontSize, setFontSize } = useFont();
  const globalStyles = getGlobalStyles(theme, fontSize);

  const operations = [
    { name: 'Soma', label: 'Soma (+)', route: 'Soma', color: '#3B82F6', icon: '➕' },
    { name: 'Subtracao', label: 'Subtração (-)', route: 'Subtracao', color: '#10B981', icon: '➖' },
    { name: 'Multiplicacao', label: 'Multiplicação (*)', route: 'Multiplicacao', color: '#F59E0B', icon: '✖️' },
    { name: 'Divisao', label: 'Divisão (/)', route: 'Divisao', color: '#EF4444', icon: '➗' },
  ];

  return (
    <ScrollView 
      style={globalStyles.container}
      contentContainerStyle={globalStyles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={globalStyles.title}>Calculadora Acadêmica</Text>
        <Text style={[globalStyles.label, { textAlign: 'center', marginTop: -15, marginBottom: 25 }]}>
          Atividade 07 - React Native
        </Text>
      </View>

      <View style={styles.grid}>
        {operations.map((op) => (
          <TouchableOpacity
            key={op.route}
            style={[
              globalStyles.card, 
              styles.opCard,
              { borderLeftWidth: 4, borderLeftColor: isDarkMode ? theme.primary : op.color }
            ]}
            onPress={() => navigation.navigate(op.route)}
            activeOpacity={0.8}
          >
            <Text style={styles.emoji}>{op.icon}</Text>
            <Text style={[globalStyles.subtitle, styles.opLabel]}>
              {op.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[globalStyles.card, globalStyles.configPanel]}>
        <Text style={[globalStyles.subtitle, { marginBottom: 15, textAlign: 'center', color: theme.primary }]}>
          Configurações Globais
        </Text>
        
        <ThemeSwitch 
          enabled={isDarkMode} 
          onChange={toggleTheme} 
        />
        
        <View style={styles.divider} />
        
        <FontSlider 
          value={fontSize} 
          onChange={setFontSize} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  opCard: {
    width: '47%',
    aspectRatio: 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
  },
  emoji: {
    fontSize: 28,
    marginBottom: 8,
  },
  opLabel: {
    textAlign: 'center',
    marginBottom: 0,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    opacity: 0.2,
    marginVertical: 15,
  }
});

export default HomeScreen;
