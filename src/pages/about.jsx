import React from "react";
import Button from "../component/button";
import Single from "./singleblog";
import { BsFilePdfFill } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <section class="about-us">
        <div class="about">
          <div className="text">
            <h2>About Us</h2>
            <p>
              Step into a realm where words breathe life, unveiling captivating
              narratives and insightful journalism. Our publication, a beacon of
              truth and creativity, illuminates the extraordinary within the
              ordinary. With a sharp eye for detail and a passion for
              storytelling, we traverse the rich tapestry of human experiences.
              Within these pages, discover gripping interviews with
              trailblazers, heartwarming tales of resilience, and
              thought-provoking analyses of our world. From the bustling urban
              streets to untouched natural serenity, our writers share stories
              that inspire, inform, and kindle curiosity. Join us in this
              expedition through life's pages, where every tale is a masterpiece
              waiting to be told. Embrace the power of words with us,
              celebrating the beauty of the human spirit together.
            </p>
            <div className="data">
              <a href="#" className="hire">
                Download{" "}
                <i>
                  <BsFilePdfFill />
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Button />
    </div>
  );
};

export default About;
