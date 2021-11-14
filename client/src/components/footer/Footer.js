import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as VisaIcon } from "../../assets/images/visa.svg";
import { ReactComponent as PaypalIcon } from "../../assets/images/paypal.svg";
import { ReactComponent as AmexIcon } from "../../assets/images/amex.svg";
import { ReactComponent as DiscoverIcon } from "../../assets/images/discover.svg";
import { ReactComponent as MastercardIcon } from "../../assets/images/mastercard.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/images/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagram.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github.svg";
import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="column one">
        <div className="column-heading">ABOUT</div>
        <div className="about">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus voluptas quia exercitationem, porro et non laborum
          laudantium laboriosam dolore fugiat sint. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="cards">
          <i className="card">
            <VisaIcon />
          </i>
          <i className="card">
            <PaypalIcon />
          </i>
          <i className="card">
            <AmexIcon />
          </i>
          <i className="card">
            <DiscoverIcon />
          </i>
          <i className="card">
            <MastercardIcon />
          </i>
        </div>
      </div>
      <div className="column two">
        <div className="column-heading">CATEGORIES</div>
        <div className="column-items">
          <Link target="_blank" to="/collections/t-shirts" className="link">
            T-Shirts
          </Link>
          <Link target="_blank" to="/collections/jackets" className="link">
            Jackets
          </Link>
          <Link  target="_blank" to="/collections/shoes" className="link">
            Shoes
          </Link>
          <Link target="_blank" to="/collections/hoodies" className="link">
            Hoodies
          </Link>
          <Link target="_blank" to="/collections/jeans" className="link">
            Jeans
          </Link>
        </div>
      </div>
      <div className="column three">
        <div className="column-heading">INFORMATION</div>
        <div className="column-items">
          <Link target="_blank" to="/" className="link">
            About Us
          </Link>
          <Link target="_blank" to="/" className="link">
            Contact Us
          </Link>
          <Link target="_blank" to="/" className="link">
            Terms & Conditions
          </Link>
          <Link target="_blank" to="/" className="link">
            Return & Exchange
          </Link>
          <Link target="_blank" to="/" className="link">
            Shipping & Delivery
          </Link>
          <Link target="_blank" to="/" className="link">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="column four">
        <div className="column-heading">CONTACT</div>
        <div className="contact-info">
          <div>
            XYZ, New Delhi, India <br />
            Pin code - 110002
          </div>
          <div className="contact-number">+91 923504XXX</div>
          <div className="social-media">
            <a  target="_blank" rel="noreferrer" href="https://www.facebook.com">
              <FacebookIcon />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.twitter.com">
              <TwitterIcon />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
              <InstagramIcon />
            </a>
            <a  target="_blank" rel="noreferrer" href="https://www.github.com">
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="up-arrow" onClick={()=> window.scroll({ top:0, behavior: 'smooth'})}><span>&#8593;</span> Go to top</div>
      <div className="copyright">Copyright &copy;2021 All rights reserved | Designed by Sahil</div>
    </div>
  );
}
