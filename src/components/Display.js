import React, { useContext } from 'react'

import { NumberContext } from '../context/NumberProvider'

import { DisplayStyles } from '../styles/Styles'

function Display() {
  const { num, storedNum, functionType } = useContext(NumberContext)
  return (
    <DisplayStyles>
      <h2 className={storedNum && storedNum.length > 12 ? 'long-main-display' : undefined}>
        {!num.length && !storedNum ? '0' : num || storedNum}
      </h2>
      <p className={storedNum && storedNum.length > 12 ? 'long-stored-display' : undefined}>
        {!storedNum ? 'ENTER SOME NUMBERS' : `${storedNum} ${functionType} ${num}`}
      </p>
    </DisplayStyles>
  )
}

export default Display