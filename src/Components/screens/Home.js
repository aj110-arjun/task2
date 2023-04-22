import React from 'react';
import Helmet from 'react-helmet'
import Footer from './Common/Footer';
import Container1 from './Home/Container1';
import Container2 from './Home/Container2';
import Container3 from './Home/Container3';
import Container4 from './Home/Container4';
import Container5 from './Home/Container5';
import Container6 from './Home/Container6';


function Home() {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>

    <Container1 />
    <Container2 />
    <Container3 />
    <Container4 />
    <Container5 />
    <Container6 />
    <Footer />
        
        
    </>
  )
}










export default Home 