import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  form {
    height: 80vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
      height: 40px;
      padding-left: 6px;
      font-size: 16px;
      margin-bottom: 6px;
    }

    button {
      height: 60px;
      width: 50%;
      margin-top: 6px;
      background-color: #bff080;
      color: #000000;
      font-size: 20px;
      cursor: pointer;
    }
  }

  .voltar {
    position: absolute;
    top: 12px;
    left: 12px;
    cursor: pointer;
  }
`