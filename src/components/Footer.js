import React from "react";
import { ReactComponent as Logo } from "../assets/logog.svg";
import { ImLinkedin2, ImGithub } from "react-icons/im";
import { LuCopyright } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerImgContainer">
        <Logo className="logo" />
      </div>
      <div className="footerTextContainer">Learn, Design & Build</div>
      <div className="footerIconContainer flex">
        <a
          className="footerIconBox"
          href="https://www.linkedin.com/in/muhammed-ali-erdel/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin2></ImLinkedin2>
        </a>
        <a
          className="footerIconBox"
          href="https://github.com/nagonad"
          target="_blank"
          rel="noreferrer"
        >
          <ImGithub></ImGithub>
        </a>
      </div>
      <div className="footerCopy">
        <div className="copy">
          <LuCopyright></LuCopyright>
        </div>
        <h3>Kadir Celik 2003</h3>
      </div>
    </footer>
  );
}
