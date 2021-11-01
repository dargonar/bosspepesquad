import React from "react";
import { Link } from "gatsby";

import { Container, Row, Col } from "reusecore/Layout";

import FlyingMouthsSectionWrapper from "./flyingMouthsSection.style";

const FlyingMouths = () => {
  return (
    <FlyingMouthsSectionWrapper>
      <div class="area" >
        <ul class="bocas">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </FlyingMouthsSectionWrapper>
  );
};

export default FlyingMouths;
