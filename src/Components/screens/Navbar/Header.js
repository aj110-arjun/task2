import React,{} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import '../../../App.css';



function Header() {
  return (
    <>
        <Container>
            <Left>
                <Logo src={require("../../Assets/casa-logo.svg").default} alt="logo" />
            </Left>

            <Middle>

                <NavLink
                 className={({isActive}) => isActive ? "active" : ""}
                 to="/"> Home </NavLink>

                <NavLink
                 className={({isActive}) => isActive ? "active" : ""}
                 to="/Project"> Project </NavLink>

                <NavLink
                 className={({isActive}) => isActive ? "active" : ""}
                 to="/experience"> Experience </NavLink>

                <NavLink
                 className={({isActive}) => isActive ? "active" : ""}
                 to="/enquiry"> Enquiry </NavLink>

            </Middle>

            <Right>
                <SignIn>Sign Up</SignIn>
                <SignUp>Sign In</SignUp>
                
            </Right>
        </Container>   
    </>
  )
}

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    
`
const Left = styled.div`
   
`
const Logo = styled.img`
    height: 50px;
    margin: 20px;
    
`
const Middle = styled.div`
    
    display: flex;
`

const Right = styled.div`
    display: flex;
    margin-left: 70px;
`
const SignIn = styled.button`
    background-color: #fff;
    border: 2px;
    font-weight: 700;
    cursor: pointer;
    padding: 10px 50px ;
    
    
`
const SignUp = styled.button`
    background-color: #fff;
    padding: 10px 40px;
    font-weight: 700;
    cursor: pointer;
   

`

export default Header