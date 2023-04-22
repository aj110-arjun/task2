import React from 'react';
import styled from "styled-components";

function Container3() {
  return (
    <>
        <Container>
            <Left>
                <Heading1><Span>Mobile</Span>Apps</Heading1>
                <Ulist>
                    
                    <Flex>
                        <List>
                            <Div>
                                <Heading2>VPS Hosting <br /> Web Design</Heading2>
                                <Arrow src={require("../../Assets/uparrow.svg").default} />
                            </Div>
                            <Heading6>web/loading page</Heading6>
                            <Banner src={require("../../Assets/chats.jpg")} />
                        </List>

                        <List>
                            <Div>
                                <Heading2>VPS Hosting <br /> Web Design</Heading2>
                                <Arrow src={require("../../Assets/uparrow.svg").default} />
                            </Div>
                            <Heading6>web/loading page</Heading6>
                            <Banner src={require("../../Assets/processing.jpg")} />
                        </List>
                    </Flex>

                    <Div2>
                        <List>
                            <Div>
                                <Heading2>VPS Hosting <br /> Web Design</Heading2>
                                <Arrow src={require("../../Assets/uparrow.svg").default} />
                            </Div>
                            <Heading6>web/loading page</Heading6>
                            <Banner src={require("../../Assets/vps-landing-page.jpg")} />
                        </List>

                        <List>
                            <Div>
                                <Heading2>VPS Hosting <br /> Web Design</Heading2>
                                <Arrow src={require("../../Assets/uparrow.svg").default} />
                            </Div>
                            <Heading6>web/loading page</Heading6>
                            <Banner src={require("../../Assets/vps-landing-page.jpg")} />
                        </List>
                    </Div2>
                </Ulist>
            </Left>
        </Container>
    </>
  )
}
const Container = styled.section`
    padding-top: 100px;
`
const Left = styled.div`
    height: 1000px;
`
const Ulist = styled.ul`
    display: grid;
    margin: 100px;
`
const Flex = styled.div`
    display: flex;
    margin-top: 80px;
`
const List = styled.li`
    margin-right: 80px;
    list-style: none;
`
const Div = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #000;
    padding-top: 10px;
`
const Heading2 = styled.h2`
    height: 50px
`
const Arrow = styled.img`
    height: 40px;
`
const Heading6 = styled.h6`
    margin: 15px 0;
`
const Banner = styled.img`
    height: 300px;
    width: 300px;
`
const Heading1 = styled.h1`
    margin-left: 57%;
    font-size: 50px;
`
const Span = styled.span`
    color: #fcda69
`
const Div2 = styled.div`
    display: flex;
`


export default Container3