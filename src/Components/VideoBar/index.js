import * as S from './style';
import videoWquest from '../../Assets/Videos/wingsquest.mp4';
import videoMagnet from '../../Assets/Videos/magnetismo.mp4';
import videoCloud from '../../Assets/Videos/cloudhunter.mp4';

function VideoBar({name, videoHeight, videoWidth}){

  return(
    <S.Container style={{height:`${videoHeight}px`,maxWidth:`${videoWidth}px`}}>
      <video className="video" autoPlay loop muted>
        {name === 'wingsquest' &&
        <source src={videoWquest} type='video/mp4' />}
        {name === 'magnetismo' &&
          <source src={videoMagnet} type='video/mp4' />}
        {name === 'cloudhunter' &&
          <source src={videoCloud} type='video/mp4' />}
      </video>
    </S.Container>
  );
}

export default VideoBar;