import React, { useState } from "react";
import { Link } from "react-scroll";
import pfp from "../assets/pfp.png";
function Pfp() {
  return (
    <>
      <img
        src={pfp}
        className="rounded-flil max-w-flil w-[5rem]"
        alt="pfp"
        aria-label="pfp of tjsm"
      />
    </>
  );
}

function NavButton({ handleShow }: { handleShow: () => void }) {
  return (
    <button
      className="border box-content  xs:hidden border-[rgba(255,255,255,.1)] px-4 py-3 rounded-[0.25rem] transition duration-400  ease-in-out  hover:border-white focus:border-white"
      onClick={handleShow}
    >
      <div className="hamburger  flex flex-col gap-[0.4rem] justify-evenly">
        <div className="bar bg-[rgba(255,255,255,.5)] w-[1.4rem] rounded-md   h-[0.10rem] "></div>
        <div className="bar bg-[rgba(255,255,255,.5)] w-[1.4rem]  rounded-md   h-[0.10rem] "></div>
        <div className="bar bg-[rgba(255,255,255,.5)] w-[1.4rem]  rounded-md   h-[0.10rem] "></div>
      </div>
    </button>
  );
}

function Navlist({ navShow }: { navShow: boolean }) {
  return (
    <div
      className="bg-[#bd5d38] fixed  text-[rgba(255,255,255,.5)]  w-[100%] left-0 px-4 pb-2 transition-all duration-500 linear"
      style={{
        transform: navShow ? "scaleY(100%) " : "scaleY(0)",
        transformOrigin: "top",
      }}
    >
      <ul className="flex flex-col gap-3 pb-2">
        <li>
          <a
            href="#about"
            className=" focus:text-white text-[1.2rem] font-medium py-1"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className=" focus:text-white text-[1.2rem] font-medium py-1"
          >
            SKILLS
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className=" focus:text-white text-[1.2rem] font-medium py-1"
          >
            PROJECTS
          </a>
        </li>

        <li>
          <a
            href="#interests"
            className=" focus:text-white text-[1.2rem] font-medium py-1"
          >
            INTERESTS
          </a>
        </li>

        <li>
          <a
            href="#certifications"
            className=" focus:text-white text-[1.2rem] font-medium py-1"
          >
            CERTIFICATIONS
          </a>
        </li>
      </ul>
    </div>
  );
}

function Navbar() {
  const [navShow, setNavShow] = useState<boolean>(false);
  function handleShow(): void {
    setNavShow((prev) => !prev);
  }
  return (
    <nav className="bg-[#bd5d38] sticky space-y-2  px-4 tracking-wide py-3 xs:w-[20%] xs:max-w-[17rem] xs:min-w-[8rem] ">
      <div className="navbar flex justify-between items-center">
        <h1 className="text-white  xs:hidden text-[1.5rem]  tracking-wider">
          Tribhuwan Joshi
        </h1>
        <NavButton handleShow={handleShow} />
      </div>

      <Navlist navShow={navShow} />
    </nav>
  );
}

export default Navbar;
