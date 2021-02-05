import * as S from './style';
import andre from '../../Assets/Images/andre_fonseca_de_paiva.jpg';
import cert1 from '../../Assets/Images/cert1.png';
import cert2 from '../../Assets/Images/cert2.jpg';
import cert3 from '../../Assets/Images/cert3.jpg';
import cert4 from '../../Assets/Images/cert4.jpg';
import cert5 from '../../Assets/Images/cert5.png';
import cert6 from '../../Assets/Images/cert6.jpg';
import cert7 from '../../Assets/Images/cert7.jpg';
import { ReactComponent as GitHub } from '../../Assets/Images/logo_github.svg';
import { ReactComponent as LinkedIn } from '../../Assets/Images/logo_linkedin.svg';

function Resume(){
  return(
    <S.Container>
      
      <div>
        
          <img src={andre} alt="Andre Fonseca de Paiva"/>
          <div className="icons">
            <GitHub style={{cursor:`pointer`}} onClick={()=>window.open("https://github.com/afpaiva")}/>
            <LinkedIn style={{cursor:`pointer`}} onClick={()=>window.open("https://www.linkedin.com/in/afpaiva/")}/>
          </div>
          <div>
           <img src={cert1} alt="FreeCodeCamp(🔥)"/>
           <img src={cert2} alt="Hackatruck"/>
           <img src={cert3} alt="Hackatruck"/>
           <img src={cert4} alt="SoloLearn"/>
           <img src={cert5} alt="Seminarios 1 PUC"/>
           <img src={cert6} alt="Udemy Unity"/>
           <img src={cert7} alt="Udemy WordPress"/>
          </div>

      </div>

      <div>
          <section>
            <h1>André Fonseca de Paiva</h1>
            <p>
              Graduated Architect and Urbanist, and Graduating in Computer Science at Pontifical Catholic University of Minas Gerais, Poços de Caldas-MG, Brazil. Working with Computer Graphics and development as a self employee since 2004.
            </p>
            <p>
              My first contact with programming was around 1995, when my father teached me Clipper and FoxBase, since that time I was always fascinated by computers and all the variety of things that could be created. While my first graduation and a few years after, I worked as a freelancer with Web Development, using HTML, ASP and Access, Macromedia Flash and Dreamweaver.
            </p>
            <p>
             In 2004 and 2005, I developed a website to cover the Brazilian Paragliding Championship event. The website gave support to the pilots during subscription, and while the event happened, including pictures, diary articles and staff information. I also made the graphic design, t-shirt design and a CD-ROM (made on Flash), including the label design.
            </p>
            <p>
             In a partnership with a friend, musician and bass player, created in 2006 a website like the old Orkut, for bassists to learn and train music. It was made with ASP and ACCESS, and had all the functionalities of Orkut, like embed YouTube Videos, send messages and comments. These are two of a lot of work done in this period.
            </p>
            <p>
             I had worked in São Paulo - Brazil, on Digital Light Studio for one year (2008), where I refined my knowledge on 3D. Returning to my city I continue working with old clients, and getting more contact. Today, while studying technologies and freelancing, I'm looking for opportunities abroad, where I can share my knowledge, work in a friendly environment, with good people, in a good city, and continue this permanent process of learning.
            </p>

            <h3>Experience:</h3>

            <h4>2008 - 2020</h4>
            <h5>at ensaios3D.com</h5>
            <ul>
              <li> Managing my own office attending to production, selling, and clients care.</li>
              <li> Consistently receive indication of new clients from satisfied customers.</li>
              <li> Dedicated to continue growing on computer science field through practice and specialty training.</li>
              <li> Working remotely as freelancer architectural 3D modeler for CPVisual (projects on Brazil and USA).</li>
              <li> Working with an average of 85 jobs per year.</li>
              <li> Reputation of win clients with a good quality job, with punctuality and attention.</li>
            </ul>


            <h4>2007 - 2008</h4>
            <h5>at Digital Light Computação Gráfica</h5>
            <ul>
              <li> Liaising with large architecture and landscape projects</li>
              <li> Improving technical knowledge on 3Ds Max, Photoshop and VRay</li>
              <li> Working with layers, objects and files ensuring a good staff communication</li>
              <li> External image of the month award for 3 times in one year while working on Digital Light.</li>
            </ul>


            <h4>2004 - 2007</h4>
            <h5>as freelancer</h5>
            <ul>
              <li> Self knowledge of graphic design, 3D software and webdesign.</li>
              <li> Working for other architects helping with drawings for presentation, construction and approving on City Planning Department (Secretaria de Planejamento e Desenvolvimento Urbano de Poços de Caldas MG).</li>
              <li> Many of these clients use to hire me until nowadays on Ensaios3D.com.</li>
            </ul>


            <h3>Education:</h3>

            <h4>2020 - 2024</h4>
            <h5>Bar. Computer Science</h5>
            <ul>
              <li>
              Pontifical Catholic University of Minas Gerais
              Poços de Caldas-MG, Brazil
              </li>
            </ul>


            <h4>1998 - 2004</h4>
            <h5>Bar. Architecture and Urbanism</h5>
            <ul>
              <li>
              Pontifical Catholic University of Minas Gerais
              Poços de Caldas-MG, Brazil
              </li>
            </ul>


            <h3>Language:</h3>

            <h4>English</h4>
            <ul>
              <li>
              Advanced
              (Communication and Fluence - Number One English School 1997)
            </li>
            </ul>

            <h4>Portuguese</h4>
            <ul>
              <li>
                Native
              </li>
            </ul>
            
          </section>
      </div>

    </S.Container>
  );
}

export default Resume;