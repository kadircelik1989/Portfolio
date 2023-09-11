import React from "react";
import { ReactComponent as Logo } from "../assets/Version control-bro.svg";

export default function Section1() {
  return (
    <section className="container flex justifyCenter section1Container">
      <div className="section1Hero">System Administrator</div>
      <div className="section1Content">
        I love creating web applications and enjoy working both on frontend and
        backend.
      </div>
      <Logo className="section1Logo"></Logo>
    </section>
  );
}
