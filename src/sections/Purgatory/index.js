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

import PurgatoryItemWrapper from "./purgatorySection.style"
import WalletThumb from "assets/images/pepes/gallery/196.png"; 

const Purgatory = () => {
  return (
    <PurgatoryItemWrapper>
      <Container>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <img
              className="about-thumb"
              src={WalletThumb}
              alt="Purgatory"
            />
          </Col>
          <Col xs={12} sm={6} className="sefty-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>wtf???</h4>
              <h2 id="purgatory"> 
                <span>Purgatory </span>
              </h2>
            </SectionTitle>
            <p className="sefty-text">
              The Purgatory is the place where Pepes sees the light for the very last time. Each secondary sale has a 3% fee. This money is sent to a wallet (Purgatory). Every week the hunter Pepe will activate the Purgatory, which means that the team is going to sweep the floor on marketplaces. And you will have the possibility to vote what kind of death you want to use… flamethrower? machetes? hanging? The community decides.
            </p>
            <VintageBox right={true} vintageTwo={true} position="relative" className="hidden">
              <Button className="sefty-btn">Learn More</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </PurgatoryItemWrapper>
  )
}

export default Purgatory
