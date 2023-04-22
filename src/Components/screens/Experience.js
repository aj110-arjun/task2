import React from 'react';
import Helmet from 'react-helmet'
import Footer from './Common/Footer';
import Container1 from './Experience/Container1';
import Container2 from './Experience/Container2';
import Container3 from './Experience/Container3';

function Experience() {
  return (
    <>
        <Helmet>
          <title>Experience Page</title>
        </Helmet>

        <Container1 />
        <Container2 />
        <Container3 />
        <Footer />
    </>
  )
}

export default Experience