import './style.css';
import Welcome from '../../Components/Welcome';
import TechBar from '../../Components/TechBar';
import Works from '../../Components/Works';
import GamesTitle from '../../Components/GamesTitle';
import VideoBar from '../../Components/VideoBar';
import LogoBar from '../../Components/LogoBar';

import imgCalc from '../../Assets/Images/img_calculator.jpg';
import imgTour from '../../Assets/Images/img_tour.jpg';
import imgEnsaios from '../../Assets/Images/img_ensaios.jpg';
import imgWquest from '../../Assets/Images/img_wquest.png';
import imgCloud from '../../Assets/Images/img_cloud.png';
import imgTictac from '../../Assets/Images/img_tictac.gif';

function Home() {
  return (
    <>
      <Welcome/>
      <TechBar/>

      <Works
        type={"right"}
        background={"light"}
        title={"TO.CA. Calculator"}
        description1={`I created this
        calculator to help Architects and
        Engineers to calculate Ocupation
        Rates, Utilization Coefficient
        and Permeability Rates. These
        numbers are required by Planning
        Departaments in Brazil on architectural 
        design approbation.`}
        description2={`Made with JavaScript,
        React (web version) React
        Native with Expo.`}
        tech={["react","js"]}
        image={imgCalc}
        link={"http://www.ensaios3d.com/calc"}
        />

      <Works
        type={"left"}
        background={"dark"}
        title={"Electromagnetism"}
        description1={`An academic work. This website was developed to help students to understand the charge effects on a magnet field. Left Hand Rule. Modeled on Blender and interactions made using ThreeJS, and JavaScript.`}
        description2={`A partnership between the Pontifical Catholic University with CEPOC Poços de Caldas, MG - Brazil.`}
        tech={["three","js","blender"]}
        video={"magnetismo"}
        link={"https://afpaiva.github.io/magnetismo-CEPOC/"}
        />

      <Works
        type={"right"}
        background={"light"}
        title={"360 Interactive Tour"}
        description1={`An entire Real Estate presentation using photospheric architectural rendering, ThreeJS, HTML, CSS and JavaScript.`}
        description2={`More than 50 hotspots insert and linked in code.`}
        tech={["three","js","blender"]}
        image={imgTour}
        link={"http://ensaios3d.com/108/360varginha"}
        />

      <Works
        type={"left"}
        background={"dark"}
        title={"Ensaios3D.com"}
        description1={`My architectural visualization works website. My principal ocupation nowadays is as 3D architect. But I’m open and working to change my career as developer.`}
        description2={`Responsive, made using PHP, MySQL (contact form and a simple“administrative” area), JavaScript, HTML and CSS.`}
        tech={["php","mysql","js"]}
        image={imgEnsaios}
        link={"http://ensaios3d.com"}
        />

      <GamesTitle/>


      <Works
        type={"right"}
        background={"light"}
        title={"Wings Quest"}
        description1={`This is a 3D third person mobile game I’ve been working on free time.`}
        description2={`The idea is to create 3 characters each with a skill. They have to meet each other somewhere in the level. It will have some enemies and traps. A re-reading of The Lost Vikings (Silicon & Synapse 1992) idea.
        But I’ll finish the Cloud Hunter first. See below.`}
        tech={["unity","blender","csharp"]}
        image={imgWquest}
        imageType={"logo"}

        />

      <VideoBar name="wingsquest" videoHeight="250"/>


      <Works
        type={"left"}
        background={"light"}
        title={"Cloud Hunter"}
        description1={`In this mobile game you can to collect $BlueClouds and travel around the world in an oldstyle airplane.`}
        description2={`It will have IAP and some Ads for monetizing.
        Also under development. This one I’m willing to launch at least a MVP until June-21.`}
        tech={["unity","blender","csharp"]}
        image={imgCloud}
        imageType={"logo"}
        />

      <VideoBar name="cloudhunter" videoHeight="250"/>  

      <Works
        type={"left"}
        background={"light"}
        title={"TicTacToe"}
        description1={`Code games is a great excercise for programming. I did this TicTacToe game using an OpenGL library and C++.`}
        description2={`Check my GitHub to see the code`}
        tech={["cpp","freeglut"]}
        image={imgTictac}
        imageType={"logo"}
        link={"https://github.com/afpaiva/TicTacToe"}
        />

      <LogoBar/>

    </>
  );
}

export default Home;
