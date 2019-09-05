import styled from 'styled-components';

export const CalculatorStyles = styled.div`
  background-color: #3772FF;
  margin-top: 5px;
  padding 0 5px 0 5px;
  border-radius: 20px;
  width: 100%;
  min-height: 80vh;
  display: grid;
  justify-items: center;
  grid-template-rows: minmax(200px 350px) 1fr;
  grid-template-columns: 1fr;
  @media (max-width: 500px) {
    margin-top: 40px;
    max-width: 100%;
    max-height: 95%;
    padding: 5%;
  }
  .display {
    margin: 0 !important;
    width: 100%;
    @media (max-width: 500px) {
      width: 100%;
      max-height: 200px;
    }
    h1 {
      font-size: 4rem;
      font-weight: 400;
      color: white;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }
  }
  .num-pad {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 450px;
    margin: 0 auto;
    @media (max-width: 500px) {
      width: 100%;
      margin: 0;
    }
    button {
      width: 100%;
      height: 80px;
      border-radius: 20px;
      border: 2px solid white;
      font-size: 2rem;
      color: #080708;
      font-family: 'Orbitron', serif;
      background: #FDCA40;
      &:focus {
        outline: none;
      }
      &:hover {
        border: 3px solid #dfe6e9;
        font-weight: 500;
      }
    }
    button.function-button {
      background-color: #DF2935;
    }
    button.white-button {
      color: #080708;
      background-color: white;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
`;

export const DisplayStyles = styled.div`
  display: grid;
  grid-template-rows: 90px 50px;
  grid-template-columns: 1fr;
  border: 2px solid white;
  width: 450px;
  max-width: 700px;
  margin: 10px auto;
  align-items: center;
  border-radius: 20px;
  background: #FDCA40;
  @media (max-width: 500px) {
    width: 95%;
    grid-template-rows: 60px 40px;
  }
  h2,
  p {
    text-align: center;
    color: #080708;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;
    border-bottom: 2px solid white;
    padding: 15px 20px;
    @media (max-width: 500px) {
      font-size: 1.5rem;
      padding: 10px;
    }
  }
  h2.long-main-display {
    font-size: 1.2rem;
  }
  p {
    margin: 5px 0;
    font-size: 1.3rem;
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  p.long-stored-display {
    font-size: 0.5rem;
  }
`;