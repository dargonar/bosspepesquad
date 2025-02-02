import React from "react"; 

import { Container, Row, Col } from "reusecore/Layout";
import SectionTitle  from "reusecore/SectionTitle";
import Button from "reusecore/Button";
import VintageBox from "reusecore/VintageBox";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon
} from "reusecore/Accordion";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

import FaqImage from "assets/images/crypto/faq/faq-thumb.png";
// import particle1 from "assets/images/app/particle/07.png";
// import particle2 from "assets/images/app/particle/08.png";
import particle1 from "assets/images/pepes/mouths/normal-01.png";
import particle2 from "assets/images/pepes/mouths/sonrisa-01.png";
import particle3 from "assets/images/pepes/mouths/triste-01.png";

import data from "assets/data/faq";

import FaqSectionWrapper from "./faqSection.style";

const Faq = () => {
  return (
    <FaqSectionWrapper id="faq">
      <Container fullWidthSM>
        <SectionTitle className="section-title" UniWidth="80%">
          <h2 id="faq">
            <span>FAQ </span>
          </h2>
        </SectionTitle>

        <Row Vcenter={true}>
          <Col className="faq-content-block" md={8} sm={12} offsetMd={2}>
            <Accordion>
              {data.faqs.map((faq, index) => (
                <AccordionItem key={index}>
                  <AccordionTitle>
                    <h5>{faq.title}</h5>
                    <IconWrapper>
                      <OpenIcon>
                        <IoIosArrowForward />
                      </OpenIcon>
                      <CloseIcon>
                        <IoIosArrowDown />
                      </CloseIcon>
                    </IconWrapper>
                  </AccordionTitle>
                  <AccordionBody>
                    <p dangerouslySetInnerHTML={{ __html: faq.content }} />
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </FaqSectionWrapper>
  );
};

export default Faq;
