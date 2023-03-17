import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="h-[100%] border-b-[1px] p-[3rem]  flex  sm:items-center border-[#dee2e6]"
    >
      <div className="content ">
        <h2
          className="text-[3.5rem] font-[700] mb-[3rem] text-[#343a40]"
          style={{ fontFamily: "'Saira Extra Condensed',serif" }}
        >
          SKILLS
        </h2>

        <div className="flex justify-between">
          <div>
            <h4
              className="font-[500] text-[1.5rem] mb-[1rem] uppercase"
              style={{ fontFamily: "'Saira Extra Condensed',serif" }}
            >
              Programming Languages & Tools
            </h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>Webpack</li>
              <li>REACT</li>
              <li>Typescript</li>
              <li>TailwindCSS</li>
              <li>Figma</li>
              <li>JEST</li>
              <li>GIT</li>
              <li>C++</li>
              <li>Python</li>
              <li>npm</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div>
            <h4
              className="font-[500] text-[1.5rem] mb-[1rem] uppercase"
              style={{ fontFamily: "'Saira Extra Condensed',serif" }}
            >
              Workflow
            </h4>
            <ul>
              <li>Accessibility Scope Development</li>
              <li>Performance Optimization</li>
              <li>Mobile First , Responsive Design</li>
              <li>Cross Browser Testing & Debugging</li>
              <li>Git workflow </li>
              <li>Module Pattern Coding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
