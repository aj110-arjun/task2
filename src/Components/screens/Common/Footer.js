import React from 'react';
import styled from "styled-components";

function Footer() {
  return (
   <>
        <Container>
            <Wrapper>
                <Div>
                    <Logo src={require("../../Assets/casa-logo.svg").default} />
                    <Paragraph>
                        we help ambitious business like your generate<br />
                        more profits by building awareness, driving web<br />
                        traffic,connecting with costomers and growing<br />
                        overall sales.
                    </Paragraph>
                </Div>
                <Div>
                    <Heading5>Our Service</Heading5>
                    <Link>Help</Link><br />
                    <Link>FAQ</Link><br />
                    <Link>Investation</Link><br />
                    <Link>Blog</Link>
                </Div>
                <Div>
                    <Heading5>Company</Heading5>
                    <Link>About Us</Link><br />
                    <Link>Carrier</Link><br />
                    <Link>Management</Link><br />
                    <Link>Blog</Link>
                </Div>
                <Div>
                    <Heading5>Contact info</Heading5>
                    <Gmail>getinfocasa@example.com</Gmail>
                    <Flex>
                        <Phone src={require("../../Assets/call.svg").default} />
                        <Number>(+088 1254 889 760)</Number>
                    </Flex>
                    <Logos>
                        <Icon src={require("../../Assets/facebook.svg").default} />
                        <Icon src={require("../../Assets/linkedin.svg").default} />
                        <Icon src={require("../../Assets/twitter.svg").default} />
                        <Icon src={require("../../Assets/youtube.svg").default} />
                    </Logos>
                </Div>
            </Wrapper>
            <Bottom>
                <Head5>Copyright @2023 Casa inc.</Head5>
                <Conditions>
                    <Privacy>Privacy</Privacy>
                    <Security>Security</Security>
                    <Terms>Terms</Terms>
                </Conditions>
            </Bottom>
        </Container>
   </>
  )
}
const Container = styled.section`
    background: #eeeeee;
   
`
const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
`
const Div = styled.div`
    display: block;
    margin: 10px;
    height: 200px;
`

const Logo = styled.img``
const Paragraph = styled.p``
const Heading5 = styled.h4`
    margin-bottom: 20px;
`
const Link = styled.p`
    
`
const Gmail = styled.p``
const Flex = styled.div`
    display: flex;
`
const Phone = styled.img`
    margin-top: 20px;
`
const Number = styled.p`
    margin-top: 20px;
`
const Logos = styled.div`
    display: flex;
    align-items: center;
`
const Icon = styled.img`
    height: 30px;
    margin-right: 30px;
    margin-top: 30px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 30px;
`
const Head5 = styled.h5`
    font-size: 15px;
`
const Conditions = styled.div`
    display: flex;
`
const Privacy = styled.p`
    font-size: 20p;
    margin-right: 10px;
    font-weight: bold; 
`
const Security = styled.p`
    font-size: 20p;
    margin-right: 10px;
    font-weight: bold; 
`
const Terms = styled.p`
    font-size: 20p;
    margin-right: 10px;
    font-weight: bold; 
`


export default Footer