import React from "react"
import { Link } from "gatsby"

import { Container, Row, Col } from "reusecore/Layout"
import SectionTitle from "reusecore/SectionTitle"
import VintageBox from "reusecore/VintageBox"
import Button from "reusecore/Button"

import icon1 from "assets/images/crypto/integration/payment.png"
import icon2 from "assets/images/crypto/integration/licensing.png"
import icon3 from "assets/images/crypto/integration/encrypted.png"
import icon4 from "assets/images/crypto/integration/checkmark.png"

import Icon from "assets/images/app/integrations/arrow.png"

import ComingSoonItemWrapper from "./comingSoonSection.style"
import WalletThumb from "assets/images/pepes/gallery/196.png"; 
import lab_img from "assets/images/pepes/countdown/countdown_lab.png";

import FlyingMouths from "reusecore/FlyingMouths"; // <FlyingMouths />

const ComingSoon = () => {
  return (
    <ComingSoonItemWrapper>
      <Container>
        <FlyingMouths />
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <img
              className="about-thumb"
              src={lab_img}
              alt="Coming Soon"
            />
          </Col>
          <Col xs={12} sm={6} className="sefty-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h2 id="coming-soon"> 
                <span>COMING SOON</span>
              </h2>
            </SectionTitle>
          </Col>
        </Row>
      </Container>
    </ComingSoonItemWrapper>
  )
}

export default ComingSoon
