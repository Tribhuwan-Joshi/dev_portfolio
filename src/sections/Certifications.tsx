import React from "react";
import { VscLinkExternal } from "react-icons/vsc";
import {FaStar} from "react-icons/fa"
function Certifcates() {
  return (
    <div className="text-[1.2rem] mt-0  inline-grid grid-cols-[auto_1fr_auto] gap-y-6 justify-items-start gap-x-4 items-center grid-gap-[1.2rem] ">
      <FaStar className="text-[1rem]" />
      <h4 className="nowrap">Azure AI-900 - Microsoft Certified </h4>
      <a
        href="https://www.credly.com/badges/90af8096-ba66-49ee-9a70-effabf02469c/public_url"
        target="_blank"
        rel="noreferrer"
      >
        <VscLinkExternal size="1rem" />
      </a>

      <FaStar className="text-[0.8rem] sm:text-[1rem]" />
      <h4 className="nowrap"> IT specialist - Google Certification</h4>
      <a
        href="https://www.coursera.org/account/accomplishments/professional-cert/NQ8VPTQQN2AU"
        target="_blank"
        rel="noreferrer"
      >
        <VscLinkExternal size="1rem" />
      </a>

      <FaStar className="text-[1rem]" />
      <h4 className="nowrap">CS50 - Harvard</h4>

      <a
        href="https://certificates.cs50.io/0f04cf1d-f674-4a26-8fbf-45e6b12d9d84.pdf?size=letter"
        target="_blank"
        rel="noreferrer"
      >
        <VscLinkExternal size="1rem" />
      </a>

      <FaStar className="text-[1rem]" />
      <h4 className="nowrap">Responsive Web Designs - FCC</h4>
      <a
        href="https://www.freecodecamp.org/certification/fcc9e66badb-6a20-4a0e-91d7-d51f5c9a44b4/responsive-web-design"
        target="_blank"
        rel="noreferrer"
      >
        <VscLinkExternal size="1rem" />
      </a>
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-full leading-[2.8rem] border-b-[2px] p-[3rem]  flex  sm:items-center border-[#dee2e6]"
    >
      <div className="content space-y-12">
        <h2
          className="text-[3.5rem] font-[700]  mb-[3rem] uppercase text-[#343a40]"
          style={{ fontFamily: "'Saira Extra Condensed',serif" }}
        >
          Certifications And Learning
        </h2>
        <Certifcates />
      </div>
    </section>
  );
}
