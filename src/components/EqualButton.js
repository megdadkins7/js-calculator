import React, { useContext } from 'react'

import { NumberContext } from '../context/NumberProvider'

function EqualButton() {
  const { doMath } = useContext(NumberContext);
  return(
    <button className='white-button' type='button' onClick={() => doMath()}>
      =
    </button>
  )
}

export default EqualButton