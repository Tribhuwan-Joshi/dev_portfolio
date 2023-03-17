import React from "react";
import { BsCheck2 } from "react-icons/bs";
import {
  SiTypescript,
  SiTailwindcss,
  SiWebpack,
  SiFigma,
  SiJest,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import {
  DiReact,
  DiPython,
  DiNpm,
  DiLinux,
  DiMysql,
  DiMongodb,
  DiFirebase,
  DiGit,
} from "react-icons/di";
function Tools() {
  return (
    <div>
      <h3
        className="font-[500] text-[1.8rem] mb-[1rem] uppercase underline decoration-slate-400 decoration-[0.12rem]"
        style={{ fontFamily: "'Saira Extra Condensed',serif" }}
      >
        Programming Languages & Tools
      </h3>
      <div className="grid grid-cols-2 gap-6 text-[1.3rem] ">
        <ul className="space-y-2">
          <li className="whitespace-nowrap">
            {" "}
            <DiReact size="1.3rem" className="inline" /> React
          </li>
          <li className="whitespace-nowrap">
            <SiTypescript size="1.3rem" className="inline" /> Typescript
          </li>
          <li className="whitespace-nowrap">
            {" "}
            <SiTailwindcss size="1.3rem" className="inline" /> Tailwind
          </li>
          <li className="whitespace-nowrap">
            <SiWebpack size="1.3rem" className="inline" /> Webpack
          </li>
          <li className="whitespace-nowrap">
            <DiNpm size="1.3rem" className="inline" /> npm
          </li>
          <li className="whitespace-nowrap">
            {" "}
            <DiFirebase size="1.3rem" className="inline" /> Firebase
          </li>
          <li className="whitespace-nowrap">
            <DiMongodb size="1.3rem" className="inline" /> Mongodb
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="whitespace-nowrap">
            <SiFigma size="1.4rem" className="inline" /> Figma
          </li>
          <li className="whitespace-nowrap">
            <SiJest size="1.4rem" className="inline" /> JEST
          </li>
          <li className="whitespace-nowrap">
            <DiGit size="1.4rem" className="inline" /> GIT
          </li>
          <li className="whitespace-nowrap">
            <DiMysql size="1.4rem" className="inline" /> Mysql
          </li>
          <li className="whitespace-nowrap">
            <DiLinux size="1.4rem" className="inline" /> Linux
          </li>
          <li className="whitespace-nowrap">
            <TbBrandCpp size="1.4rem" className="inline" /> C++
          </li>
          <li className="whitespace-nowrap">
            <DiPython size="1.4rem" className="inline" />
            Python
          </li>
        </ul>
      </div>
    </div>
  );
}

function Workflow() {
  return (
    <div>
      <h3
        className="font-[500] text-[1.8rem] underline decoration-slate-400 decoration-[0.12rem] mb-[1rem] uppercase"
        style={{ fontFamily: "'Saira Extra Condensed',serif" }}
      >
        Workflow
      </h3>
      <ul className="space-y-2 text-[1.2rem]">
        <li className="relative">
          <BsCheck2 className="inline absolute top-1 -left-2 -ml-5" />
          Accessibility Scope Development
        </li>
        <li className="relative">
          <BsCheck2 className="inline absolute top-1 -left-2 -ml-5" />
          Performance Optimization
        </li>
        <li className="relative">
          <BsCheck2 className="inline absolute top-1 -left-2 -ml-5" />
          Mobile First , Responsive Design
        </li>
        <li className="relative">
          <BsCheck2 className="inline absolute top-1 -left-2 -ml-5" />
          Cross Browser Testing & Debugging
        </li>
        <li className="relative">
          <BsCheck2 className="inline absolute top-1 -left-2 -ml-5" />
          Git workflow{" "}
        </li>
        <li className="relative">
          <BsCheck2 className="inline absolute top-1 -left-2 -ml-5" />
          Module Pattern Coding
        </li>
        <li className="relative">
          <BsCheck2 className="inline absolute top-1 -left-2 -ml-5" />
          Minimalstic UI Design
        </li>
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-[100%] border-b-[1px] p-[3rem]     border-[#dee2e6]"
    >
      <div className="content " style={{ fontFamily: "'Open Sans',serif" }}>
        <h2
          className="text-[3.5rem] font-[700] mb-[3rem] text-[#343a40]"
          style={{ fontFamily: "'Saira Extra Condensed',serif" }}
        >
          SKILLS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-16">
          <Tools />
          <Workflow />
        </div>
      </div>
    </section>
  );
}

export default Skills;
