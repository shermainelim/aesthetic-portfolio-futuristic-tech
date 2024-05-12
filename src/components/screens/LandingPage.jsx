import React, { useState } from "react";
import styles from "./LandingPage.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../screens/scss/GlobalStyles.scss";
import sciFi from "../../assets/sci-fi.png";
import himori from "../../assets/Himori.png";
import orangeButton from "../../assets/button.png";
import pastelDreams from "../../assets/pastel-dreams.png";
import coupleGoals from "../../assets/couple-goals.png";
import twilightEnd from "../../assets/twilights-end-3d.png";
import logicUniversity from "../../assets/logic-university.png";
import minimize from "../../assets/minimize.png";
import close from "../../assets/close.png";
import tech from "../../assets/tech.gif";
import CardProfile from "../cards/CardProfile";
import ReactIcon from "../../assets/circular/react.png";
import GithubLogo from "../../assets/circular/github-logo.png";
import Javascript from "../../assets/circular/javascript.png";
import TypeScript from "../../assets/circular/typescript.svg";
import AWS from "../../assets/circular/aws.svg";
import Figma from "../../assets/circular/figma.svg";
import nodeJS from "../../assets/circular/nodeJS.png";
import Gmail from "../../assets/circular/gmail.png";
import Linkedin from "../../assets/circular/linkedin.png";
import Waves from "../../assets/waves.gif";

const LandingPage = () => {
  const cx = classNames.bind(styles);

  const [accordion, setAccordion] = useState(true);
  const [closeAccordion, setcloseAccordion] = useState(false);

  const [about, setAbout] = useState(true);
  const [closeAbout, setCloseAbout] = useState(false);

  const [music, setMusic] = useState(true);
  const [closeMusic, setCloseMusic] = useState(false);

  const [portfolio, setPortfolio] = useState(true);
  const [closePortfolio, setClosePortfolio] = useState(false);

  const [skills, setSkills] = useState(true);
  const [closeSkills, setCloseSkills] = useState(false);

  const [contact, setContact] = useState(true);
  const [closeContact, setCloseContact] = useState(false);

  const renderNavBar = () => {
    return (
      <nav className={cx("background")}>
        <Link
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={cx("nav-btn-container")}
        >
          <img
            className={cx("orange-btn")}
            src={orangeButton}
            alt="orange-button"
          ></img>
          <span className={cx("btn-short-label")}>Home</span>
        </Link>

        <Link
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={cx("nav-btn-container")}
        >
          <img
            className={cx("orange-btn")}
            src={orangeButton}
            alt="orange-button"
          ></img>
          <span className={cx("btn-short-label")}>About</span>
        </Link>
        <Link
          onClick={() =>
            document
              .getElementById("portfolio")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={cx("nav-btn-container")}
        >
          <img
            className={cx("orange-btn")}
            src={orangeButton}
            alt="orange-button"
          ></img>
          <span className={cx("btn-long-label")}>Portfolio</span>
        </Link>
        <Link
          onClick={() =>
            document
              .getElementById("skills")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={cx("nav-btn-container")}
        >
          <img
            className={cx("orange-btn")}
            src={orangeButton}
            alt="orange-button"
          ></img>
          <span className={cx("btn-short-label")}>Skills</span>
        </Link>

        <Link
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className={cx("nav-btn-container")}
        >
          <img
            className={cx("orange-btn")}
            src={orangeButton}
            alt="orange-button"
          ></img>
          <span className={cx("btn-long-label")}>Contact</span>
        </Link>
      </nav>
    );
  };

  const renderProfile = () => {
    return (
      <div style={closeAccordion ? { display: "none" } : null}>
        <div
          className={
            accordion ? cx("border-profile") : cx("border-profile-closed")
          }
        >
          <div className={cx("label-container")}>
            <div className={cx("label")}>PROFILE.PNG</div>
            <img
              className={cx("minimize-icon-profile")}
              src={minimize}
              alt="minimize"
              onClick={() => {
                setAccordion(!accordion);
              }}
            ></img>
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => {
                setcloseAccordion(!closeAccordion);
              }}
            ></img>
          </div>
          {accordion ? (
            <div className={cx("label-bg-filler")}>
              <img className={cx("profile")} src={himori} alt="profile" />

              <div className={cx("name-label")}>Shermaine Lim </div>
              <div className={cx("role-label")}> - Software Engineer - </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  };
  const renderAbout = () => {
    return (
      <div style={closeAbout ? { display: "none" } : null}>
        <div className={about ? cx("border-about") : cx("border-about-closed")}>
          <div className={cx("label-container")}>
            <div className={cx("label")} id="about">
              ABOUT.PNG
            </div>
            <img
              className={cx("minimize-icon-about")}
              src={minimize}
              alt="minimize"
              onClick={() => setAbout(!about)}
            ></img>{" "}
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => setCloseAbout(!closeAbout)}
            ></img>
          </div>
          <div
            className={
              about
                ? cx("about-label-container")
                : cx("about-label-container-invisible")
            }
          >
            <div className={cx("about-desc")}>
              Frontend React Engineer skilled in web and mobile development with
              JavaScript, TypeScript, ReactJS, and React Native. Developed
              full-stack applications using ASP.NET Core (C#), Java Spring Boot,
              and Python for machine learning during postgraduate studies at the
              National University of Singapore.
              <br /> <br />
              Currently pursuing a part-time Master of Computer Science at
              Georgia Institute of Technology, specializing in artificial
              intelligence and human-computer interaction.
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMusicPlayer = () => {
    return (
      <div style={closeMusic ? { display: "none" } : null}>
        <div
          className={
            music ? cx("border-music-open") : cx("border-music-closed")
          }
        >
          <div className={cx("label-container")}>
            <div className={cx("label")}>MUSIC.EXE</div>
            <img
              className={cx("minimize-icon")}
              src={minimize}
              alt="minimize"
              onClick={() => setMusic(!music)}
            ></img>
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => setCloseMusic(!closeMusic)}
            ></img>
          </div>
          <img
            className={music ? cx("music-img-show") : cx("music-img-none")}
            src={tech}
            alt="tech-music-player"
          ></img>
          {music ? <CardProfile /> : null}
        </div>
      </div>
    );
  };

  const renderPortfolio = () => {
    return (
      <div className={cx("portfolio-container")}>
        <div
          className={
            !closePortfolio
              ? portfolio
                ? cx("border-portfolio-open")
                : cx("border-portfolio-closed")
              : cx("portfolio-none")
          }
        >
          <div className={cx("label-container")}>
            <div className={cx("label")} id="portfolio">
              PORTFOLIO.PNG
            </div>
            <img
              className={cx("minimize-icon")}
              src={minimize}
              alt="minimize"
              onClick={() => setPortfolio(!portfolio)}
            ></img>{" "}
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => setClosePortfolio(!closePortfolio)}
            ></img>
          </div>
          <div
            className={
              portfolio
                ? cx("portfolio-accordion-filler-open")
                : cx("portfolio-accordion-filler-closed")
            }
          >
            <div className={cx("project-image-container")}>
              <a
                href="https://github.com/shermainelim/CoupleGoalsApp"
                className={cx("link")}
              >
                <img
                  className={portfolio ? cx("image-show") : cx("image-none")}
                  src={coupleGoals}
                  alt="couple-goals"
                />
              </a>

              <div className={cx("project-desc-container")}>
                <div
                  className={
                    portfolio ? cx("desc-title-show") : cx("desc-title-none")
                  }
                >
                  <a
                    href="https://github.com/shermainelim/CoupleGoalsApp"
                    className={cx("title-label")}
                  >
                    Couple Goals App
                  </a>
                </div>
                <div
                  className={
                    portfolio || closePortfolio
                      ? cx("desc-subtitle-show")
                      : cx("desc-subtitle-none")
                  }
                >
                  Tech Stack : React, NodeJS, Redux Toolkit, MySQL & GitLab
                  DevOps Pipleline <br />
                  <br />A goal setting app that allows couples to set and track
                  shared goals, such as saving money for house, vacation,
                  starting a business or learning a new language. The app
                  includes features like unique couple board space, synchronized
                  progress and finance trackers.
                </div>
              </div>
            </div>

            <div className={cx("project-image-container")}>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7194014025083424769/"
                className={cx("link")}
              >
                <img
                  className={portfolio ? cx("image-show") : cx("image-none")}
                  src={twilightEnd}
                  alt="twilight-end"
                ></img>
              </a>
              <div className={cx("project-desc-container")}>
                <div
                  className={
                    portfolio ? cx("desc-title-show") : cx("desc-title-none")
                  }
                >
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7194014025083424769/"
                    className={cx("title-label")}
                  >
                    Twilight's End
                  </a>
                </div>
                <div
                  className={
                    portfolio || closePortfolio
                      ? cx("desc-subtitle-show")
                      : cx("desc-subtitle-none")
                  }
                >
                  Tech Stack : C# and Unity Engine <br />
                  <br />
                  This is a team project under Video Game Design and Programming
                  module in my masters program. My team and I learnt how to
                  create AI states on enemies, NPCs, game logic , 3D animation ,
                  modelling, audio theory and so on etc.
                  <br />
                  Story: A hybrid vampire and human hero is hired to rid sun
                  blob enemies that have invaded the Land of Vampara. Pure
                  vampires cannot be in contact with the sunlight and live in
                  Vampara with eternal crimson nights.
                </div>
              </div>
            </div>

            <div className={cx("project-image-container")}>
              <a
                href="https://github.com/shermainelim/Logic-University-Stationery-Inventory-System"
                className={cx("link")}
              >
                <img
                  className={portfolio ? cx("image-show") : cx("image-none")}
                  src={logicUniversity}
                  alt="logic-university"
                ></img>
              </a>
              <div className={cx("project-desc-container")}>
                <div
                  className={
                    portfolio ? cx("desc-title-show") : cx("desc-title-none")
                  }
                >
                  <a
                    href="https://github.com/shermainelim/Logic-University-Stationery-Inventory-System"
                    className={cx("title-label")}
                  >
                    Stationery Logistics Inventory System
                  </a>
                </div>
                <div
                  className={
                    portfolio || closePortfolio
                      ? cx("desc-subtitle-show")
                      : cx("desc-subtitle-none")
                  }
                >
                  Tech Stack: C# ASP.NET Core & Azure Machine Learning <br />
                  <br />
                  This project is a full Software Development Life Cycle and
                  about delivering a software solution aimed at computerizing
                  and improving LOGIC University Stationary Store’s inventory
                  and disbursement system. <br />
                  Its main objective is to eliminate the reliance on manual
                  processes.
                </div>
              </div>
            </div>

            <div className={cx("project-image-container")}>
              <a
                href="https://pastelwithdreams.netlify.app/"
                className={cx("link")}
              >
                <img
                  className={
                    portfolio
                      ? cx("image-pastel-dreams-show")
                      : cx("image-pastel-dreams-none")
                  }
                  src={pastelDreams}
                  alt="pastel-dreams"
                ></img>
              </a>
              <div className={cx("project-desc-container")}>
                <div
                  className={
                    portfolio ? cx("desc-title-show") : cx("desc-title-none")
                  }
                >
                  <a
                    href="https://pastelwithdreams.netlify.app/"
                    className={cx("title-label")}
                  >
                    JavaScript Aesthetic Portfolio
                  </a>
                </div>
                <div
                  className={
                    portfolio || closePortfolio
                      ? cx("desc-subtitle-show")
                      : cx("desc-subtitle-none")
                  }
                >
                  Tech Stack: Vanilla JavaScript <br />
                  <br />A 2-D Web-based aesthetic style portfolio with HTML, CSS
                  and plain JS to minimize external dependencies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSkills = () => {
    return (
      <div className={!closeSkills ? cx("skills-open") : cx("skills-closed")}>
        <div
          className={
            skills ? cx("border-skills-open") : cx("border-skills-closed")
          }
        >
          <div className={cx("label-container")}>
            <div className={cx("label")} id="skills">
              SKILLS.PNG
            </div>
            <img
              className={cx("minimize-icon")}
              src={minimize}
              alt="minimize"
              onClick={() => setSkills(!skills)}
            ></img>
            <img
              className={cx("close-icon")}
              src={close}
              alt="close"
              onClick={() => {
                setCloseSkills(!closeSkills);
              }}
            ></img>
          </div>
          <div
            className={
              skills ? cx("accordion-filler-show") : cx("accordion-filler-none")
            }
          >
            <div className={cx("icon-container-top")}>
              <img
                className={cx("icon-img")}
                src={ReactIcon}
                alt="react-icon"
              ></img>
              <img
                className={cx("icon-img")}
                src={Javascript}
                alt="javascript-icon"
              ></img>{" "}
              <img className={cx("icon-img")} src={AWS} alt="aws-icon"></img>
            </div>

            <div className={cx("icon-container-bottom")}>
              <img
                className={cx("icon-img")}
                src={nodeJS}
                alt="nodeJS-icon"
              ></img>{" "}
              <img
                className={cx("icon-img")}
                src={Figma}
                alt="figma-icon"
              ></img>{" "}
              <img
                className={cx("icon-img")}
                src={TypeScript}
                alt="typescript-icon"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContact = () => {
    return (
      <div style={closeContact ? { display: "none" } : null}>
        <div
          style={
            contact
              ? {
                  border: "0.0625rem solid white",
                  backgroundColor: "rgb(255 161 61)",
                  width: "62.5rem",
                  height: "12.8125rem",
                }
              : {
                  border: "0.0625rem solid white",
                  backgroundColor: "rgb(255 161 61)",
                  width: "62.5rem",
                  height: "2.1875rem",
                }
          }
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                color: "white",
                marginTop: "0.375rem",
                marginLeft: "0.4375rem",
                fontSize: "1rem",
              }}
              id="contact"
            >
              CONTACT.PNG
            </div>
            <img
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginTop: "0.3125rem",
                marginLeft: "51.875rem",
              }}
              src={minimize}
              alt="minimize"
              onClick={() => setContact(!contact)}
            ></img>{" "}
            <img
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginTop: "0.3125rem",
                marginLeft: "0.3125rem",
              }}
              src={close}
              alt="close"
              onClick={() => setCloseContact(!closeContact)}
            ></img>
          </div>
          <div>
            <div
              style={
                contact
                  ? {
                      display: "flex",
                      flexDirection: "row",
                      padding: "0.625rem",
                      justifyContent: "center",
                      marginTop: "-1.25rem",
                    }
                  : { display: "none" }
              }
            >
              {" "}
              <img
                style={{
                  marginTop: "1rem",
                  paddingLeft: "1.25rem",
                  paddingRight: "1.25rem",
                  objectFit: "cover",
                  objectPosition: "10% 60%",
                  width: "62.5rem",
                  height: "9.8125rem",
                  position: "absolute",
                }}
                src={Waves}
                alt="waves-icon"
              ></img>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  position: "absolute",
                  alignContent: "space-evenly",
                  marginTop: "0.4375rem",
                }}
              >
                {" "}
                <a href="mailto:codeandcharm@gmail.com">
                  <img
                    style={{
                      marginTop: "1.25rem",
                      width: "8.125rem",
                      height: "8.125rem",
                      marginLeft: "11.875rem",
                      marginRight: "9.375rem",
                    }}
                    src={Gmail}
                    alt="Gmail-icon"
                  ></img>{" "}
                </a>
                <a href="https://github.com">
                  {" "}
                  <img
                    style={{
                      marginTop: "1.25rem",
                      width: "7.8125rem",
                      height: "7.8125rem",
                      marginRight: "9.375rem",
                    }}
                    src={GithubLogo}
                    alt="github-icon"
                  ></img>{" "}
                </a>
                <a href="https://linkedin.com">
                  <img
                    style={{
                      marginTop: "1.25rem",
                      width: "8.125rem",
                      height: "8.125rem",
                      marginRight: "9.375rem",
                    }}
                    src={Linkedin}
                    alt="linked-in-icon"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={cx("landing-page-main-container")}>
      <img className={cx("banner")} src={sciFi} alt="sciFi" />

      <hr className={cx("separator-start")} />
      <Router>
        {renderNavBar()}
        <hr className={cx("separator-end")} />
        <div className={cx("accordion-first-section-container")}>
          {renderProfile()}
          {renderAbout()}
        </div>
        <div className={cx("accordion-second-section-container")}>
          {renderMusicPlayer()}
          {renderPortfolio()}
        </div>
        <div className={cx("accordion-third-section-container")}>
          {renderSkills()}
          {renderContact()}
        </div>
      </Router>
    </div>
  );
};

export default LandingPage;
