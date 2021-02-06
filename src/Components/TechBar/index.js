import * as S from './style';
import ScrollableAnchor from 'react-scrollable-anchor';
import { ReactComponent as LogoUnity} from '../../Assets/Images/logo_unity.svg';
import { ReactComponent as LogoCsharp} from '../../Assets/Images/logo_csharp.svg';
import { ReactComponent as LogoReact} from '../../Assets/Images/logo_react.svg';
import { ReactComponent as LogoJS} from '../../Assets/Images/logo_js.svg';

function TechBar(){
  return(
    <S.Container>
      <ScrollableAnchor id={'works'}><div className="anchor"/></ScrollableAnchor>
        <h3>Main technologies used in my works:</h3>
        <div className="icons" >
          <LogoUnity/>
          <LogoCsharp/>
          <LogoReact/>
          <LogoJS/>
        </div>
        
    </S.Container>
  );
}

export default TechBar;