import styled from 'styled-components' 

export const Container = styled.div`
  background-color: var(--quintiary);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 55px);

  form {
    padding-top: 15%;
    display: flex;
    flex-direction: column;
    height: 100%;
    button {
      margin-top: 24px;
      align-self: flex-end;
    }
  }
  .title-container {
    font-size: 18px;
    color: var(--text);
    font-family: Roboto, sans-serif;
    font-weight: 600;
    padding: 16px 24px;
    text-align: center;
  }
`;