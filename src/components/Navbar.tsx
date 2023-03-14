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
    <div className="  bg-[#bd5d38] h-[10%] w-full fixed sm:h-[100vh]    sm:w-[18%]  text-[#868e96]">
      <Pfp />
    </div>
  );
}

export default Navbar;
