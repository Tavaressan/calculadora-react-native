export const calculate = (val1, val2, operation) => {
  const cleanVal1 = val1.replace(',', '.');
  const cleanVal2 = val2.replace(',', '.');

  const num1 = parseFloat(cleanVal1);
  const num2 = parseFloat(cleanVal2);

  if (val1.trim() === '' || val2.trim() === '') {
    throw new Error("Por favor, preencha ambos os campos.");
  }

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Por favor, insira valores numéricos válidos.");
  }

  switch (operation) {
    case 'soma':
      return {
        formula: `${num1} + ${num2}`,
        result: num1 + num2,
        val1: num1,
        val2: num2,
        symbol: '+'
      };
    case 'subtracao':
      return {
        formula: `${num1} - ${num2}`,
        result: num1 - num2,
        val1: num1,
        val2: num2,
        symbol: '-'
      };
    case 'multiplicacao':
      return {
        formula: `${num1} * ${num2}`,
        result: num1 * num2,
        val1: num1,
        val2: num2,
        symbol: '*'
      };
    case 'divisao':
      if (num2 === 0) {
        throw new Error("Não é possível dividir por zero");
      }
      return {
        formula: `${num1} / ${num2}`,
        result: num1 / num2,
        val1: num1,
        val2: num2,
        symbol: '/'
      };
    default:
      throw new Error("Operação inválida.");
  }
};
export default calculate;
