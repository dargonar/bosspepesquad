
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import FavIcon from "assets/images/favicon.png"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="pt" />
        <title>{`BossPepeSquad`}</title>
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <link
          href='https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap'
          rel='stylesheet'
        />
        <link
          href='/staticfonts/square-deal.ttf'
          rel='stylesheet'
        />
        <link
          href='/fonts/square-deal.woff'
          rel='stylesheet'
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/pepes.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      
      {children}
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
