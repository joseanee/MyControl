import styled from "styled-components/macro";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 40px 0 20px 60px;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  overflow-y: scroll;

  .title {
    display: flex;
    position: absolute;
    width: 900px;
    justify-content: space-around;
    top: 6px;
    left: 20%;

    form {
      input {
        margin-right: 10px;
      }

      button {
        width: 80px;
        background-color: lightgreen;
        color: #000;
        font-size: 20px;
      }
    }

    h1 {
      margin-right: 8px;
    }
  }

  .voltar {
    position: absolute;
    top: 2px;
    left: 2px;
    cursor: pointer;
  }
`