import styled from 'styled-components';

export const Container = styled.div`

  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  #curve-a,
  #curve-b{
    width: 3000px;
    position: absolute;
  }

  #curve-a{
    top: 40vh;
    fill: #EFEFEF;
  }

  #curve-b{
    top: 45vh;
    fill: #F4F4F4;
  }

  #curve-a{
    animation:
      keys_curves_ab
      5s
      linear
      0s
      infinite
      normal;
  }

  #curve-b{
    animation:
      keys_curves_ab
      3s
      linear
      0s
      infinite
      normal;
  }

  @keyframes keys_curves_ab{
    0%{
      left: -1462px;
    }
    100%{
      left: 0px;
    }
  }

  @keyframes keys_curves_cd{
    0%{
      left: -2942px;
    }
    100%{
      left: -1462px;
    }
  }

`;
