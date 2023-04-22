import React from 'react';
import styled from 'styled-components';
import '../../../App.css';

function Container1() {
  return (
    <>
        <Container>
            <Wrapper>
                <Left>
                    <Hello>Hello!</Hello>
                    <Heading1>Touch with Us</Heading1>
                    <Paragraph>
                        We help ambitious business like your generate more<br />
                        profits by building awareness driving web traffic,<br />
                        connecting with costomers and growing overall sales.
                    </Paragraph>
                </Left>
                <Right>
                    <Seal src={require("../../Assets/seal.png")} />
                </Right>
            </Wrapper>
        </Container>
    </>
  )
}
const Container = styled.section`
    background: #fcda69;
`
const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    
`
const Left = styled.div`
    margin-left: 70px;
`
const Hello = styled.p`
    color: #8873ef;
    transform: rotate(345deg);
    margin-left: -12px;
`
const Heading1 = styled.h1`
    font-size: 60px;
    padding: 40px 0
`
const Paragraph = styled.p`
    color: #2b2d2f;
    margin-left: 60px;
    margin-bottom: 60px;
`
const Right = styled.div``
const Seal = styled.img`
    height: 150px;
    margin: 60px;
`

export default Container1