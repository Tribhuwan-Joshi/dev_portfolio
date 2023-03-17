import About from "../sections/About";
import Interests from "../sections/Interests";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Certifications from "../sections/Certifications";

function Main() {
  return (
    <div className="flex-1  overflow-auto scroll-smooth ">
      <About/>
      <Skills/>
      <Projects/>
      <Interests/>
      <Certifications/> 
    </div>
  );
}

export default Main;
