import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 440px;
  align-items: center;
  padding: 24px 48px;
  margin-top: 140px !important;
  margin: auto;
  width: 64%;
`;

export const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 64px;
`;

export const Header = styled.h2`
  color: rgb(40, 13, 95);
  font-weight: bold;
  line-height: 1.1;
  font-size: 40px;
  margin: 0;
`;

export const ItemOne = styled.span`
  color: rgb(122, 110, 170);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: rgb(31, 199, 212);
  color: white;
  margin-right: 16px;
  border: none;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  border-radius: 16px;
  opacity: 1;
  outline: 0px;
  height: 48px;
  padding: 0px 24px;
  &:hover {
    transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  }
`;

export const Btn1 = styled.button`
  color: rgb(31, 199, 212);
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;
  border: none;
  background: white;
`;

export const ItemDiv2 = styled.picture`
  display: block;
  justify-content: center;
  height: 428px;
  position: relative;

  @media screen and (max-width: 768px) {
      height: 90%;
      width: 90%;
    }
`;

export const Image = styled.img`
  position: absolute;
  z-index: 1000;
  top: 0px;
  left: 0px;
  height: 428px;
  width: 428px;
  animation-name: example;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  @media screen and (max-width: 768px) {
      height: 90%;
      width: 90%;
    }

  @keyframes example {
    0% {
      left: 0px;
      top: 0px;
    }
    25% {
      left: 0px;
      top: 10px;
    }
    50% {
      left: 0px;
      top: 10px;
    }
    75% {
      left: 0px;
      top: 0px;
    }
  }
`;

export const ImageTwo = styled.img`
  z-index: 100;
  position: absolute;

  top: 0px;

  left: 0px;
  height: 428px;
  width: 428px;
  animation-name: example;
  animation-duration: 6s;
  animation-iteration-count: infinite;
   
  @media screen and (max-width: 768px) {
      height: 90%;
      width: 90%;
    }
  @keyframes example {
    0% {
      left: 0px;
      top: 0px;
    }
    25% {
      left: 0px;
      top: 10px;
    }
    50% {
      left: 0px;
      top: 10px;
    }
    75% {
      left: 0px;
      top: 0px;
    }
  }
`;

export const ImageThree = styled.img`
  z-index: 0;
  position: absolute;

  top: 0px;
  left: 0px;
  height: 428px;
  width: 428px;

  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  @media screen and (max-width: 768px) {
      height: 90%;
      width: 90%;
    }

  @keyframes example {
    0% {
      left: 0px;
      top: 0px;
    }
    25% {
      left: 0px;
      top: 10px;
    }
    50% {
      left: 0px;
      top: 10px;
    }
    75% {
      left: 0px;
      top: 0px;
    }
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  @media screen and (max-width: 768px) {
      height: 90%;
      width: 90%;
    }
`;

export const ItemDiv3 = styled.div`
  padding-right: 25px;
  margin-right: 32px;
  border-right: 0.5px solid rgb(122, 110, 170);
`;

export const MainItemDiv = styled.h4`
  margin: 0;
  color: rgb(122, 110, 170);
  font-weight: 400;
  line-height: 1.5;
  font-size: 16px;
`;

export const ItemDiv4 = styled.h2`
  margin: 0;
  color: rgb(40, 13, 95);
  font-weight: bold;
  line-height: 1.1;
  font-size: 24px;
`;
