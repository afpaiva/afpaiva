import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  display: flex;
  flex-direction: row;

`;

export const Details = styled.div`

  display: flex;
  flex-direction: row;

  padding: 20px;
  width: 60vw;
  color: #292929;
  min-height: 400px;

  text-align: justify;

  h2{
    margin: 0px;
    text-shadow: -2px 2px 5px rgba(0, 0, 0, 0.25);
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 42px;
  }

  .det-container{
    width: 50vw;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .icons{
    display: flex;
    flex-direction: row;
  }

  [css="logo"]{
    fill: #292929;
    width: 50px;
    height: 50px;
    margin: 20px 5px 0px 5px;
  }

  @media(max-width: 420px){

    text-align: left;

    h2{
      margin: 0px;
      text-shadow: -2px 2px 5px rgba(0, 0, 0, 0.25);
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 42px;
    }

  }

`

export const Image = styled.div`

  width: 40vw;
  background-position-y: center;
  background-repeat: no-repeat;

`