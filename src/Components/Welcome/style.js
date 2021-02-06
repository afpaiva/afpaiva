import styled from 'styled-components';

export const Container = styled.div`
  
  color: white;
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo{
    fill: #292929;
    animation:
      logo_breath
      .5s
      ease
      0s
      infinite
      alternate-reverse
  }

  .top{
    position: absolute;
    top: 0px;
  }

  @keyframes logo_breath {
    0%{
      width: 300px;
    }
    100%{
      width: 310px;
    }
  }

`