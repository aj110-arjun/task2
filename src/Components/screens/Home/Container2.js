import React from 'react';
import "../../../App.css";
import styled from "styled-components";

function Container2() {
  return (
    <>
      <Container>
            <Left2>
                <Service>Service</Service>
                <Services>Services |<br /> Offer</Services>
                <Description>We help ambitious business like your generate more<br />profits by building awareness driving web traffic,<br />connecting with costomers and growing overall sales.</Description>
                <Seal src={require("../../Assets/seal.png")} />
            </Left2>
            <Right2>
                <Column>
                    <Align>
                        <Heading4>01/</Heading4>
                        <Head1>Web UI/UX <br />Design</Head1>
                    </Align>
                    <Align2>
                        <Link>Explore</Link>
                        <Uparrow src={require("../../Assets/uparrow.svg").default} />
                    </Align2>
                </Column>
                <Column>
                    <Align>
                        <Heading4>02/</Heading4>
                        <Head1>Mobile App UI/ <br />UX Design</Head1>
                    </Align>
                    <Align2>
                        <Link>Explore</Link>
                        <Uparrow src={require("../../Assets/uparrow.svg").default} />
                    </Align2>
                </Column>
                <Column>
                    <Align>
                        <Heading4>03/</Heading4>
                        <Head1>Dashboard & <br />Saas Design</Head1>
                    </Align>
                    <Align2>
                        <Link>Explore</Link>
                        <Uparrow src={require("../../Assets/uparrow.svg").default} />
                    </Align2>
                </Column>
            </Right2>
        </Container>
    </>
  )
}

const Container = styled.section`
    background: #fcda69;
    display: flex;
    justify-content: space-between;
`
const Left2 = styled.div`
    padding: 60px;
`
const Service = styled.p`
    color: #8873ef;
    transform: rotate(347deg);
    padding-bottom: 40px;
`
const Services = styled.h1`
    font-size: 87px;
`
const Description = styled.p`
    padding: 70px;
    color: #383434;
`
const Seal = styled.img`
    padding-top: 150px;
    height: 200px;

`
const Right2 = styled.div`
    margin: 60px;
`
const Column = styled.div`
    border-top: 1px solid #000;
    margin-top: 60px;
    padding-top: 40px;
`
const Align = styled.div`
    display: flex;
`
const Align2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Heading4 = styled.h4`
    font-size: 30px;
    margin:  20px 50px;
`
const Head1 = styled.h3`
    font-size: 44px;
    margin-right: 100px;
`
const Link = styled.a`
    margin-left: 150px;
`
const Uparrow = styled.img`
height: 50px
`

export default Container2