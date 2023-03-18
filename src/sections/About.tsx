function Icons() {
  return (
    <ul className="icons flex gap-5 w-[20%] min-w-[200px] mt-[5rem] h-[100px]">
      <li>
        <a
          href="https://github.com/Tribhuwan-Joshi"
          rel="noreferrer"
          target="_blank"
        >
          <div className="bg-[#495057] w-[3rem] h-[3rem] rounded-full flex justify-center items-center transition duration-200 ease-in-out hover:bg-[#bd5d38]">
            <i className="fab fa-github text-white fa-xl"></i>
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/tribhuwan-joshi-2568a2200/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="bg-[#495057] w-[3rem] h-[3rem] rounded-full flex justify-center transition duration-200 ease-in-out items-center hover:bg-[#bd5d38]">
            <i className="fab fa-linkedin text-white fa-xl"></i>
          </div>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/Tribhuw02987695"
          rel="noreferrer"
          target="_blank"
        >
          <div className="bg-[#495057] w-[3rem] h-[3rem] rounded-full flex justify-center items-center transition duration-200 ease-in-out  hover:bg-[#bd5d38]">
            <i className="fab fa-twitter text-white fa-xl"></i>
          </div>
        </a>
      </li>
    </ul>
  );
}

function About() {
  return (
    <section
      id="about"
      className="min-h-[100%] border-b-[1px] p-[3rem]  flex  items-center sm:items-center border-[#dee2e6]"
    >
      <div className="content space-y-12">
        <div className="intro">
          <h1
            className="  text-[4.5rem] text-[#343a40] sm:text-[6rem] font-[700] height leading-[4rem] sm:leading-[5.5rem]"
            style={{ fontFamily: "'Saira Extra Condensed',serif" }}
          >
            TRIBHUWAN <span className="text-[#bd5d38]">JOSHI</span>
          </h1>
          <h3
            className="text-[1.35rem] font-[500]  "
            style={{ fontFamily: "'Saira Extra Condensed',serif" }}
          >
            Technology Enthusiast · Web App Developer · (317) 585-8468 ·
            <a
              href="mathincosmos@gmail.com"
              className="relative text-[#bd5d38] group"
            >
              MATHINCOSMOS@GMAIL.COM
              <span className="w-full h-[1px] bg-black absolute transition duration-200 scale-x-0  ease-in-out group-hover:scale-x-100 bottom-2 left-0 "></span>
            </a>
          </h3>
        </div>
        <div className="info w-[90%] sm:w-[80%]">
          <p className=" text-[#666b6f] mb-1" style={{ fontFamily: "Open sans" }}>
            I am experienced in leveraging web frameworks to provide a robust
            synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value
            proposition.
          </p>
          <p>
            {" "}
            I am dedicated to producing high-quality and{" "}
            <span className="text-[#bd5d38]"> scalable </span>
            solutions by adhering to{" "}
            <span className="text-[#bd5d38]"> clean coding </span> practices. By
            prioritizing clean, maintainable code, I ensure that my projects are
            efficient and reliable for long-term success.
          </p>
        </div>

        <Icons />
      </div>
    </section>
  );
}

export default About;
