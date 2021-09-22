import styled from 'styled-components'

const Button = styled.button`
    display:block;
    width:80%;
    max-width:300px;
    height:45px;
    
    margin:0 auto;
    margin-top:12px;
    background-color:var(--secondary);
    
    border:0;
    border-radius:var(--radius);
    
    text-align:center;
    color:var(--text);
    font-family:Poppins, sans-serif;
    font-weight: 600;
    font-size:1.2rem;

    cursor:pointer;


    &:disabled {
        filter: brightness(0.55);
        &:hover {
            cursor:not-allowed;
        }
    }
`
export default Button;
