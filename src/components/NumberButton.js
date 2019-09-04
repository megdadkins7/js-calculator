import React, { useContext } from 'react';

import { NumberContext } from '../context/NumberProvider';

function NumberButton({ buttonValue }) {
  const { handleDisplayVal } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleDisplayVal(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default NumberButton;