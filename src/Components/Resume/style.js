import styled from 'styled-components';

export const Container = styled.div`

  margin: auto;
  max-width: 750px;
  color: #292929;

  display: flex;
  flex-direction: row;

  svg{
    fill: #292929;
    width: 50px;
    margin-left: 15px;
  }

  section{
    padding: 20px;
    text-align: justify;
  }

  h1, h3{
    text-shadow: -2px 2px 5px rgba(0, 0, 0, 0.25);
  }

  img {
    width: 300px;
  }
  
  .icons{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  spam{
    background-color: #ffed93;
  }

@media(max-width:600px){
  img {
    width: 40vw;
  }
  svg{
    width: 30px;
  }
}

`;