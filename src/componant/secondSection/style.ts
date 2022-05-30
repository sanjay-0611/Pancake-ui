import { FaUsers } from "react-icons/fa";
import styled from "styled-components";
import { GiTrade } from "react-icons/gi";
import { GoGraph } from "react-icons/go";












export const SectionTwoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  z-index: 1;
  margin: 10px;
  background: linear-gradient(rgb(255, 255, 255) 22%, rgb(215, 202, 236) 100%);

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;

export const ImageLogo = styled.div`
  img {
    height: 48px;
    width: 48px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 35px;
    /* font-weight: 500px; */
    margin: 2px;
    line-height: 1;
    color: #280d5f;

    @media screen and (max-width: 780px) {
      font-size: 28px;
    }
    @media screen and (max-width: 400px) {
      font-size: 18px;
    }
  }

  p {
    text-align: center;
    @media screen and (max-width: 780px) {
      font-size: 14px;
    }
  }
`;

export const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  align-items: center;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  h2 {
    font-size: 40px;
    font-weight: 600;
    color: rgb(40, 13, 95);
  }
  @media screen and (max-width: 780px) {
    font-size: 28px;
  }
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }

  p {
    color: rgb(122, 110, 170);
    font-weight: 400;
    font-size: 16px;
  }
`;

export const SectionTwoIcon1 = styled(FaUsers)`
  font-size: 28px;
  align-self: end;
  fill: rgb(118, 69, 217);
  flex-shrink: 0;
`;
export const SectionTwoIcon2 = styled(GiTrade)`
  font-size: 28px;
  align-self: end;
  fill: rgb(31, 199, 212);
  flex-shrink: 0;
`;

export const SectionTwoIcon3 = styled(GoGraph)`
  font-size: 28px;
  align-self: end;
  fill: rgb(237, 75, 158);
  flex-shrink: 0;
`;
