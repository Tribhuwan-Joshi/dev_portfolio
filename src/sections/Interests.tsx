import React from "react";

function Interests() {
  return (
    <section
      id="interests"
      className="min-h-[100%] border-b-[1px] p-[3rem]  flex  sm:items-center border-[#dee2e6]"
    >
      <div className="content">
        <h2
          className="text-[3.5rem] font-[700] mb-[3rem] uppercase text-[#343a40]"
          style={{ fontFamily: "'Saira Extra Condensed',serif" }}
        >
          Interests
        </h2>
        <p className="mb-[1rem] text-[1rem]">
          Apart from being a geek, I enjoy spending most of my time relaxing in
          my room. I have special affection to painting due to watching{" "}
          <a
            href="https://youtu.be/lLWEXRAnQd0"
            className="relative text-blue-800 group"
          >
            Bob Ross
            <span className="w-full  h-[0.014rem] bg-blue-800 absolute transition duration-200  scale-x-0 hover:scale-x-100 ease-in-out group-hover:scale-x-100 bottom-[2px] left-0 "></span>
          </a>
          . I have an artistic eye, but unfortunately, my hands are not on the
          same page (<span className="text-[#bd5d38]">pun</span> intended).
        </p>
        <p>
          I loved watching
          <a
            href="https://youtu.be/_erVOAbz420"
            className="relative text-blue-800 group"
          >
            {" "}
            Cosmos{" "}
            <span className="w-full  h-[0.014rem] bg-blue-800 absolute transition duration-200  scale-x-0 hover:scale-x-100 ease-in-out group-hover:scale-x-100 bottom-[2px] left-0 "></span>
          </a>{" "}
          hosted by Neil Tyson as a kid, which sparked my interest in stars and
          galaxies <i>"The cosmos is within us" ~ </i> (Carl Sagan's voice).
        </p>

        <p className="text-[1rem]">
          {" "}
          I have a special affection for nature and the hills as my hometown is
          located in a mountainous area. I often prefer to visit there to
          appreciate the nature.
        </p>
      </div>
    </section>
  );
}

export default Interests;
