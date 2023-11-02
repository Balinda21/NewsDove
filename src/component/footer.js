import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

// import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Info</h4>
          <ul className="links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Compressions</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Collection</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li>
              <a href="#">Journalists</a>
            </li>
            <li>
              <a href="#">Latest News</a>
            </li>
            <li>
              <a href="#">Themes</a>
            </li>
            <li>
              <a href="#">Popular News</a>
            </li>
            <li>
              <a href="#">New Uploads</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li>
              <a href="#">Customer Agreement</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Media Kit</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose of news, updates,
            helpful tips, and exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required></input>
            <button className="suscribe" type="submit">
              SUBSCRIBE
            </button>
          </form>
          <div className="icons">
            <i className="">
              <BsFacebook />
            </i>
            <i className="">
              <BsTwitter />
            </i>
            <i className="">
              <BsWhatsapp />
            </i>
            {/* <i class="">
              <AiFillGithub />
            </i> */}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;
