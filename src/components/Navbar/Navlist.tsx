import { useEffect, useState } from "react";

function Navlist({
  navShow,
  handleShow,
}: {
  navShow: boolean;
  handleShow: () => void;
}) {
  const [activeSection, setActiveSection] = useState("");

  function handleIntersection(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // set the threshold to 50%
    });

    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    // clean up the observer when the component unmounts
    return () => observer.disconnect();
  }, []);
  return (
    <div
      className="bg-[#bd5d38] fixed -z-50 text-[rgba(255,255,255,.5)]  w-[100%] left-0 px-4 pb-2 transition-all duration-500 ease-in-out"
      style={{
        transform: navShow ? "scaleY(100%) " : "scaleY(-100%)",
        opacity: navShow ? "1" : "0",
      }}
    >
      <ul className="flex flex-col gap-3 pb-2">
        <li>
          <a
            onClick={handleShow}
            href="#about"
            className={`${
              activeSection === "about" ? "text-white" : ""
            } focus:text-white text-[1rem] font-medium py-1`}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            onClick={handleShow}
            href="#skills"
            className={`${
              activeSection === "skills" ? "text-white" : ""
            } focus:text-white text-[1rem] font-medium py-1`}
          >
            SKILLS
          </a>
        </li>

        <li>
          <a
            onClick={handleShow}
            href="#projects"
            className={`${
              activeSection === "projects" ? "text-white" : ""
            } focus:text-white text-[1rem] font-medium py-1`}
          >
            PROJECTS
          </a>
        </li>

        <li>
          <a
            onClick={handleShow}
            href="#interests"
            className={`${
              activeSection === "interests" ? "text-white" : ""
            } focus:text-white text-[1rem] font-medium py-1`}
          >
            INTERESTS
          </a>
        </li>

        <li>
          <a
            onClick={handleShow}
            href="#certifications"
            className={`${
              activeSection === "certifications" ? "text-white" : ""
            } focus:text-white text-[1rem] font-medium py-1`}
          >
            CERTIFICATIONS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navlist;
