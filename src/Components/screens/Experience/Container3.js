import React from 'react';
import styled from 'styled-components';

function Container3() {
  return (
    <>
        <Container>
            <Heading1>Experience</Heading1>
            <Div>
                <Left>
                    <Time>2019-present</Time>
                </Left>
                <Right>
                    <Heading3>Product Designer</Heading3>
                    <Company>Amazon Inc</Company>
                    <Paragraph>
                        It is a long established fact that a reader will be distracted by the industry's standard dummy text ever since the 1500s,<br />
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five<br />
                        centuries, but also the leap into electronic type setting, remaining essentially unchanged. It was popularised in the 1960s with<br />
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus<br />
                        PageMaker including versions of Lorem Ipsum.
                    </Paragraph>
                </Right>
            </Div>

            <Div>
                <Left>
                    <Time>2018-2019</Time>
                </Left>
                <Right>
                    <Heading3>Web UI/UX Designer</Heading3>
                    <Company>Google</Company>
                    <Paragraph>
                        It is a long established fact that a reader will be distracted by the industry's standard dummy text ever since the 1500s,<br />
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five<br />
                        centuries, but also the leap into electronic type setting, remaining essentially unchanged. It was popularised in the 1960s with<br />
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus<br />
                        PageMaker including versions of Lorem Ipsum.
                    </Paragraph>
                </Right>
            </Div>

            <Div>
                <Left>
                    <Time>2016-2018</Time>
                </Left>
                <Right>
                    <Heading3>UI Designer</Heading3>
                    <Company>Facebook</Company>
                    <Paragraph>
                        It is a long established fact that a reader will be distracted by the industry's standard dummy text ever since the 1500s,<br />
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five<br />
                        centuries, but also the leap into electronic type setting, remaining essentially unchanged. It was popularised in the 1960s with<br />
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus<br />
                        PageMaker including versions of Lorem Ipsum.
                    </Paragraph>
                </Right>
            </Div>

            <Div>
                <Left>
                    <Time>2014-2016</Time>
                </Left>
                <Right>
                    <Heading3>3D Designer</Heading3>
                    <Company>Facebook</Company>
                    <Paragraph>
                        It is a long established fact that a reader will be distracted by the industry's standard dummy text ever since the 1500s,<br />
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five<br />
                        centuries, but also the leap into electronic type setting, remaining essentially unchanged. It was popularised in the 1960s with<br />
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus<br />
                        PageMaker including versions of Lorem Ipsum.
                    </Paragraph>
                </Right>
            </Div>

            <Div>
                <Left>
                    <Time>2010-2014</Time>
                </Left>
                <Right>
                    <Heading3>Graphics Designer</Heading3>
                    <Company>Facebook</Company>
                    <Paragraph>
                        It is a long established fact that a reader will be distracted by the industry's standard dummy text ever since the 1500s,<br />
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five<br />
                        centuries, but also the leap into electronic type setting, remaining essentially unchanged. It was popularised in the 1960s with<br />
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus<br />
                        PageMaker including versions of Lorem Ipsum.
                    </Paragraph>
                </Right>
            </Div>

            <Div>
                <Left>
                    <Time>2008-2010</Time>
                </Left>
                <Right>
                    <Heading3>Motion Designer</Heading3>
                    <Company>Facebook</Company>
                    <Paragraph>
                        It is a long established fact that a reader will be distracted by the industry's standard dummy text ever since the 1500s,<br />
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five<br />
                        centuries, but also the leap into electronic type setting, remaining essentially unchanged. It was popularised in the 1960s with<br />
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus<br />
                        PageMaker including versions of Lorem Ipsum.
                    </Paragraph>
                </Right>
            </Div>

            <Div>
                <Left>
                    <Time>2006-2008</Time>
                </Left>
                <Right>
                    <Heading3>Graphics Designer</Heading3>
                    <Company>Digital Creator</Company>
                    <Paragraph>
                        It is a long established fact that a reader will be distracted by the industry's standard dummy text ever since the 1500s,<br />
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five<br />
                        centuries, but also the leap into electronic type setting, remaining essentially unchanged. It was popularised in the 1960s with<br />
                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus<br />
                        PageMaker including versions of Lorem Ipsum.
                    </Paragraph>
                </Right>
            </Div>
        </Container>
    </>
  )
}
const Container = styled.section``
const Heading1 = styled.h1`
    margin-left: 100px;
    padding-top: 50px;
    font-size: 40px;
`
const Div = styled.div`
    display: flex;
    margin: 50px 100px;
    padding-top: 30px;
    border-top: 1px solid #a0a0a0;
`
const Left = styled.div`
    margin-right: 80px;
    
`
const Time = styled.p``
const Right = styled.div``
const Heading3 = styled.h3``
const Company = styled.p`
    padding: 20px 0;
    color: #a7a7a7;
`
const Paragraph = styled.p`
    color: #a0a0a0;
`


export default Container3