import React from "react";
import { FaDatabase } from "react-icons/fa";
import { GoTerminal } from "react-icons/go";
import { MdHandyman } from "react-icons/md";

export default function Section3() {
  return (
    <section className="section3Container">
      <div className="section3ContentContainer">
        <div className="section3Content">
          <div className="iconContainer">
            <FaDatabase className="icon"></FaDatabase>
          </div>
          <h1>Backend Development</h1>
          <h2>
            Driving Innovation and Empowering Excellence: Unleashing the
            Potential of Backends with Passionate Expertise
          </h2>
          <div className="divider"></div>
          <ul>
            <li>NodeJs</li>
            <li>ExpressJs</li>
            <li>NoSql(MongoDB)</li>
            <li>Sql(Postgres)</li>
            <li>GraphQL</li>
            <li>SQLServer</li>
            <li>C# .NET6</li>
          </ul>
        </div>
        <div className="section3Content">
          <div className="iconContainer">
            <GoTerminal className="icon"></GoTerminal>
          </div>
          <h1>Frontend Development</h1>
          <h2>
            Harmonizing Technology and Design: Crafting Seamless User
            Experiences through Expert Frontend Solution
          </h2>
          <div className="divider"></div>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>Angular</li>
            <li>Typescript</li>
            <li>Css, Sass</li>
            <li>Html</li>
          </ul>
        </div>
        <div className="section3Content">
          <div className="iconContainer">
            <MdHandyman className="icon"></MdHandyman>
          </div>
          <h1>Tools</h1>
          <h2>
            Fusing Technology and Craftsmanship: Crafting Seamless Web
            Experiences with Cutting-Edge Development Tools
          </h2>
          <div className="divider"></div>
          <ul>
            <li>Git/Github</li>
            <li>Postman</li>
            <li>MaterialUI</li>
            <li>Apollo Server</li>
            <li>Entity Framework</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
