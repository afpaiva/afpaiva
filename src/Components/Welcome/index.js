import * as S from './style';
import { ReactComponent as Logo} from '../../Assets/Images/logo.svg';

function Welcome(){

  return(
    <S.Container>
      <Logo className="logo"/>
    </S.Container>
  );

}

export default Welcome;