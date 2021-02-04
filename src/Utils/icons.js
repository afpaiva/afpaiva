import { ReactComponent as LogoBlender} from '../Assets/Images/logo_blender.svg';
import { ReactComponent as LogoCSharp} from '../Assets/Images/logo_csharp.svg';
import { ReactComponent as LogoCpp} from '../Assets/Images/logo_cpp.svg';
import { ReactComponent as LogoFreeglut} from '../Assets/Images/logo_freeglut.svg';
import { ReactComponent as LogoJS} from '../Assets/Images/logo_js.svg';
import { ReactComponent as LogoMysql} from '../Assets/Images/logo_mysql.svg';
import { ReactComponent as LogoPHP} from '../Assets/Images/logo_php.svg';
import { ReactComponent as LogoReact} from '../Assets/Images/logo_react.svg';
import { ReactComponent as LogoThree} from '../Assets/Images/logo_three.svg';
import { ReactComponent as LogoUnity} from '../Assets/Images/logo_unity.svg';

const logos = {
    blender: LogoBlender,
    csharp: LogoCSharp,
    cpp: LogoCpp,
    freeglut: LogoFreeglut,
    js: LogoJS,
    mysql: LogoMysql,
    php: LogoPHP,
    react: LogoReact,
    three: LogoThree,
    unity: LogoUnity
};

export default function LogoComponent(props){
  const SelectLogo = logos[props.logo];
  return <SelectLogo/>;
};