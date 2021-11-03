import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";

import lab_img from "assets/images/pepes/countdown/countdown_lab.png";

import AboutSectionWrapper from "./preSell.style";

const About = () => {
  const [Days, setDay] = useState(0);
  const [Hours, setHours] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countDownDate = new Date("2021-11-15T12:00:00").getTime();
    setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDay(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
  }, [Days, Hours, Minutes, Seconds]);

  return (
    <AboutSectionWrapper id="about">
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <div className="pre-sell__box">
              <div className="fake_img"></div>
            </div>
          </Col>

          <Col xs={12} sm={6} className="about-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4 className="hidden"> Pre Sell </h4>
              <h2>
                <span>COMING SOON</span>
              </h2>
            </SectionTitle>
            <p className="about-text text-one">
              No whitelists.
            </p>
            {/* <p className="about-text text-two">
              Thought. Road, clearly, and software the shreds sisters contract,
              luxury and fully here
            </p> */}
            <VintageBox right={true} vintageTwo={true} position="relative" className="hidden">
              <Button>Buy Token With 30% off</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
