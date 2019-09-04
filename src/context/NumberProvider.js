import React, { useState } from 'react'

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [num, setNum] = useState('');
  const [storedNum, setStoredNum] = useState('');
  const [functionType, setFunctionType] = useState('');

  const handleDisplayVal = number => {
    if((!num.includes('.') || num !== '.') && number.length < 8) {
      setNum(`${(num + number).replace(/^0+/, '')}`);
    }
  };

  const handleStoredVal = () => {
    setStoredNum(num);
    setNum('');
  };

  const handleClearVal = () => {
    setNum('');
    setStoredNum('');
    setFunctionType('');
  };

  const handleBack = () => {
    if(num !== '') {
      const deletedNum = num.slice(0, num.length - 1);
      setNum(deletedNum);
    }
  };

  const handleSetCalcFunc = type => {
    if(num) {
      setFunctionType(type);
      handleStoredVal();
    }
    if(storedNum) {
      setFunctionType(type);
    }
  };

  const handleToggleNeg = () => {
    if(num) {
      if(num > 0) {
        setNum(`-${num}`);
      } else {
        const positiveNum = num.slice(1);
        setNum(positiveNum);
      }
    } else if(storedNum > 0) {
        setStoredNum(`-${storedNum}`);
    } else {
        const positiveNum = storedNum.slice(1);
        setStoredNum(positiveNum);
    }
  };

  const doMath = () => {
    if(num && storedNum) {
      switch(functionType) {
          case '+' : 
            setStoredNum(`${Math.round(`${(parseFloat(storedNum) + parseFloat(num)) * 100}`) / 100}`);
            break;
          case '-' :
            setStoredNum(`${Math.round(`${(parseFloat(storedNum) - parseFloat(num)) * 1000}`) / 1000}`);
            break;
          case '/' :
            setStoredNum(`${Math.round(`${(parseFloat(storedNum) / parseFloat(num)) * 1000}`) / 1000}`);
            break;
          case '*' : 
            setStoredNum(`${Math.round(`${(parseFloat(storedNum) * parseFloat(num)) * 1000}`) / 1000}`);
            break;
          default:
            break;
      }
      setNum('');
    }
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBack,
        handleClearVal,
        handleSetCalcFunc,
        handleDisplayVal,
        handleStoredVal,
        handleToggleNeg,
        num,
        storedNum,
        setNum
      }}
    >
      {props.children}
    </NumberContext.Provider>
  )
}

export default NumberProvider