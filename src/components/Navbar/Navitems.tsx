import React, { useEffect, useState } from "react";

function Navitems() {
  const [active, setActive] = useState<string>("");
  function handleIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        setActive(e.target.id);
      }
    });
  }
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.7,
    });
    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <ul
      className="text-center hidden  xs:flex flex-col w-full text-[rgba(255,255,255,.5)] font-semibold"
      style={{ fontFamily: "Open Sans , serif" }}
    >
      <li>
        {" "}
        <a
          className={`${
            active === "about"
              ? "text-white"
              : "hover:text-[rgba(255,255,255,.75)]"
          }   py-[0.5rem] px-[1.2rem] text-[1rem] w-full block `}
          href="#about"
        >
          ABOUT{" "}
        </a>
      </li>
      <li>
        {" "}
        <a
          className={`${
            active === "skills"
              ? "text-white"
              : "hover:text-[rgba(255,255,255,.75)]"
          } py-[0.5rem] px-[1.2rem] text-[1rem] w-full block `}
          href="#skills"
        >
          SKILLS{" "}
        </a>
      </li>
      <li>
        {" "}
        <a
          className={`${
            active === "projects"
              ? "text-white"
              : "hover:text-[rgba(255,255,255,.75)]"
          } py-[0.5rem] px-[1.2rem] text-[1rem] w-full block `}
          href="#projects"
        >
          PROJECTS{" "}
        </a>
      </li>
      <li>
        {" "}
        <a
          className={`${
            active === "interests"
              ? "text-white"
              : "hover:text-[rgba(255,255,255,.75)]"
          } py-[0.5rem] px-[1.2rem] text-[1rem] w-full block `}
          href="#interests"
        >
          INTERESTS{" "}
        </a>
      </li>
      <li>
        {" "}
        <a
          className={`${
            active === "certifications" ? "text-white" : "hover:text-[rgba(255,255,255,.75)]"
          } py-[0.5rem] px-[1.2rem] text-[1rem] w-full block `}
          href="#certifications"
        >
          CERTIFICATIONS{" "}
        </a>
      </li>
    </ul>
  );
}

export default Navitems;
