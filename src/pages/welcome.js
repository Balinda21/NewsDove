import React from "react";
// import { useState, useEffect } from "react";
// import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import Card from "../component/Card";

export default function Welcome() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero">
          <div className="text_1">
            <h2>Welcome to NewsBird</h2>
            <p>
              Step into a realm where words breathe life, unveiling captivating
              narratives<br></br> and insightful journalism.Our publication, a
              beacon of truth and creativity, <br></br>illuminates the
              extraordinary within the ordinary.
            </p>

            <div className="data">
              <a href="#" className="hire">
                <Link to="/About">Read More</Link>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
