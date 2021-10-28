import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";
import Particle from "reusecore/Particle";

import BannerSectionWrapper from "./banner.style";

const BannerDefault = () => {
  return (
    <BannerSectionWrapper>
      <Particle />
      <Container fullWidthSM>
        <Row Vcenter> 
          <Col sm={7} md={6} lg={7}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4 className="hidden">30% off for new users for 1 month</h4>
              <h1> 
                Welcome to the <span>Boss Pepe Squad</span>
              </h1>
            </SectionTitle>
            <p>
              7777 deflationary Pepes created on the Solana Labs and landed on blockchain, all with different characteristics and attributes.
            </p>
            <p>
              Be careful! 1 bastard Pepe is about to purge them all… 
            </p>
            <p className="boldy">
              What the hell is the Boss Pepe Squad?
            </p>
            <p>
              Seems like Anatoly was playing around with some dangerous stuff on the Solana Labs and 7777 Pepes were created by accident… these motherfuckers are crazy ass fuck and they want to conquer the NFT world. To reverse this, 1 more Pepe was created to hunt and burn all these crazy bitches. 
              When he hunts one Pepe, he takes him to the purgatory to end his life... 
              Meanwhile,the Pepes run around the world trying to survive this endless hunt. Will anyone get it? It is up to you.

            </p>
            <VintageBox right={true} vintageOne={true} className="hidden">
              <Button className="banner-btn one">
                Get in Touch
              </Button>
              <Button className="banner-btn two"> 
              Whitepaper
              </Button>
            </VintageBox>
          </Col>

          {/* <Col lg={5} md={6}>
            <img src={BannerThumb} alt="appion crypto"/>
          </Col> */}
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerDefault;
