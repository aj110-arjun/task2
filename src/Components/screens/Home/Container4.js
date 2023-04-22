import React from 'react';
import "../../../App.css";
import styled from "styled-components";

function Container4() {
  return (
    <>
         <Container>
            <LatestProject>Latest<br /> Project</LatestProject>
            <Wrap>
                <Ulist>
                    <List>
                        <Flex>
                            <Head2>Plantshop Landing<br />page Design</Head2>
                            <Uarrow src={require("../../Assets/uparrow.svg").default} />
                        </Flex>
                        <Head5>web/loading page</Head5>
                        <Banner src={require("../../Assets/dashboard6.jpg")} />
                    </List>

                    <List>
                        <Flex>
                            <Head2>VPS Hosting <br /> Web Design</Head2>
                            <Uarrow src={require("../../Assets/uparrow.svg").default}  />
                        </Flex>
                        <Head5>web/loading page</Head5>
                        <Banner src={require("../../Assets/vps-landing-page.jpg")} />
                    </List>

                    <List>
                        <Flex>
                            <Head2>Book Landing page <br />Design</Head2>
                            <Uarrow src={require("../../Assets/uparrow.svg").default}  />
                        </Flex>
                        <Head5>web/loading page</Head5>
                        <Banner src={require("../../Assets/dashboard5.jpg")} />
                    </List>
                </Ulist> 
            </Wrap>
            <Seal2 src={require("../../Assets/seal.png")} />
        </Container>
    </>
  )
}
const Container = styled.section`
    background: #fcda69;
    
`
const LatestProject = styled.h1`
    font-size: 54px;
    padding: 50px;
    display: block;
`
const Wrap = styled.div`
    display: flex;
`
const Ulist = styled.ul`
    display: flex;
    padding: 40px;
`
const List = styled.li`
    list-style: none;
    margin-right: 20px;
    border-top: 1px solid #000;
    padding: 20px 0;
`
const Head2 = styled.h2``
const Head5 = styled.h5`
    padding-bottom: 20px;
`
const Uarrow = styled.img`
    height: 50px;
`
const Banner = styled.img`
    height: 300px;
    width: 400px;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`
const Seal2 = styled.img`
    height: 150px;
    float: right;
    margin:-200px 70px 0 0;
`


export default Container4