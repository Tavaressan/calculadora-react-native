import { StyleSheet } from 'react-native';

const getGlobalStyles = (theme, fontSize) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    card: {
      backgroundColor: theme.cardBg,
      borderRadius: 16,
      padding: 20,
      marginVertical: 12,
      borderWidth: 1,
      borderColor: theme.border,
      shadowColor: theme.shadowColor,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 4,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 8,
    },
    
    title: {
      fontSize: fontSize * 1.3,
      fontWeight: '700',
      color: theme.text,
      textAlign: 'center',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: fontSize * 0.9,
      fontWeight: '600',
      color: theme.text,
      marginBottom: 8,
    },
    label: {
      fontSize: fontSize * 0.8,
      fontWeight: '500',
      color: theme.textSecondary,
      marginBottom: 6,
    },
    text: {
      fontSize: fontSize,
      color: theme.text,
    },
    errorText: {
      fontSize: fontSize * 0.8,
      color: theme.error,
      fontWeight: '600',
      marginTop: 4,
      marginBottom: 12,
    },
    
    input: {
      backgroundColor: theme.inputBg,
      color: theme.text,
      fontSize: fontSize * 0.95,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.border,
      marginBottom: 16,
    },
    
    button: {
      backgroundColor: theme.buttonBg,
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 8,
      shadowColor: theme.shadowColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 3.84,
      elevation: 3,
    },
    buttonText: {
      color: theme.buttonText,
      fontSize: fontSize * 0.95,
      fontWeight: '600',
    },
    buttonOutline: {
      backgroundColor: 'transparent',
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 8,
      borderWidth: 1.5,
      borderColor: theme.buttonBg,
    },
    buttonOutlineText: {
      color: theme.buttonBg,
      fontSize: fontSize * 0.95,
      fontWeight: '600',
    },

    resultContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 30,
      marginVertical: 20,
      borderRadius: 16,
      backgroundColor: theme.inputBg,
      borderWidth: 1,
      borderColor: theme.border,
    },
    resultFormula: {
      fontSize: fontSize * 0.9,
      color: theme.textSecondary,
      marginBottom: 12,
      letterSpacing: 0.5,
    },
    resultValue: {
      fontSize: fontSize * 1.8,
      fontWeight: 'bold',
      color: theme.primary,
      textAlign: 'center',
    },

    configPanel: {
      borderTopWidth: 1,
      borderTopColor: theme.border,
      marginTop: 20,
      paddingTop: 20,
    },
  });
};
export default getGlobalStyles;
