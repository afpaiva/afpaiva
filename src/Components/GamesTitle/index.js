import * as S from './style';
import { ReactComponent as IconGame} from '../../Assets/Images/icon_game.svg';

function TechBar(){
  return(
    <S.Container>
      <div className="icons" >
        <IconGame/>
      </div>
        <h3>Mobile Games under Development</h3>
    </S.Container>
  );
}

export default TechBar;