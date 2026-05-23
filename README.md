# Calculadora React Native (Atividade Acadêmica)

Este é um projeto desenvolvido em React Native utilizando Expo, projetado como parte da atividade acadêmica da FATEC. O objetivo é criar uma calculadora simples com as quatro operações fundamentais que suporta navegação entre telas, ajuste de temas globais (claro/escuro) e redimensionamento dinâmico de fontes.

---

## 🚀 Funcionalidades

1. **Operações Básicas:**
   - **Adição (`+`):** Soma dois valores numéricos.
   - **Subtração (`-`):** Calcula a diferença entre dois valores.
   - **Multiplicação (`*`):** Calcula o produto de dois valores.
   - **Divisão (`/`):** Calcula o quociente entre dois valores (possui validação integrada para divisão por zero).

2. **Validação de Divisão por Zero:**
   - Se o divisor for igual a `0`, o sistema exibirá uma mensagem de alerta e impedirá a navegação para a tela de resultado.

3. **Tema Claro/Escuro Global:**
   - Alterne instantaneamente entre o tema Claro (background `#FFFFFF`, textos escuros, botões azuis) e Escuro (background `#121212`, textos brancos, botões cinzas) usando o componente `<Switch />`.

4. **Escala de Fonte em Tempo Real:**
   - Ajuste globalmente o tamanho das fontes (de 14px a 36px) usando o componente `<Slider />`, afetando títulos, inputs, botões e resultados em tempo real.

5. **Navegação Dinâmica:**
   - Fluxo completo com Stack Navigation (`@react-navigation/native-stack`).

---

## 📁 Estrutura do Projeto

O projeto segue a estrutura modular esperada:

```text
/src
├── /components
│   ├── FontSlider.js       # Controle de escala tipográfica (Slider)
│   ├── NumericInput.js     # Input numérico reutilizável
│   └── ThemeSwitch.js      # Controle de alternância de tema (Switch)
├── /context
│   ├── FontContext.js      # Contexto do tamanho da fonte global
│   └── ThemeContext.js     # Contexto do tema (Claro/Escuro)
├── /navigation
│   └── AppNavigator.js     # Configuração das rotas do Stack Navigator
├── /screens
│   ├── HomeScreen.js       # Menu principal e controles globais
│   ├── SomaScreen.js       # Tela da operação de Adição
│   ├── SubtracaoScreen.js  # Tela da operação de Subtração
│   ├── MultiplicacaoScreen.js # Tela da operação de Multiplicação
│   ├── DivisaoScreen.js    # Tela da operação de Divisão
│   └── ResultadoScreen.js  # Tela de resultado da operação
├── /styles
│   ├── themes.js           # Paletas de cores para Claro e Escuro
│   └── globalStyles.js     # Estilos responsivos parametrizados
└── /utils
    └── calculator.js       # Função lógica centralizada para os cálculos
App.js                      # Entrada principal (Provedores e Navigation)
```

---

## ⚙️ Como Executar o Projeto

### Rodando Localmente
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor Expo:
   ```bash
   npm start
   ```
3. Use o aplicativo **Expo Go** em seu smartphone (Android/iOS) para ler o QR Code e rodar o projeto.

### Rodando no Expo Snack
O projeto foi estruturado para ser totalmente compatível com o [Expo Snack](https://snack.expo.dev). Basta copiar a pasta `src/`, o arquivo `App.js` e adicionar no `package.json` do Snack as dependências:
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-native-community/slider`
