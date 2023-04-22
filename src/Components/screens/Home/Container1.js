import React from 'react';
import "../../../App.css";
import styled from "styled-components";

function Container1() {
  return (
    <>
      <Container>
      <Wrapper>
          <Left>
              <Paragraph>Hello</Paragraph>
              <Heading1>We have<br /> Design<br /> Experience</Heading1>
              <Paragraph2>Hi I am a UI/UX Designer--- creting bold & brave interface design for companies alla cross the world</Paragraph2>
          <Div2>
              
                  <Button>
                      Let's Talk <Icon src={require("../../Assets/telegram.svg").default} alt="logo" /> 
                  </Button>
                  
                  <Button2>
                      Protofolio <Icon2 src={require("../../Assets/arrow.svg").default} alt="logo" />
                  </Button2>
              
          </Div2>
          <Div3>
              <Heading6>Check Out My</Heading6>
              <Logo1 src={require("../../Assets/instaicon.svg").default} />
              <Logo1 src={require("../../Assets/dribbleicon.svg").default} />
              <Logo1 src={require("../../Assets/behanceicon.svg").default} />
          </Div3>
          </Left>
          <Right>
              <Image src={require("../../Assets/landingpagevector.png")} />
          </Right>
          <Div>
              <Heading5>"people ignore design that ignores people"</Heading5>
          </Div>
          
      </Wrapper>
  </Container>
</>
  )
}
const Container = styled.section`
    display: flex;
    padding-top: 70px;
    
`
const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    padding-top: -100px;
    margin-left: 40px;
    margin-bottom: 0;
`
const Paragraph = styled.p`
    color: #8873ef;
    transform: rotate(348deg);
    padding: 40px 0;
`
const Heading1 = styled.h1`
    font-size: 80px;
    padding-top: 20px; 
`
const Right = styled.div``
const Image = styled.img`
    height: 750px;
    
`
const Heading5 = styled.h5`
    font-size: 25px;
    margin-left: -230px;
    font-weight: 700;
`
const Div = styled.div`
    display: block;
    margin-top: 30px   
`
const Paragraph2 = styled.p`
    margin: 20px 150px;
    color: #686464
`
const Div2 = styled.div`
    margin: 90px 20px;
    display: flex;


`
const Button = styled.button`
    align-items: center;
    display: flex;
    margin-right: 30px;
    background: #8873ef;
    border: 0;
    padding: 20px 20px;
    border-radius: 20px;
    color: #fff;
    font-weight: bold;
    font-family: cursive;
    
`
const Button2 = styled.button`
    align-items: center;
    font-weight: 700;
    font-family: cursive;
    border: 0;
    font-size: 15px;
    background: #fff;
`
const Icon = styled.img`
    margin: 0 10px
`
const Icon2 = styled.img`
    height: 18px;
`
const Div3 = styled.div`
    display: flex;
    align-items: center;
    padding-top: 70px;
    margin-left: 20px;
    padding-bottom: 100px;
`
const Heading6 = styled.h6`
    font-size: 15px;
`
const Logo1 = styled.img`
    margin-left: 40px; 

`

export default Container1