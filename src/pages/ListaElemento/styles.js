import styled from 'styled-components'


export const Container = styled.div`
  min-height:calc(100vh - 55px);
  display:flex;
  flex-direction: column;
  align-items:center;
  background:var(--quartiary);

  h1 {
    font-size:20px;
    color:var(--text);
  }
  padding-bottom:35px;
`;


export const BotaoElemento = styled.div`
  height:60px;
  width:88%;
  background:var(--secondary);
  color:var(--text);
  border-radius:var(--radius);
  margin-top:24px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 15px;

  &.semBordaInferior {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  & > img {
    pointer-events:none;
    &::selection{
      color:transparent;
      background:transparent;
    }
  }

`;