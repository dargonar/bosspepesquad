import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle from "reusecore/SectionTitle";

import { TiMessageTyping, TiHeartOutline } from "react-icons/ti";

import imgGallery1 from "assets/images/pepes/gallery/1.png";
import imgGallery2 from "assets/images/pepes/gallery/2.png";
import imgGallery3 from "assets/images/pepes/gallery/3.png";
import imgGallery4 from "assets/images/pepes/gallery/4.png";
import imgGallery6 from "assets/images/pepes/gallery/6.png";
import imgGallery13 from "assets/images/pepes/gallery/13.png";
import imgGallery20 from "assets/images/pepes/gallery/20.png";
import imgGallery21 from "assets/images/pepes/gallery/21.png";
import imgGallery22 from "assets/images/pepes/gallery/22.png";
import imgGallery25 from "assets/images/pepes/gallery/25.png";
import imgGallery31 from "assets/images/pepes/gallery/31.png";
import imgGallery33 from "assets/images/pepes/gallery/33.png";
import imgGallery47 from "assets/images/pepes/gallery/47.png";
import imgGallery48 from "assets/images/pepes/gallery/48.png";
import imgGallery51 from "assets/images/pepes/gallery/51.png";
import imgGallery53 from "assets/images/pepes/gallery/53.png";
import imgGallery54 from "assets/images/pepes/gallery/54.png";
import imgGallery56 from "assets/images/pepes/gallery/56.png";
import imgGallery59 from "assets/images/pepes/gallery/59.png";
import imgGallery62 from "assets/images/pepes/gallery/62.png";
import imgGallery76 from "assets/images/pepes/gallery/76.png";
import imgGallery91 from "assets/images/pepes/gallery/91.png";
import imgGallery92 from "assets/images/pepes/gallery/92.png";
import imgGallery93 from "assets/images/pepes/gallery/93.png";
import imgGallery106 from "assets/images/pepes/gallery/106.png";
import imgGallery110 from "assets/images/pepes/gallery/110.png";
import imgGallery116 from "assets/images/pepes/gallery/116.png";
import imgGallery119 from "assets/images/pepes/gallery/119.png";
import imgGallery148 from "assets/images/pepes/gallery/148.png";
import imgGallery155 from "assets/images/pepes/gallery/155.png";
import imgGallery162 from "assets/images/pepes/gallery/162.png";
import imgGallery179 from "assets/images/pepes/gallery/179.png";
import imgGallery182 from "assets/images/pepes/gallery/182.png";
import imgGallery183 from "assets/images/pepes/gallery/183.png";
import imgGallery196 from "assets/images/pepes/gallery/196.png";
import imgGallery209 from "assets/images/pepes/gallery/209.png";

import particle1 from "assets/images/app/particle/16.png";
import particle2 from "assets/images/app/particle/09.png";

import GallerySectionWrapper from "./gallerySection.style";

const Gallery = () => {
  const images_all = [imgGallery1
                  , imgGallery2
                  , imgGallery3
                  , imgGallery4
                  , imgGallery6
                  , imgGallery13
                  , imgGallery20
                  , imgGallery21
                  , imgGallery22
                  , imgGallery25
                  , imgGallery31
                  , imgGallery33
                  , imgGallery47
                  , imgGallery48
                  , imgGallery51
                  , imgGallery53
                  , imgGallery54
                  , imgGallery56
                  , imgGallery59
                  , imgGallery62
                  , imgGallery76
                  , imgGallery91
                  , imgGallery92
                  , imgGallery93
                  , imgGallery106
                  , imgGallery110
                  , imgGallery116
                  , imgGallery119
                  , imgGallery148
                  , imgGallery155
                  , imgGallery162
                  , imgGallery179
                  , imgGallery182
                  , imgGallery183
                  , imgGallery196
                  , imgGallery209]
  const images = images_all
      .map((a) => ({sort: Math.random(), value: a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .slice(0, 16);
  
  const items = images.length;
  console.log('>>>>>>>>>>>>>>>>> items:', items)
  let rows = []
  const items_mod = items / 4;
  console.log('>>>>>>>>>>>>>>>>> items_mod: ', items_mod)
  for (let i = 0; i < items_mod; i++) {
      let row = []
      console.log('>>>>>>>>>>>>>>>>> i:', i)
      for (let j = 0; j < 4; j++) {
        console.log('>>>>>>>>>>>>>>>>> j:', j)
        const idx = (i*4)+j;
        console.log('>>>>>>>>>>>>>>>>> idx:', idx)
        row.push(
          <Col xs={12} sm={6} lg={3}>
            <div className="news-wrap">
              <div className="thumb-block">
                <Link to="#">
                  <img src={images[idx]} alt="img" />
                </Link>
              </div>
            </div>
          </Col>)
      }
      rows.push(<Row>{row}</Row>)
  }

  console.log('>>>>>>>>>>>>>>>>>', rows)
  

  return (
    <GallerySectionWrapper>
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container>
        <SectionTitle className="section-title" UniWidth="52%">
          <h4 className="hidden">Blog post</h4>
          <h2>
            <span>GALLERY</span>
          </h2>
        </SectionTitle>
        {rows}
        
      </Container>
    </GallerySectionWrapper>
  );
};

export default Gallery;
