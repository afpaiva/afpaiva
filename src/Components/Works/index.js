import * as S from './style';
import LogoComponent from '../../Utils/icons';

function Works({
  description1,
  description2,
  type,
  title,
  background,
  image,
  tech
  }) {

  return(
    <S.Container>
   
      <S.Image style={{backgroundImage:`url(${image})`}}/>
      <S.Details>
        <h2>{title}</h2>
        <p>{description1}</p>
        <p>{description2}</p>
        <div className="icons">
          {
            tech.forEach((e) =>(
              <LogoComponent logo={e}/>
            ))
          }
        </div>
      </S.Details>

    </S.Container>
  );
}

export default Works;