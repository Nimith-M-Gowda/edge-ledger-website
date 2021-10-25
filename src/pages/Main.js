import React from "react";
import Navbar from "../components/Navbar";
import { FaChevronRight, FaBookReader, FaPencilAlt } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import CallbackForm from "../components/CallbackForm";
import Footer from "../components/Footer";
import "../styles/Main.css";

import cases1 from "../utils/images/cases/cases1.jpg";
import cases2 from "../utils/images/cases/cases2.jpg";
import cases3 from "../utils/images/cases/cases3.jpg";
import cases4 from "../utils/images/cases/cases4.jpg";
import cases5 from "../utils/images/cases/cases5.jpg";
import cases6 from "../utils/images/cases/cases6.jpg";
import cases7 from "../utils/images/cases/cases7.jpg";
import cases8 from "../utils/images/cases/cases8.jpg";
import team1 from "../utils/images/team/person1.jpg";
import team2 from "../utils/images/team/person2.jpg";
import team3 from "../utils/images/team/person3.jpg";
function Main(props) {
  return (
    <div id="main">
      <div className="container">
        <Navbar className="navbar" />
        <div id="intro-section" className="intro-section">
          <p className="intro-title">The Sky Is The Limit</p>
          <p className="intro-description">
            We provide world class financial assistance
          </p>
          <div className="btn">
            <FaChevronRight className="btn-icon" />
            <p className="btn-name">Read more</p>
          </div>
        </div>
        <div id="icon-section">
          <div className="icon-section-container">
            <BsBank2 className="btn icon-section-logo" />
            <div className=" icon-section-title">Investment Banking</div>
            <div className="icon-section-description">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Tempore,iusto!</p>
            </div>
          </div>
          <div className="icon-section-container">
            <FaBookReader className="btn icon-section-logo" />
            <div className="icon-section-title">Portfolio Manager</div>
            <div className="icon-section-description">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Tempore,iusto!</p>
            </div>
          </div>
          <div className="icon-section-container">
            <FaPencilAlt className="btn icon-section-logo" />
            <div className="icon-section-title">Tax & Custodial</div>
            <div className="icon-section-description">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Tempore,iusto!</p>
            </div>
          </div>
        </div>
        <div id="portfolio-section">
          <div className="portfolio-logo-container">
            {/* <img src="../utils/images/home/people.jpg" /> */}
          </div>
          <div className="portfolio-desc-container">
            <h3>What you are looking for</h3>
            <h1>We provide bespoke solutions</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              illum, animi earum ea amet sequi reiciendis sit corporis sunt
              iusto cupiditate odio maxime adipisci cumque eligendi nemo dolore
              id itaque?
            </p>
            <h2 className="btn">Read more</h2>
          </div>
        </div>
        <div id="cases-section">
          <h4>This is what we do</h4>
          <h1>Business Cases</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            dolore!{" "}
          </p>
          <div className="cases-list">
            <img src={cases1} alt="case1" />
            <img src={cases2} alt="case2" />
            <img src={cases3} alt="case3" />
            <img src={cases4} alt="case4" />
          </div>
          <div className="cases-list">
            <img src={cases5} alt="case5" />
            <img src={cases6} alt="case6" />
            <img src={cases7} alt="case7" />
            <img src={cases8} alt="case8" />
          </div>
        </div>
        <div id="blog-section">
          <div className="blog-desc-container">
            <h3>April 16 2020</h3>
            <h1>Blog Post One</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              illum, animi earum ea amet sequi reiciendis sit corporis sunt
              iusto cupiditate odio maxime adipisci cumque eligendi nemo dolore
              id itaque?
            </p>
            <h2 className="btn">Read Your Blog</h2>
          </div>
          <div className="blog-logo-container">
            {/* <img src="../utils/images/home/people.jpg" /> */}
          </div>
        </div>
        <div id="team-section">
          <h3>Who we are</h3>
          <h1>Our Professional Team</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
            dolore!{" "}
          </p>
          <div className="team-profile-container">
            <div className="profile">
              <div className="profile-photo">
                <img src={team1} alt="team1" />
              </div>
              <div className="profile-name">
                <h1>John Doe</h1>
              </div>
              <div className="profile-role">
                <p>President</p>
              </div>
            </div>
            <div className="profile">
              <div className="profile-photo">
                <img src={team2} alt="team2" />
              </div>
              <div className="profile-name">
                <h1>Jane Doe</h1>
              </div>
              <div className="profile-role">
                <p>Vice President</p>
              </div>
            </div>
            <div className="profile">
              <div className="profile-photo">
                <img src={team3} alt="team3" />
              </div>
              <div className="profile-name">
                <h1>Steve Smith</h1>
              </div>
              <div className="profile-role">
                <p>Marketing Head</p>
              </div>
            </div>
          </div>
        </div>
        <div id="contact-section">
          <div className="contact-logo">
            <div>logo</div>
          </div>
          <div className="contact-form">
            <CallbackForm />
          </div>
        </div>
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default Main;
