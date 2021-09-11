import styled from "styled-components";

export const Container = styled.div`
  min-height:calc(100vh - 55px);
  width:100%;
  background:var(--quartiary);
  padding:20px 0;
  min-width:100vw;
  
  
  
  form {
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0 auto;
    padding:0 15px;
    max-width: 450px;

    & > a {
      color:var(--text);
      font-size:16px;
      text-align:right;
      font-weight:600;
      text-decoration:underline;
      font-family:Poppins, sans-serif;
      align-self:flex-end;
      
    }
    & > div {
      margin-left:0;
      margin-right:0;
      align-self:flex-start;  
      input {
        margin:0;

        &.disabled {
          color:#ccc;
        }
      }

    }
    .buttons-container{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap: 15px;
      width:100%;

      button {
        border-radius:var(--radius);
      }

      .cancelar {
        background:#CA2A2A;
      }
    }
  }

`;