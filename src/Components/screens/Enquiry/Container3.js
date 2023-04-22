import React from 'react';
import styled from 'styled-components';

function Container3() {
  return (
    <>
    <Container>
         <Right>
                <Div3>
                    <Border>
                        <Hand src={require("../../Assets/hand.svg").default} />
                        <Heading5>Say Hi!</Heading5>
                        <Arrow src={require("../../Assets/uparrow.svg").default} />
                    </Border>
                </Div3>
            </Right>
            <Left>
                <Contact>Contact</Contact>
                <Heading1>Let's Discuss <br /> your Project</Heading1>
                <Mail>
                    <Message src={require("../../Assets/message.svg").default} />
                    <Div>
                        <Email>Email</Email>
                        <Gmail>Client@example.com</Gmail>
                    </Div>
                </Mail>
                <Place>
                    <Locate src ={require("../../Assets/location.svg").default} />
                    <Div2>
                        <Location>Location</Location>
                        <Address>Washington Manchester<br />Kentucky 39495</Address>
                    </Div2>
                </Place>
            </Left>
    </Container>
    </>
  )
}
const Container = styled.section`
    background: #fcda69;
    display: flex;
    margin: 0 40px;
    border-radius: 40px;
    margin-bottom: 20px;
`
const Left = styled.div`
    padding: 60px;
`
const Contact = styled.p`
    color: #8873ef;
    padding-bottom: 80px;
    transform: rotate(343deg);
`
const Heading1 = styled.h1`
    font-size: 40px;
    width: 500px;
    margin-bottom: 30px;
`
const Mail = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    border-top: 2px solid #000;
    width: 500px;
    padding-top: 20px;
`
const Message = styled.img`
    height: 60px;
`
const Div = styled.div`
    margin-left: 20px;
`
const Email = styled.p`
    margin-bottom: 10px;
    color: #8873ef;
`
const Gmail = styled.h5`
    font-size: 20px;
`
const Place = styled.div`
    display: flex;
    align-items: center;
    border-top: 2px solid #000;
    width: 500px;
    padding-top: 20px;
`
const Locate = styled.img`
    height: 60px;
`
const Div2 = styled.div`
    margin-left: 20px;
`
const Location = styled.p`
    margin-bottom: 10px;
    color: #8873ef;
`
const Address = styled.h5`
    font-size: 20px;
`
const Right = styled.div`
   text-align: center;
   margin-left: 30px;
`
const Div3 = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #000;
    border-radius: 300px;
    height: 500px;
    width: 500px;
    padding: 70px;
    margin: 100px 0;
    
`
const Hand = styled.img`
    height: 40px;
    margin-left: 100px;
    
`
const Heading5 = styled.h5`
    font-size: 20px;
    
`
const Arrow = styled.img`
    height: 200px;
    margin-left: 50px;
`
const Border = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 2px solid #000;
    width: 500px;
`

export default Container3