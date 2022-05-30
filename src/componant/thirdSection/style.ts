import styled from "styled-components";

export const TradeContainer = styled.div`
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 4rem;

  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h2 {
    color: #280d5f;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 1rem;
    @media screen and (max-width: 780px) {
      font-size: 28px;
    }
    @media screen and (max-width: 400px) {
      font-size: 18px;
    }
  }
  p {
    color: #7a6eaa;
    font-size: 16px;
  }
  span {
    color: #7645d9;
  }
`;
export const ColumnRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-animation: mover 1s infinite alternate;
    animation: mover 1s infinite alternate;

    @-webkit-keyframes mover {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }
    @keyframes mover {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }

    @media screen and (max-width: 768px) {
      height: 90%;
      width: 90%;
    }
  }
`;

export const ImageIcon = styled.picture`
  height: 428px;
  width: 428px;
  position: relative;
`;

export const ImageOne = styled.img`
  position: absolute;
  z-index: 3;
`;

export const ImageTwo = styled.img`
  position: absolute;
  z-index: 2;
`;

export const ImageThree = styled.img`
  position: absolute;
  z-index: 1;
`;
