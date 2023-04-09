import React from 'react';
import styled from 'styled-components';
import '../../App.css'
import Helmet from 'react-helmet'


function Home() {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>
        <Container>
            <Wrapper>
                <Left>
                    <Paragraph>Hello</Paragraph>
                    <Heading1>We have<br /> Design<br /> Experience</Heading1>
                    <Paragraph2>Hi I am a UI/UX Designer--- creting bold & brave<br />interface design for companies alla cross the world</Paragraph2>
                <Div2>
                    
                        <Button>
                            Let's Talk <Icon src={require("../Assets/telegram.svg").default} alt="logo" /> 
                        </Button>
                        
                        <Button2>
                            Protofolio <Icon2 src={require("../Assets/arrow.svg").default} alt="logo"/>
                        </Button2>
                    
                </Div2>
                <Div3>
                    <Heading6>Check Out My</Heading6>
                    <Logo1 src={require("../Assets/instaicon.svg").default} />
                    <Logo1 src={require("../Assets/dribbleicon.svg").default} />
                    <Logo1 src={require("../Assets/behanceicon.svg").default} />
                </Div3>
                </Left>
                <Right>
                    <Image src={require("../Assets/landingpagevector.png")} />
                </Right>
                <Div>
                    <Heading5>"people ignore design <br />that ignores people"</Heading5>
                </Div>
                
            </Wrapper>
        </Container>

        <Container2>
            <Left2>
                <Service>Service</Service>
                <Services>Services |<br /> Offer</Services>
                <Description>We help ambitious business like your generate more<br />profits by building awareness driving web traffic,<br />connecting with costomers and growing overall sales.</Description>
                <Seal src={require("../Assets/seal.png")} />
            </Left2>
            <Right2>
                <Column>
                    <Align>
                        <Heading4>01/</Heading4>
                        <Head1>Web UI/UX <br />Design</Head1>
                    </Align>
                    <Align2>
                        <Link>Explore</Link>
                        <Uparrow src={require("../Assets/uparrow.svg").default} />
                    </Align2>
                </Column>
                <Column>
                    <Align>
                        <Heading4>02/</Heading4>
                        <Head1>Mobile App UI/ <br />UX Design</Head1>
                    </Align>
                    <Align2>
                        <Link>Explore</Link>
                        <Uparrow src={require("../Assets/uparrow.svg").default} />
                    </Align2>
                </Column>
                <Column>
                    <Align>
                        <Heading4>03/</Heading4>
                        <Head1>Dashboard & <br />Saas Design</Head1>
                    </Align>
                    <Align2>
                        <Link>Explore</Link>
                        <Uparrow src={require("../Assets/uparrow.svg").default} />
                    </Align2>
                </Column>
            </Right2>
        </Container2>

        <Container3>
            <Left3>
                <Experience>Experience</Experience>
                <SkillHead>Skills & <br />Experience</SkillHead>
                <Description2>We help ambitious business like your generate more<br />profits by building awareness driving web traffic,<br />connecting with costomers and growing overall sales.</Description2>
                <Skill1>Skills</Skill1>
                <Skills>
                    <Block3>
                        <Block>
                            <Pic src={require("../Assets/visual.svg").default} />
                            <Name>Visual Design</Name>
                        </Block>

                        <Block>
                            <Pic src={require("../Assets/wireframe.svg").default} />
                            <Name>Wire Frame</Name>
                        </Block>

                        <Block>
                            <Pic src={require("../Assets/ux.svg").default} />
                            <Name>User Experience <br /> Design</Name>
                        </Block>
                    </Block3>
                    <Block2>
                        <Block>
                            <Pic src={require("../Assets/prototype.svg").default} />
                            <Name>Prototype</Name>
                        </Block>

                        <Block>
                            <Pic src={require("../Assets/artdirection.svg").default} />
                            <Name>Art Direction</Name>
                        </Block>

                        <Block>
                            <Pic src={require("../Assets/userresearch.svg").default} />
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
        </Container3>

        <Container4>
            <LatestProject>Latest<br /> Project</LatestProject>
            <Wrap>
                <Ulist>
                    <List>
                        <Flex>
                            <Head2>Plantshop Landing<br />page Design</Head2>
                            <Uarrow src={require("../Assets/uparrow.svg").default} />
                        </Flex>
                        <Head5>web/loading page</Head5>
                        <Banner src={require("../Assets/plantshop-landiing-page.jpg")} />
                    </List>

                    <List2>
                        <Flex>
                            <Head2>VPS Hosting <br /> Web Design</Head2>
                            <Uarrow src={require("../Assets/uparrow.svg").default}  />
                        </Flex>
                        <Head5>web/loading page</Head5>
                        <Banner src={require("../Assets/vps-landing-page.jpg")} />
                    </List2>

                    <List3>
                        <Flex>
                            <Head2>Book Landing page <br />Design</Head2>
                            <Uarrow src={require("../Assets/uparrow.svg").default}  />
                        </Flex>
                        <Head5>web/loading page</Head5>
                        <Banner src={require("../Assets/book landing-page.jpg")} />
                    </List3>
                </Ulist> 
            </Wrap>
            <Seal2 src={require("../Assets/seal.png")} />
        </Container4>
        
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
    height: 600px;
    width: 100%
    
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
const Container2 = styled.section`
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
const Container3 = styled.section`
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
`
const Container4 = styled.section`
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
    position: relative;
    border-top: 1px solid #000;
    padding: 20px 0;
`
const List2 = styled.li`
    list-style: none;
    margin-right: 20px;
    position: relative;
    top: -120px;
    border-top: 1px solid #000;
    padding: 20px 0;
`
const List3 = styled.li`
    list-style: none;
    position: relative;
    margin-right: 20px;
    top: -240px;
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








export default Home 