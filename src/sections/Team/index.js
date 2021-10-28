import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import { TiMessageTyping, TiHeartOutline } from "react-icons/ti";

import avatar1 from "assets/images/pepes/avatars/BossPepe1000x1000.png";
import avatar2 from "assets/images/pepes/avatars/dargonar1000x1000.png";
import avatar3 from "assets/images/pepes/avatars/DrPepe1000x1000.png";
import particle1 from "assets/images/app/particle/16.png";
import particle2 from "assets/images/app/particle/09.png";

import TeamSectionWrapper from "./teamSection.style";

const News = () => {
  return (
    <TeamSectionWrapper>
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container>
        <SectionTitle className="section-title" UniWidth="52%">
          <h4 className="hidden">Blog post</h4>
          <h2>
            <span>THE TEAM </span>
          </h2>
        </SectionTitle>
        <Row>
          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <Link to="#">
                  <img src={avatar1} alt="img" />
                </Link>
              </div>
              <h2 className="title">
                <Link to="#">
                  BOSS PEPE
                </Link>
              </h2>
            </div>
          </Col>

          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <Link to="#">
                  <img src={avatar2} alt="img" />
                </Link>
              </div>
              <h2 className="title">
                <Link to="#">
                  DARGONAR
                </Link>
              </h2>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <div className="news-wrap">
              <div className="thumb-block">
                <Link to="#">
                  <img src={avatar3} alt="img" />
                </Link>
              </div>
              <h2 className="title">
                <Link to="#">
                  DR. PEPE
                </Link>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </TeamSectionWrapper>
  );
};

export default News;
