import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaDiscord, FaLinkedinIn } from "react-icons/fa";

// import logo from "assets/images/app/footer/footer-logo.png"; 
import logo from "assets/images/pepes/logo/logo1.png"

import FotterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FotterWrapper> 
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={12} lg={12}>
            <div className="footer-widgets">
              <Link className="footer-logo" to="#">
                <img src={logo} alt="logo" />
              </Link>
              <ul className="social">
                <li>
                  <Link className="anchor" to="https://discord.gg/n9AqfACtUX" target="_blank">
                    <FaDiscord />
                  </Link>
                </li>
                <li>
                  <Link className="anchor" to="https://twitter.com/BossPepeSquads" target="_blank">
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <ul className="footer-menu">
            <li>
              <Link className="anchor" to="#" className="hidden">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link className="anchor" to="#" className="hidden">
                Contact
              </Link>
            </li>
          </ul>
          <p className="copyright-text">
            Copyright @
            <Link className="anchor" to="#">
              BossPepeSquad
            </Link>
             | All Right Reserved 2021
          </p>
        </div>
      </Container>
    </FotterWrapper>
  );
};

export default Footer;
