import React from 'react';
import "../../../App.css";
import styled from "styled-components"

function Container3() {
  return (
    <>
        <Container>
            <Left3>
                <Experience>Experience</Experience>
                <SkillHead>Skills & <br />Experience</SkillHead>
                <Description2>We help ambitious business like your generate more<br />profits by building awareness driving web traffic,<br />connecting with costomers and growing overall sales.</Description2>
                <Skill1>Skills</Skill1>
                <Skills>
                    <Block3>
                        <Block>
                            <Pic src={require("../../Assets/visual.svg").default} />
                            <Name>Visual Design</Name>
                        </Block>

                        <Block>
                            <Pic src={require("../../Assets/wireframe.svg").default} />
                            <Name>Wire Frame</Name>
                        </Block>

                        <Block>
                            <Pic src={require("../../Assets/ux.svg").default} />
                            <Name>User Experience <br /> Design</Name>
                        </Block>
                    </Block3>
                    <Block2>
                        <Block>
                            <Pic src={require("../../Assets/prototype.svg").default} />
                            <Name>Prototype</Name>
                        </Block>

                        <Block>
                            <Pic src={require("../../Assets/artdirection.svg").default} />
                            <Name>Art Direction</Name>
                        </Block>

                        <Block>
                            <Pic src={require("../../Assets/userresearch.svg").default} />
                            <Name>User Research</Name>
                        </Block>
                    </Block2>

                </Skills>
            </Left3>
            <Right3>
                <Experience2>Experience</Experience2>
                <Div6>
                    <Div4>
                        <Time>2019 - present</Time>
                    </Div4>
                    <Div5>
                        <Heading3>Product Designer</Heading3>
                        <Company>Amazon Inc</Company>
                    </Div5>
                </Div6>

                <Div6>
                    <Div4>
                        <Time>2014 - 2006</Time>
                    </Div4>
                    <Div5>
                        <Heading3>UI/UX Designer</Heading3>
                        <Company>Microsoft</Company>
                    </Div5>
                </Div6>

                <Div6>
                    <Div4>
                        <Time>2014 - 2006</Time>
                    </Div4>
                    <Div5>
                        <Heading3>Web UI/UX Designer</Heading3>
                        <Company>Google</Company>
                    </Div5>
                </Div6>

                <Div6>
                    <Div4>
                        <Time>2014 - 2006</Time>
                    </Div4>
                    <Div5>
                        <Heading3>UI Designer</Heading3>
                        <Company>Facebook</Company>
                    </Div5>
                </Div6>

            </Right3>
        </Container>
    </>
  )
}

const Container = styled.section`
    display: flex;
    justify-content: space-between;
`
const Left3 = styled.div`
    margin: 50px;
`
const Experience = styled.p`
    color: #8873ef;
    transform: rotate(353deg);
    padding-bottom: 20px;
    
`
const SkillHead = styled.h1`
    font-size: 70px;
`
const Description2 = styled.section`
    margin: 50px 90px;
`
const Skill1 = styled.h2``
const Skills = styled.div`
    display: block;
`
const Pic = styled.img`
    height: 80px;
`
const Block3 = styled.div`
    display: flex;  
    padding-bottom: 30px;
`
const Block2 = styled.div`
    display: flex;
`
const Block = styled.div`
    margin: 0 50px;
    display: block;
    align-items: center;
    
`
const Name = styled.p`
    margin-top: 10px
    
`
const Right3 = styled.div`
    margin: 80px;
`
const Experience2 = styled.h2`
    margin-bottom: 30px;
`
const Div4 = styled.div``
const Time = styled.h6`
    margin-right: 50px;
`
const Div5 = styled.div`
    margin-right: 100px;
`
const Div6 = styled.div`
    display: flex;
    border-top: 2px solid #e6e6e6;
    padding-top: 20px;
    
`
const Heading3 = styled.h3``
const Company = styled.p`
    margin: 20px 0;
    color: #a7a7a7;
`

export default Container3