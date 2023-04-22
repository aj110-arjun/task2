import React from 'react';
import Helmet from 'react-helmet'
import Footer from './Common/Footer';
import Container1 from './Enquiry/Container1';
import Container2 from './Enquiry/Container2';
import Container3 from './Enquiry/Container3';

function Enquiry() {
  return (
    <>
      <Helmet>
        <title>Enquiry Page</title>
      </Helmet>

      <Container1 />
      <Container2 />
      <Container3 />
      <Footer />
    </>
  )
}

export default Enquiry