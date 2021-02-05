import * as S from './style';
import { ReactComponent as Logo } from '../../Assets/Images/logo.svg';
import { ReactComponent as IconReact } from '../../Assets/Images/logo_react.svg';

function Footer(){
  return(
    <S.Container>

        <IconReact className="iconReact"/>

      <div className="container">

          <p>
          2021:<br/>
          This portfolio was made using React JS.<br/>
          </p>

        <Logo/>

      </div>
    </S.Container>
  );
}

export default Footer;