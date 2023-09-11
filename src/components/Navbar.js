import React, { useEffect, useState } from "react";

import { ReactComponent as Logo } from "../assets/logog.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar({ setOpenColorPicker, openColorPicker }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openClass, setOpenClass] = useState("none");

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      setOpenClass("block");
    } else {
      setOpenClass("none");
    }
  }, [isOpen]);

  return (
    <div className="navbarContainer container">
      <div className="navbarLogoContainer">
        <div
          onClick={() => setOpenColorPicker(!openColorPicker)}
          className="logoContainer"
        >
          <Logo className="logo" />
        </div>
        <div onClick={handleOpen} className="burgermenuContainer logoContainer">
          {isOpen ? (
            <AiOutlineClose></AiOutlineClose>
          ) : (
            <GiHamburgerMenu></GiHamburgerMenu>
          )}
        </div>
      </div>
      <div className={`navbarTextContainer ${openClass}`}>
        <a href="#projects" className="navbarAnchor">
          <div className="Inter navbarText">Projects</div>
        </a>
        {/* <div className="navbarAnchor Inter navbarText">
          <div>Pick a Color</div>
        </div> */}
      </div>
    </div>
  );
}
