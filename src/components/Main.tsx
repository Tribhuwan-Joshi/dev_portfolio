import React from "react";

function Main() {
  return (
    <div className="flex-1  overflow-auto scroll-smooth ">
      <section id="about" className="h-[100%] bg-pink-200"></section>
      <section id="skills" className="h-[100%] bg-pink-400"></section>
      <section id="projects" className="h-[100%] bg-pink-800"></section>
      <section id="interests" className="h-[100%] bg-gray-400"></section>
      <section id="certifications" className="h-[100%] bg-red-200"></section>
    </div>
  );
}

export default Main;
