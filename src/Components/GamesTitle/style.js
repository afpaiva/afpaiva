import styled from 'styled-components';

export const Container = styled.div`

  color: white;
  font-size: 10pt;
  font-style: normal;
  font-weight: normal;

  position: relative;
  width: 100%;
  height: 200px;

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
    width: 150px;
  }

  h3{
    font-size: 17pt;
    margin: 0px;
  }

  .icons{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`