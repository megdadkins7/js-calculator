import React, { useContext } from 'react'

import { NumberContext } from '../context/NumberProvider'

function FunctionButton({ buttonValue }) {
  const { handleSetCalcFunc } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetCalcFunc(buttonValue)}>
      {buttonValue}
    </button>
  )
}

export default FunctionButton