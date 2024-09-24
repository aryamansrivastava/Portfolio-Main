import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’ve fallen in love with programming and feel like I’ve learned so
              much along the way 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++ & Javascript </b>
              </i>
              <br />
              <br />
              My fields of interest are&nbsp;
              <i>
                <b className="purple">Web Technologies &</b>{" "}
                <b className="purple">Competitive Programming.</b>
              </i>
              <br />
              <br />
              Whenever I can, I also channel my passion into developing products
              with
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              .
              <br />
              <br />
              </p>
              <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> ACHIEVEMENTS </span>
              </h1>
              <p className="home-about-body">
              <ul>
                {/* <li>
                  Qualified for <b className="purple">ACM ICPC 2023 </b>Chennai
                  Regionals by securing All India Rank
                  <b className="purple"> 321</b>.
                </li> */}
                <br />
                <li>
                  <b className="purple">Pupil</b> on CodeForces : Highest
                  Rating - <b className="purple">1240</b>, All India Rank -{" "}
                  <b className="purple">379</b>.
                </li>
                <br />
                <li>
                  <b className="purple">3 Star</b> on CodeChef :{" "}
                  <b className="purple">1600+</b> Rating.
                  {/* , among{" "} */}
                  {/* <b className="purple">top 0.75%</b> of all Indian users. */}
                </li>
                {/* <br />
                <li>
                  <b className="purple">Meta Hacker Cup 2023</b> - 1350th Rank
                  (India Rank: <b className="purple">236</b>), out of 6500+
                  total participants.
                </li> */}
                <br />
                <li>
                  <b className="purple">Best rating</b> on LeetCode :{" "}
                  <b className="purple">1600+</b> Rating.
                  {/* , among{" "} */}
                  {/* <b className="purple">top 0.8%</b> of all users. */}
                </li>
                <br/>
                <li>
                  <b className="purple"> Qualified Round 1 </b> and <b className="purple"> Participated in Round 2</b> of Flipkart Grid 2023 .{" "}
                  {/* <b className="purple">1600+</b> Rating. */}
                </li>
              </ul>
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aryamansrivastava"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Aryamansri18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aryaman-srivastava-573224221"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aryaman_sri/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
