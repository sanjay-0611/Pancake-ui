import React from "react";
import Logo from "../../assets/image/hero.png";
import Lottery from "../../assets/image/lottery.webp";
import LogoImage from "../../assests/image/mod-tc-desktop.webp";
import Picture from "../../assets/image/bunny@2x.png";
import {
  Wrapper1, Box1, LeftBox1, RightBox1, Heading1, PlayBtn1, Img1, TimerBox1,BoxImg,
  Container,ColumnLeft,ButtonContainer,Button,RightButton,ColumnRight,
  Wrapper2, LeftBox2, RightBox2, ButtonGroup2, Img2, Btn12, Btn22, Content2,Heading2 
} from "./style";

export const Main = () => {
  return (
    <div>
      <Wrapper1>
        <Box1>
          <LeftBox1>
            <Heading1>Win $95,663 in Lottery</Heading1>
            <TimerBox1>25h 15m 15s</TimerBox1>
            <PlayBtn1>Trade Now</PlayBtn1>
          </LeftBox1>
          <RightBox1>
            {" "}
            <img src={Lottery} />
          </RightBox1>
        </Box1>
      </Wrapper1>
      <Container>
      <ColumnLeft>
        <h1>The moon is made of pancakes.</h1>
        <p>
          Trade, earn, and win crypto on the most popular decentralized
          platform in the galaxy.
        </p>
        <ButtonContainer>
          <Button>Connect Wallet</Button>
          <RightButton>Trade Now</RightButton>
        </ButtonContainer>
      </ColumnLeft>
      <ColumnRight>
        <img src={Logo} alt="home" />
      </ColumnRight>
    </Container>
    </div>
  );
};

   // <Wrapper2>
      //   <LeftBox2>
      //     <Heading2>The moon is made of Pancakes.</Heading2>
      //     <Content2>
      //       Trade , earn , and win crypto on the most popular decentralized
      //       platform in the galaxy.
      //     </Content2>
      //     <ButtonGroup2>
      //       <Btn12>Connect Wallet</Btn12>
      //       <Btn22>Trade Now</Btn22>
      //     </ButtonGroup2>
      //   </LeftBox2>
      //   <RightBox2>
      //     <Img2 src={Logo} />
      //   </RightBox2>
      // </Wrapper2>
