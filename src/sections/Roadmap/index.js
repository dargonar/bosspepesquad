import React from "react";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import Icon1 from "assets/images/app/features/01.svg";
import Icon2 from "assets/images/app/features/02.svg";
import Icon3 from "assets/images/app/features/03.svg";
import Icon4 from "assets/images/app/features/04.svg";
import Icon5 from "assets/images/app/features/05.svg";
import Icon6 from "assets/images/app/features/06.svg";

import RoadmapSectionWrapper from "./roadmap.style";

const Roadmap = () => {
  return (
    <RoadmapSectionWrapper id="features">
      <Container fullWidthSM>
        <SectionTitle UniWidth="65%">
          <h4 className="hidden">Amazing Features</h4>
          <h2>
            <span>PepeMap</span>
          </h2>
        </SectionTitle>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>

            <Row className="row_left">
              <Col xs={12} sm={12} md={12}>
                <div className="fetures-block">
                  <div className="fetures-icon-block">
                    <img src={Icon1} alt="img" />
                  </div>
                  <div className="fetures-text-block">
                    <h3>OCTOBER</h3>
                    <p>
                      - The Pepes appear<br/>
                      - Website<br/>
                      - Twitter<br/>
                      - Discord<br/>
                      - Reveal roadmap<br/>
                      - Giveaways
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12}>
                <div className="fetures-block">
                  <div className="fetures-icon-block">
                    <img src={Icon2} alt="img" />
                  </div>
                  <div className="fetures-text-block">
                    <h3>NOVEMBER</h3>
                    <p>
                    - Pepes to candymachine<br/>
                    - Initial Mint<br/>
                    - Marketplaces<br/>
                    - Launch giveaways<br/>
                    - Ignites the Purgatory<br/>
                    - Airdrop female Pepes<br/>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12}>
                <div className="fetures-block">
                  <div className="fetures-icon-block">
                    <img src={Icon3} alt="img" />
                  </div>
                  <div className="fetures-text-block">
                    <h3>DECEMBER</h3>
                    <p>
                      - Meme generator. You can create a meme with your Pepe NFT<br/>
                      - More!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={0}>
            
          </Col>
        </Row>
      </Container>
    </RoadmapSectionWrapper>
  );
};

export default Roadmap;
