import styled from 'styled-components';

export const Container = styled.div`

  background: linear-gradient(
    264.18deg,
    #1B1B1B 2.13%,
    #393939 33.7%,
    #1B1B1B 79.29%);
  
  color: white;
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  p{
    font-weight: lighter;
    font-style: italic;
    margin: 0px 20px;
    z-index: 1;
  }

  svg{
    width: 200px;
    height: 100px;
    margin: 30px;
    fill: white;
  }

  .iconReact{
    position: absolute;
    width: 350px;
    height: 350px;
    fill: #252525;
    left: 10vw;
    z-index: 0;
  }

  .container{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    max-width: 750px;
  }

`;