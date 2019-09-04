import React, { useContext } from 'react';

import { NumberContext } from '../context/NumberProvider'

function ClearButton() {
  const { handleClearVal } = useContext(NumberContext);
  return (
    <button type='button' className='white-button' onClick={() => handleClearVal()}>
      C
    </button>
  )
}

export default ClearButton