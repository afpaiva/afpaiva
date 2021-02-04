import * as S from './style';
import { ReactComponent as LogoUnity} from '../../Assets/Images/logo_unity.svg';
import { ReactComponent as LogoBlender} from '../../Assets/Images/logo_blender.svg';
import { ReactComponent as LogoCSharp} from '../../Assets/Images/logo_csharp.svg';
import { ReactComponent as LogoCpp} from '../../Assets/Images/logo_cpp.svg';
import { ReactComponent as LogoFreeglut} from '../../Assets/Images/logo_freeglut.svg';
import { ReactComponent as LogoJS} from '../../Assets/Images/logo_js.svg';
import { ReactComponent as LogoMysql} from '../../Assets/Images/logo_mysql.svg';
import { ReactComponent as LogoPHP} from '../../Assets/Images/logo_php.svg';
import { ReactComponent as LogoReact} from '../../Assets/Images/logo_react.svg';
import { ReactComponent as LogoThree} from '../../Assets/Images/logo_three.svg';

function Works({
  description1,
  description2,
  link,
  type,
  title,
  background,
  image,
  tech
  }) {

  function Det() {
    return (
      <div className="det-container">
        <h2>{title}</h2>
        <p>{description1}</p>
        <p>{description2}</p>
        <div className="icons">
          {
            tech.map((e) => {
              if (e === 'unity')
              return <LogoUnity css="logo"/>
              else if (e === 'blender')
              return <LogoBlender css="logo"/>
              else if (e === 'csharp')
              return <LogoCSharp css="logo"/>
              else if (e === 'cpp')
              return <LogoCpp css="logo"/>
              else if (e === 'freelgut')
              return <LogoFreeglut css="logo"/>
              else if (e === 'js')
              return <LogoJS css="logo"/>
              else if (e === 'mysql')
              return <LogoMysql css="logo"/>
              else if (e === 'php')
              return <LogoPHP css="logo"/>
              else if (e === 'react')
              return <LogoReact css="logo"/>
              else if (e === 'three')
              return <LogoThree css="logo"/>
          })}
        </div>
        <hr/>
        { tech[0]!="unity" &&
          <div  className="generic-button-work">
            <a href={link} target="_blank">Check this work</a>
          </div>
        }
      </div>)}

  background === 'light' ?
  background = "#DBDBDB" :
  background = "linear-gradient(48.82deg, #D6D6D6 22.39%, #A9A8A8 104.09%)";

  if (type === 'right'){
    return(
      <S.Container style={{background:`${background}`}}>
        <S.Image style={{backgroundImage:`url(${image})`}}/>
        <S.Details><Det/></S.Details>
      </S.Container>
    );
  }
  else if (type === 'left'){
    return(
      <S.Container style={{background:`${background}`}}>
        <S.Details style={{justifyContent: `flex-end`}}><Det/></S.Details>
        <S.Image style={{backgroundImage:`url(${image})`}}/>
      </S.Container>
    );
  }
}

export default Works;