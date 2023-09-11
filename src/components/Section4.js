import React from "react";
import StockTrackerLogo from "../assets/stokctrackerLogo.png";
import PokemonLogo from "../assets/PokeLogo.png";
import ManageOrderLogo from "../assets/ManageOrder.png";
import ComingSoon from "../assets/comingSoon.jpg";

export default function Section4() {
  return (
    <section className="section4Container" id="projects">
      <div className="section4ContentContainer">
        <h1>My Projects</h1>
        <div className="section4GridContainer">
          <div className="gridElementContainer">
            <div id="grid11">
              <img
                className="section4Img"
                src={StockTrackerLogo}
                alt="Errooor"
                id="img11"
              ></img>
              <div className="img12">
                <h1>Minimalist WebApp for inventory management.</h1>
                <a
                  href="https://snazzy-tiramisu-8503f3.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Visit Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="gridElementContainer">
            <img
              className="section4Img"
              src={ManageOrderLogo}
              alt="Errooor"
            ></img>
            <div className="img12">
              <h1>Order Management App designed for a Gastronomy Shop.</h1>
              <a
                href="https://mellifluous-bunny-fb45e3.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Visit Website</button>
              </a>
            </div>
          </div>
          <div className="gridElementContainer">
            <img className="section4Img" src={PokemonLogo} alt="Errooor"></img>
            <div className="img12">
              <h1>A small pokemon game to have some nostalgia.</h1>
              <a
                href="https://pokemongame-115x.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Visit Website</button>
              </a>
            </div>
          </div>
          <div className="gridElementContainer">
            <img className="section4Img" src={ComingSoon} alt="Errooor"></img>
            <div className="img12">
              <h1>Coming very soon!</h1>
              <button>Visit Website</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
