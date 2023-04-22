import React from 'react';
import "../../../App.css";
import styled from 'styled-components';

function Container5() {
  return (
      <>
        <Container>
          <Top>
             <Div>
                <Testimonial>Testimonial</Testimonial>
                <Clients>Client's<br /> Kind Word</Clients>
             </Div>
             <Paragraph>we help ambitious business like your generate more <br />
                        profits by building awareness, driving web traffic, <br />
                        connecting with costomers and growing overall sales.
             </Paragraph>
            <Image src={require("../../Assets/arrow3.svg").default} alt="arrow" />
          </Top>
          <Bottom>
            <Person1 src={require("../../Assets/person1.png")} />
            <Div2>
                <Paragraph2>
                <strong>"I've Been Working</strong> with Casey Exclusively Since 2014<br />
                        profits by building awareness, driving web traffic ,<br />
                        connecting with customers and growing overall.<br />
                        We help ambitious <strong>Professional Design</strong> business <br />
                        profits by building awareness, driving web traffic, <br />
                        connecting with customers and We help ambitious<br />
                        the visual design 

                </Paragraph2>
                <Flex>
                    <Person>Mustafa Rahman</Person>
                    <Range>-- CEO Toogle</Range>
                </Flex>
            </Div2>
            <Person2 src={require("../../Assets/person2.png")} />
          </Bottom>
        </Container>
      </>
    
  )
}

const Container = styled.section`
    padding-bottom: 150px;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
`
const Div = styled.div`
    height: 100px;
    width: 300px;
    padding: 60px;
`
const Testimonial = styled.p`
    color: #8873ef;
    transform: rotate(340deg);
    padding-bottom: 40px;
`
const Clients = styled.h1`
    font-size: 50px;
`
const Paragraph = styled.p`
    position: relative;
    top: 70px;
    margin-right: 80px;
    color: #444343; 
`
const Image = styled.img`
    height: 90px;
    width: 180px;
    position: relative;
    top: 180px;
    margin-right: 50px;
    
`
const Bottom = styled.div`
    display: flex;
    position: relative;
    top: 100px;
    justify-content: space-between;
    align-items: center;
`
const Person1 = styled.img`
    height: 450px;
    margin-left: 50px;
`
const Div2 = styled.div`
    border-top: 2px solid #444343;
    border-bottom: 2px solid #444343;
`
const Paragraph2 = styled.p`
    font-size: 20px;
    margin: 30px 50px;
    padding: 20px 0;
    color: #444343;
`
const Flex = styled.div`
    display: block;
    
`
const Person = styled.h4`
    margin: 30px 50px;
    margin-bottom: 0;
`
const Range = styled.p`
    margin: 10px 50px;
    padding-bottom: 30px; 
`
const Person2 = styled.img`
    height: 450px;
    margin-right: 50px;
`

export default Container5