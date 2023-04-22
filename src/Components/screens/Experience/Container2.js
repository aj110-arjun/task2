import React from 'react';
import styled from 'styled-components';
import '../../../App.css';


function Container2() {
  return (
    <>
        
                <Skills>
                    <Skill1>Skills</Skill1>
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
    </>
  )
}
const Skill1 = styled.h1`
    padding-top: 50px;
    margin-left: 100px;
    font-size: 40px;
`
const Skills = styled.div`
    display: block;
`
const Pic = styled.img`
    height: 80px;
`
const Block3 = styled.div`
    display: flex;
    padding: 30px 300px;  
    
    border-top: 1px solid #e7e7e7;
`
const Block2 = styled.div`
    display: flex;
    padding-left: 320px;
`
const Block = styled.div`
    margin: 0 50px;
    display: block;
    align-items: center;
    
`
const Name = styled.p`
    margin-top: 10px
    
`


export default Container2