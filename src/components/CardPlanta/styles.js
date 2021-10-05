import styled from 'styled-components'

export const Conteiner = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  width: 300px;
  height: 200px;
  margin-top: 20px;
  text-decoration: none;

  & > div {
    flex: 1;
  }
`

export const Image = styled.img`
  border-radius: 10px;
  width: 150px;
  height: 200px;
`

export const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


export const TextData = styled.p`
  color: rgb(13, 139, 41);
  font-size: 14px;
  font-weight: bolder;
  margin-left: 10px;
  margin-bottom: 10px;
`

export const TextoStatus = styled.p`
  font-weight: bolder;
  color: rgb(0, 5, 0);
  font-size: x-large;
  text-align: center;
  padding: 10px;
`
