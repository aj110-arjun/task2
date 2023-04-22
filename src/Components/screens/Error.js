import React from 'react';
import styled from 'styled-components';

function Error() {
  return (
    <>
        <Heading1>If this Page is showing<br />
                  click the navigation links<br />
                  given above !!!!  
        </Heading1>
    </>
  )
}
const Heading1 = styled.h1`
    text-align: center;
    margin-top: 15%;
    color: red;
`

export default Error