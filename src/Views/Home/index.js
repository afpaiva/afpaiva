import './style.css';
import Welcome from '../../Components/Welcome';
import TechBar from '../../Components/TechBar';
import Works from '../../Components/Works';

import img1 from '../../Assets/Images/img01.jpg';

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
        image={img1}
        />
    </>
  );
}

export default Home;
