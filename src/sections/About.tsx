import React from 'react'

function About() {
  return (
    <section
      id="about"
      className="h-[100%] border-b-[1px] p-[3rem]  flex items-center border-[#dee2e6]"
    >
      <div className="content space-y-10">
        <div className="intro">
          <h1
            className="  text-[4.5rem] text-[#343a40] sm:text-[6rem] height leading-[4rem] sm:leading-[5.5rem]"
            style={{ fontFamily: "'Saira Extra Condensed',serif" }}
          >
            TRIBHUWAN <span className="text-[#bd5d38]">JOSHI</span>
          </h1>
          <h3>
            Developer focused on crafting high-performance, scalable web
            applications.
          </h3>
        </div>
        <div className="about">
          <p>
            I am experienced in leveraging agile frameworks to provide a robust
            synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value
            proposition.
          </p>
        </div>
        <div className="icons h-[100px] bg-red-500"></div>
      </div>
    </section>
  );
}

export default About