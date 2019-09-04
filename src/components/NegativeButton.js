import React, { useContext } from 'react';

import { NumberContext } from '../context/NumberProvider';

function NegativeButton() {
  const { handleToggleNeg } = useContext(NumberContext);
  return (
    <button type="button" className="white-button" onClick={() => handleToggleNeg()}>
      -/+
    </button>
  );
};

export default NegativeButton;