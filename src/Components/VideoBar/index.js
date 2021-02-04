import * as S from './style';
import bgdVideo from '../../Assets/Videos/wingsquest.mp4';

function VideoBar({name}){

  return(
    <S.Container>
      <video className="video" autoPlay loop muted>
        {name === 'wingsquest' &&
        <source src={bgdVideo} type='video/mp4' />}
        {name === 'magnetismo' &&
          <source src={bgdVideo} type='video/mp4' />}
      </video>
    </S.Container>
  );
}

export default VideoBar;