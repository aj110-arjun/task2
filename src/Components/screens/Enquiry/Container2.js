import React from 'react';
import styled from 'styled-components';
import "../../../App.css"

function Container2() {
  return (
    <>
       <Container>
            <Top>
                <Help>Here We Help</Help>
                <Heading1>Enquiry Form</Heading1>
            </Top>
            <Enquiry>
                <Form>
                    <Div>
                        <FirstName>First Name *</FirstName><br />
                        <Input type="text" placeholder="Enter First Name" required/>
                    </Div>  

                    <Div>
                        <LastName>Last Name *</LastName><br />
                        <Input type="text" placeholder="Enter Last Name" required/>
                    </Div>

                    
                </Form>

                <Form>
                    <Div> 
                        <Number>Phone Number *</Number><br />
                        <Phone value="+91" type="tel" placeholder="Phone Number" required/>
                    </Div>  

                    <Div>
                        <Email>Email *</Email><br />
                        <Input type="email" placeholder="Enter Email" required/>
                    </Div> 
                </Form>
            </Enquiry>
            <Enquiry2>
                <Form2>

                    <Div2>
                        <Label>Devices *</Label><br />
                        <Select>
                            <Option value="select">Select</Option>
                            <Option value="Laptop">Laptop</Option>
                            <Option value="Desktop">Desktop</Option>
                            <Option value="Net Book">Net Book</Option>
                            <Option value="Mobile Phones">Mobile Phones</Option>
                        </Select>
                    </Div2>
                    
                    <Div2>
                        <Label>Project Categories *</Label><br />
                        <Select>
                            <Option>Mobile App</Option>
                            <Option>Web App</Option>
                            <Option>Animation</Option>
                            <Option>Graphics</Option>
                        </Select>
                    </Div2>
                    <Div2>
                        <Label>Description *</Label>
                        <Description type="text" placeholder="Type Here...." />
                    </Div2>

                </Form2>
                <Next>Next <Image src={require("../../Assets/next.png")} /></Next>
            </Enquiry2>
       </Container>
    </>
 
    
  )
}
const Container = styled.section`
    padding-top: 30px;
    margin-bottom: 20px;
`
const Top = styled.div`
    text-align: center;
`
const Help = styled.p`
    margin-left: -150px;
    color: #8873ef;
    transform: rotate(330deg);
`
const Heading1 = styled.h1``
const Enquiry = styled.div`
    display: grid;
    margin-left: 15%;
`
const Form = styled.form`
    display: block;
`
const Div = styled.div`
    display: inline-block;
    padding: 20px;
`
const FirstName = styled.label`
    color: #a0a0a0;
`
const LastName = styled.label`
    color: #a0a0a0;
`
const Number = styled.label`
    color: #a0a0a0;
`
const Email = styled.label`
    color: #a0a0a0;
`
const Input = styled.input`
    width: 400px;
    padding: 15px;
    border: 2px solid #a0a0a0;
    background: #fff;
    border-radius: 8px;
`
const Phone = styled.input`
    width: 400px;   
    padding: 15px;
    padding-left: 20px
    border: 2px solid #a0a0a0;
    background: #fff;
    border-radius: 8px;
    
`
const Enquiry2 = styled.div`
    margin-top: 50px;
`
const Form2 = styled.form`
    border-top: 2px solid #a0a0a0;
    width: 1000px;
    margin-left: 200px;
    padding: 40px 0;
`
const Label = styled.label`
    color: #a0a0a0;
    padding-top: 20px;
`
const Select = styled.select`
    padding: 10px 0;
    padding-right: 300px;
    border: 2px solid #a0a0a0;
    background: #fff;
    border-radius: 8px;
`
const Option = styled.option`
    width: 400px; 
    padding: 15px;
`
const Div2 = styled.div`
    display: inline-grid;
    margin-left: 100px;
`

const Description = styled.input`
    padding-bottom: 100px;
    padding-right: 700px;
    border: 2px solid #a0a0a0;
    background: #fff;
    border-radius: 8px;
`
const Next = styled.a`
    display: flex;
    align-items: center;
    margin-left: 80%;
    cursor: pointer;
`
const Image = styled.img`
    height: 40px;
    cursor: pointer;
`


export default Container2