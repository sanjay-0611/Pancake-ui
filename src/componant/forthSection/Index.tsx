import React from "react";
import {
  Container,
  Wrapper,
  LeftContainer,
  RightContainer,
  DataWrapper,
  Button,
  FirstDiv,
  SecondDiv,
  ThirdDiv,
  ForthDiv,
  ImageIcon,
  FirstImage,
  SecondImage,
  ThirdImage,
} from "./style";
import Arrow from "../../assets/image/arrow.webp"
import PeiChart from "../../assets/image/peichart.webp";
import ImageOne from "../../assets/image/earn.webp";
import ImageSecond from "../../../../assets/image/about.webp";


export const ForthSection= () => {

  return (
    <div>
      <Container>
        <Wrapper>
          <LeftContainer flip={false}>
            <h1>Earn passive income with crypto.</h1>
            <p> PancakeSwap makes it easy to make your crypto work for you.</p>

            <Button>Explore</Button>
          </LeftContainer>
          <RightContainer flip={false}>
            <ImageIcon>
              <FirstImage src={ImageOne}/>
              <SecondImage src={PeiChart}/>
              <ThirdImage src={Arrow}/>
            </ImageIcon>
          </RightContainer>
        </Wrapper>

        <DataWrapper>
          <FirstDiv>
            <h5>Total supply</h5>
            <h4>290,853,574</h4>
          </FirstDiv>
          <SecondDiv>
            <h5>Burned to date</h5>
            <h4>440,138,078</h4>
          </SecondDiv>
          <ThirdDiv>
            <h5>Market cap</h5>
            <h4>$2.4 billion</h4>
          </ThirdDiv>
          <ForthDiv>
            <h5>Current emissions</h5>
            <h4>14.25/block</h4>
          </ForthDiv>
        </DataWrapper>
      </Container>
    </div>
  );
};
