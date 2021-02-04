import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 500px;
  background-color: #dbdbdb;

  display: flex;
  flex-direction: row;

`;

export const Details = styled.div`

  padding: 20px;
  width: 40vw;
  color: #292929;

  text-align: justify;

  background-color: lightgray;

  h2{
    margin: 0px;
    text-shadow: -2px 2px 5px rgba(0, 0, 0, 0.25);
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 42px;
  }

  .icons{
    display: flex;
    flex-direction: row;
  }

`

export const Image = styled.div`

  width: 45vw;
  height: 250px;
  background-position: center;

`