import React from "react";
import {ThemeProvider} from 'styled-components';

import Layout from "../components/layout" 
import SEO from "../components/seo" 

import Navigation from "sections/Navigation-crypto";
import Banner from "sections/Banner-crypto";
import Services from "sections/Services-crypto";
import PreSell from "sections/PreSell";
import Features from "sections/Features-crypto";
import Roadmap from "sections/Roadmap";
// import Faq from "sections/Faq-Classic";
import Faq from "sections/Faq-Ex";
import Sefty from "sections/Sefty-crypto";
import Purgatory  from "sections/Purgatory";
import BuyCoin from "sections/Buy-coin"; 
import Counters from "sections/Counters-crypto"; 
import Testimonial from "sections/Testimonial-crypto";
import News from "sections/News";
import Team from "sections/Team";
import Rarity from "sections/Rarity";
import Gallery from "sections/Gallery";
import Getapp from "sections/Getapp-crypto";
import Contact from "sections/Contact-crypto";
import Footer from "sections/Footer-Ex";

import ComingSoon from "sections/ComingSoon";

import { GlobalStyle } from "theme/crypto/crypto.style";
import theme from "theme/crypto/themeStyles";

// <Particle />
// <PreSell />

const IndexPage = () => (
  <ThemeProvider theme={theme}> 
    <GlobalStyle />
     <Layout>
      <SEO title="BossPepeSquad" />
      <Navigation />
      <Banner />
      <Purgatory />
      <ComingSoon />
      <Gallery />
      <Roadmap />
      <Team />
      <Rarity />
      <Faq />
      <Footer />
      
    </Layout>
  </ThemeProvider>
)

export default IndexPage
