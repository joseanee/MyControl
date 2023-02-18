import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  form {
    height: 80vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: auto;
    margin: 0;

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

    .opcoes {
      label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-width: 80px;
        min-height: 80px;
        white-space: nowrap;
        overflow: hidden;  
        text-overflow: ellipsis;
      }
    }
  }

  .voltar {
    position: absolute;
    top: 12px;
    left: 12px;
    cursor: pointer;
  }

  .fields {
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    margin-bottom: 8px;
    input {
      width: 200px;
    }
  }

  .opcoes {
    display: flex;
    width: 100%;
    border: 2px solid black;
    min-height: 120px;
    align-items: center;
    padding-left: 12px;

    overflow-x: scroll;
  }
`