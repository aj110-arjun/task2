import React from 'react';
import '../../App.css';
import Helmet from 'react-helmet';
import Container1 from '../screens/Project/Container1';
import Container2 from '../screens/Project/Container2';
import Container3 from '../screens/Project/Container3';
import Container4 from '../screens/Project/Container4';
import Container5 from '../screens/Project/Container5';
import Footer from '../screens/Common/Footer';

function Project() {
  return (
   <>
      <Helmet>
        <title>Project Page</title>
      </Helmet>

      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Footer />
   </>
  )
}

export default Project