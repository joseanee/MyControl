import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  overflow-y: scroll;

  .organize {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;

    h3 {
      margin-right: 240px;
    }
  }

  h1 {
    justify-content: center;
    font-size: 22px;
    font-weight: bolder;
  }

  h4 {
    font-size: 18px;
    font-weight: bolder;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: #000;
  }

  .info {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .info.sub {
    width: 50%;
  }

  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 10px;
    padding-right: 20px;

    h4 {
      width: 340px;
      text-align: start;
    }
  }

  .linefooter {
    width: 340px;
    height: 2px;
    background-color: #000;
    margin-top: 6px;
    margin-bottom: 6px;
  }
`

export const Purchase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12px;
  width: 100%;
  padding: 20px;
  margin-bottom: 2px;

  .left {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h5 {
      width: 14.2%;
    }

    .move {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }
  }

  .right {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  .detalhes {
    width: 300px;
    height: 26px;
    word-wrap: break-word;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    	display: none;
	  }	
  }
`