import React from 'react';

import Calculator from './components/Calculator'

import NumberProvider from './context/NumberProvider';

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <NumberProvider>
        <Calculator />
      </NumberProvider>
    </>
  );
}

export default App;
