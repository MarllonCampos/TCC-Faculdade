import styled, { keyframes } from "styled-components";
const leftRight = keyframes`
  0%{
    opacity:0.2;
  }
  
  100%{
    opacity:1
  }
  
`
export const Container = styled.div`
  width: 88%;
  display: flex;
  ul {
    flex: 1;
  }
`;

export const Li = styled.li`
  background:var(--secondary);
  animation: ${leftRight} linear;
  animation-fill-mode:forwards;
  animation-duration: ${({ index }) =>
  `${((index+1) * 350)}ms`};

  &:nth-child(even) {
    background: var(--tertiary);
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  flex: 1;
  width: 100%;
  color: var(--text);
  height: 45px;
  transition:border-radius ${({ index }) =>
  `${((index+1) * 350)}ms`} linear;


  &:last-child{
    border-bottom-left-radius:var(--radius);
    border-bottom-right-radius:var(--radius);
  }
`;

export const LigadoDesligado = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 81px;
  gap: 8px;
  span {
    background-color: var(--dot-red);
    width: 8px;
    height: 8px;
    display: block;
    border-radius: 50%;
  }

  &.active {
    span {
      background-color: var(--dot-blue);
    }
  }
`;
