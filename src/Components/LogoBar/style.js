import styled from 'styled-components';

export const Container = styled.div`

  position: relative;
  width: 100%;
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    264.18deg,
    #1B1B1B 2.13%,
    #393939 33.7%,
    #1B1B1B 79.29%);

  svg{
    fill: white;
    margin: 10px 20px;
    width: 200px;
  }


  @media(max-width: 420px){

    height: 120px;

    svg{
      width: 120px;
      margin: 0px 20px;
    }

  }

`;