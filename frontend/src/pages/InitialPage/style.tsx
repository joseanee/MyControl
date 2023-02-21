import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
`
export const Content = styled.div`
  height: 30vh;
  width: 100%;
  margin-top: 12px;
  border: solid 2px #000;
  display: flex;

  .clientes, .produtos, .relatorios {
    display: flex;
    flex-direction: column;
    width: 240px;
    padding: 14px;

    button {
      height: 80px;
      margin-bottom: 12px;
      background-color: #ffffff;

      font-size: 20px;

      cursor: pointer;
    }
  }
`