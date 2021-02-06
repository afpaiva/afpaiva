import * as S from './style';
import ScrollableAnchor from 'react-scrollable-anchor';
import { ReactComponent as Logo} from '../../Assets/Images/logo.svg';

function Welcome(){

  return(
    <S.Container>
      <ScrollableAnchor id={'top'}><div className="top"/></ScrollableAnchor>
      <a href='#works'>
      <Logo className="logo"/>
      </a>
    </S.Container>
  );

}

export default Welcome;