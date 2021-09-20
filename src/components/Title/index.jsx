import React from 'react'
import styled from 'styled-components'

const Title = props => (
    <Container>
        
        <h3>{props.title}</h3>
        <label>{props.textInput}</label>
    </Container>
)

export default Title


const Container = styled.div`
    h3{
        margin: 0;
        margin-bottom: 16px;
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--text);
        text-align: center;
        font-family:Poppins, sans-serif;
    }
`