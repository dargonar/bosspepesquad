import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import { TiMessageTyping, TiHeartOutline } from "react-icons/ti";

import sheet from "assets/images/pepes/rarity/sheet.webp";
import particle1 from "assets/images/app/particle/16.png";
import particle2 from "assets/images/app/particle/09.png";

import RaritySectionWrapper from "./raritySection.style";

const News = () => {
  return null;
  return (
    <RaritySectionWrapper>
      <Container>
        <SectionTitle className="section-title" UniWidth="52%">
          <h2 id="rarity">
            <span>RARITY SHEET</span>
          </h2>
        </SectionTitle>
        <Row Vcenter={true}>
          <Col xs={12} sm={12} lg={12}>
            <img
              className="about-thumbX"
              src={sheet}
              alt="Rarity sheet"
            />
          
          </Col>
        </Row>
      </Container>
    </RaritySectionWrapper>
  );
};

export default News;
