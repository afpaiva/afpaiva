import * as S from './style';
import { ReactComponent as CurveA } from '../../Assets/Images/curve1.svg';
import { ReactComponent as CurveB } from '../../Assets/Images/curve2.svg';

function BackgroundAnimation(){
  return(
    <S.Container>
      <CurveA id="curve-a"/>
      <CurveB id="curve-b"/>
    </S.Container>
  );
}

export default BackgroundAnimation;