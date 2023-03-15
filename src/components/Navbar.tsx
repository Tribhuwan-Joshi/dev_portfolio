import React from "react";
import pfp from "../assets/pfp.png";
function Pfp() {
  return (
    <>
      <img
        src={pfp}
        className="rounded-full max-w-full w-[5rem]"
        alt="pfp"
        aria-label="pfp of tjsm"
      />
    </>
  );
}

function Navbar() {
  return (
    <nav className="bg-[#bd5d38] sticky  px-3 tracking-wide py-2 xs:w-[20%] xs:max-w-[17rem] xs:min-w-[8rem] flex justify-between items-center">
      <h1 className="text-white  xs:hidden text-[1.3rem]  tracking-wider">
        Tribhuwan Joshi
      </h1>
      <button className="border box-content  xs:hidden border-[rgba(255,255,255,.1)] px-4 py-3 rounded-[0.25rem] transition duration-400  ease-in-out  hover:border-white focus:border-white">
        <div className="hamburger  flex flex-col gap-[0.4rem] justify-evenly">
          <div className="bar bg-[rgba(255,255,255,.5)] w-[1.4rem] rounded-md   h-[0.10rem] "></div>
          <div className="bar bg-[rgba(255,255,255,.5)] w-[1.4rem]  rounded-md   h-[0.10rem] "></div>
          <div className="bar bg-[rgba(255,255,255,.5)] w-[1.4rem]  rounded-md   h-[0.10rem] "></div>
        </div>
      </button>
    </nav>
  );
}

export default Navbar;
