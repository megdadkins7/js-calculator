import React, { useContext } from 'react'

import { NumberContext } from '../context/NumberProvider'

function BackButton() {
  const { handleBack } = useContext(NumberContext);
  return (
    <button type='button' className='white-button' onClick={() => handleBack()}>
      &#8592;
    </button>
  )
}

export default BackButton