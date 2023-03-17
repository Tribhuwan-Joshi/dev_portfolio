import React from "react";
import netflix from "../assets/netflix.png"
import snaphunt from "../assets/snaphunt.png";
import memory from "../assets/memory.png";
import weatherapp from "../assets/weatherapp.png";



import { VscLinkExternal } from "react-icons/vsc";
type ProjectProps = {
  title: string;
  img: string;
  details: string;
  github: string;
  live: string;
};
function ProjectCard({ title, img, details, github, live }: ProjectProps) {
  return (
    <div className="border-[#343a40] rounded-md text-[#666b6f] border-[1px] p-1 cursor-pointer transition 200 ease-in-out hover:-translate-y-2">
      <img src={img} alt="SnapHunt" />
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[1.5rem]">{title}</h3>
          <p>{details}</p>
        </div>
        <div className="flex gap-4 items-end self-end ">
          <a href={live} target="_blank" rel="noreferrer">
            <VscLinkExternal size="1.3rem" />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-xl fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-full border-b-[1px] p-[3rem] flex   flex-col border-[#dee2e6] text-[#545b61]"
    >
      <div className="content sape-y-12 w-[85%] ">
        <h2
          className="text-[3.5rem] uppercase font-[700] mb-[3rem] text-[#343a40]"
          style={{ fontFamily: "'Saira Extra Condensed',serif" }}
        >
          Projects
        </h2>
        <div className="projects grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10">
          <ProjectCard
            title="Snap-Hunt"
            img={snaphunt}
            live="https://tribhuwan-joshi.github.io/Snap-Hunt/"
            github="https://github.com/Tribhuwan-Joshi/Snap-Hunt"
            details="A photo tagging game with global leaderboard"
          />
          <ProjectCard
            title="Netflix 2.0"
            img={netflix}
            live="https://netflix-a53c5.web.app/"
            github="https://github.com/Tribhuwan-Joshi/Netflix-2.0"
            details="Netflix clone with Firebase authentication"
          />
          <ProjectCard
            title="Memory Cards"
            img={memory}
            live="https://tribhuwan-joshi.github.io/memory-card/"
            github="https://github.com/Tribhuwan-Joshi/memory-card"
            details="Challenge your brain with cute dog cards"
          />
          <ProjectCard
            title="Weather Craft"
            img={weatherapp}
            live="https://tribhuwan-joshi.github.io/weather-app/"
            github="https://github.com/Tribhuwan-Joshi/weather-app"
            details="Weather app with minecraft theme"
          />
        </div>
      </div>
      <p className="my-10">
        For more projects visit my{" "}
        <a
          href="https://github.com/Tribhuwan-Joshi"
          className="relative text-blue-800 group"
        >
          github
          <span className="w-full  h-[0.014rem] bg-blue-800 absolute transition duration-200  scale-x-0 hover:scale-x-100 ease-in-out group-hover:scale-x-100 bottom-[2px] left-0 "></span>
        </a>
        {/* <a
          href="https://github.com/Tribhuwan-Joshi"
          className="text-blue-800 lol"
        >
          github.
          <span className="w-full h-[1px] bg-blue-800 absolute transition duration-200 scale-x-0  ease-in-out group-hover:scale-x-100 bottom-2 left-0 "></span>
        </a> */}
      </p>
    </section>
  );
}
