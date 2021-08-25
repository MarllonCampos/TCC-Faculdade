import styled, { css } from "styled-components";
import searchIcon from "../../assets/search-icon.svg";
import closeIcon from "../../assets/close-icon.svg";

const after = css`
  top: 0px;
  transform: rotate(-45deg);
`;
const before = css`
  bottom: 0px;
  transform: rotate(45deg);
`;

export const Container = styled.div`
  width: 100%;
  height: 55px;
  background: var(--quartiary);
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  padding-left: 12px;
  max-width: 1024px;
  display: flex;
  align-items: center;
  background: var(--quartiary);
  position: relative;
`;

export const IconBusca = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 45px;

  height: 100%;

  background: url(${searchIcon}) no-repeat 10px 50%;
  background-size: 25px;
`;

export const InputContainer = styled.div`
  height: 80%;
  width: min(500px, 100% - 80px);
  border-radius: 15px;

  display: flex;
  align-items: center;

  position: relative;
  background: white;
  animation-delay: 0.1s;
  animation: ${({ closeAnimation }) =>
      closeAnimation
        ? "disappear-input-transition"
        : "appear-input-transition"}
    280ms 1 linear;

  @keyframes appear-input-transition {
    0% {
      pointer-events: none;
      width: 10px;
      opacity: 0.2;
    }

    100% {
      width: min(500px, 100% - 80px);
      opacity: 1;
    }
  }

  @keyframes disappear-input-transition {
    0% {
      width: min(500px, 100% - 80px);

      opacity: 1;
    }

    100% {
      width: 10px;
      opacity: 0;
    }
  }
`;

export const Input = styled.input`
  height: 25px;
  width: 87%;
  border-radius: 15px;
  padding-left: 15px;

  outline: 0;
  border: 0;
  background-color: transparent;
`;

export const CloseIcon = styled.div`
  width: 24px;
  height: 100%;

  background: url(${closeIcon}) no-repeat center;
  background-size: 100%;

  position: absolute;
  right: 12px;
`;

export const BurgerIconContainer = styled.div`
  z-index: 20;
  width: 45px;
  height: 45px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0px;
`;

export const BurgerIcon = styled.div`
  z-index: 20;
  width: 22px;
  height: 4px;
  background-color: ${({ openAnimation }) =>
    openAnimation == false && "white"};
  position: relative;

  background-size: 25px;

  transition: all 0.3s linear;

  &::before,
  &::after {
    content: "";
    width: 22px;
    height: 4px;
    display: block;
    position: absolute;
    background-color: white;
    transition: all 0.3s linear;
  }

  &::before {
    bottom: 8px;
    ${({ openAnimation }) =>
      openAnimation == true && before}
  }

  &::after {
    top: 8px;
    ${({ openAnimation }) => openAnimation == true && after}
  }
`;
