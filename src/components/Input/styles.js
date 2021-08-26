import styled from 'styled-components'
import passwordIcon from '../../assets/eye-icon.svg'

export const Container = styled.div`
  width: 80%;
  max-width: 300px;

  margin: 0 auto;
  margin-bottom: 12px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  box-sizing: content-box;

  &:not(:first-child) {
    margin-top: 20px;
  }
  &:first-child {
    margin-top: 12px;
  }
`

export const Label = styled.label`
  color: var(--text);
  font-weight: 600;
  padding-left: 15px;
  font-family: Poppins, sans-serif;
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: white;

  height: 45px;
  width: 100%;

  border-radius: 500px;

  margin-top: 12px;
`

export const Input = styled.input`
  height: 25px;
  width: calc(100% - 46px);
  padding-left: 15px;

  outline: 0;
  border: 0;
  background-color: transparent;
`

export const PasswordIcon = styled.div`
  width: 24px;
  height: 100%;

  background: url(${passwordIcon}) no-repeat center;
  background-size: 100%;

  position: absolute;
  right: 12px;
`
