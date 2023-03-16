import React, { useState } from "react";
import pfp from "../../assets/pfp.png";
import Navlist from "./Navlist";
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
      className="border box-content  xs:hidden border-[rgba(255,255,255,.1)] px-3 py-2 rounded-[0.25rem] transition duration-400  ease-in-out  hover:border-white focus:border-white"
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

function Navbar() {
  const [navShow, setNavShow] = useState<boolean>(false);
  function handleShow(): void {
    setNavShow((prev) => !prev);
  }
  return (
    <nav className="bg-[#bd5d38] sticky space-y-2   px-4 tracking-wide py-3 xs:w-[20%] xs:max-w-[17rem] xs:min-w-[8rem] ">
      <div className="navbar flex justify-between items-center z-[100]">
        <h1 className="text-white  xs:hidden text-[1.2rem]  tracking-wider">
          Tribhuwan Joshi
        </h1>
        <NavButton handleShow={handleShow} />
      </div>

      <Navlist navShow={navShow} handleShow={handleShow} />
    </nav>
  );
}

export default Navbar;
