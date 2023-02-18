import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: scroll;
  padding: 60px;

  h1 {
    font-size: 20px;
    font-weight: bolder;
  }

  .voltar {
    position: absolute;
    top: 2px;
    left: 2px;
  }

  header {
    display: flex;
    justify-content: space-around;
    width: 700px;

    input {
      margin-right: 10px;
    }
  }

  .transactions {
    margin-top: 20px;
    width: 600px;
    height: 500px;
    overflow-y: scroll;
    border: solid 2px #000;
    padding: 10px;
  }

  .transaction {
    margin-bottom: 6px;
  }
`