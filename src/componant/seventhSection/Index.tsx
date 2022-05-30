import React from "react";
import Icon1 from "../../assets/image/CAKE@blue.webp";
import Icon2 from "../../assets/image/BNB@2x.webp";
import Icon3 from "../../assets/image/BTCcoin.webp";
import {
  MainContainer,
  ItemDiv,
  Header,
  ItemOne,
  ButtonContainer,
  Button,
  Btn1,
  ItemDiv2,
  Image,
  ImageTwo,
  ImageThree,
  BottomContainer,
  ItemDiv3,
  MainItemDiv,
  ItemDiv4
} from "./style";
export const SeventhSection = () => {
  return (
      <div>
          <MainContainer>
                    <ItemDiv>
                     <Header><span style={{ color: 'rgb(118, 69, 217)' }}>Cake</span> makes our world</Header>
                            <Header>go round.</Header>
                        < ItemOne>CAKE token is at the heart of the PancakeSWap ecosystem. <br></br> Buy it, win it, farm it , spend it, stake it.. heck you can even <br></br> vote with it!</ItemOne>
                        <ButtonContainer><Button>Buy Cake</Button> <Btn1>Learn</Btn1></ButtonContainer>
                    </ItemDiv>
                    <ItemDiv2>
                        <Image src={Icon1} alt="image one"/>
                       
                        <ImageTwo src={Icon2} alt="image two"/>
                        <ImageThree src={Icon3} alt="image three"/>
                    </ItemDiv2>
                </MainContainer>
                <BottomContainer>
                    <ItemDiv3>
                        <MainItemDiv>Total Supply</MainItemDiv>
                        <ItemDiv4>294,776,502</ItemDiv4>
                    </ItemDiv3>
                    <ItemDiv3>
                        <MainItemDiv>Burned to date</MainItemDiv>
                        <ItemDiv4>459,975,897</ItemDiv4>
                    </ItemDiv3>
                    <ItemDiv3>
                        <MainItemDiv>Market cap</MainItemDiv>
                        <ItemDiv4>$1.3 billion</ItemDiv4>
                    </ItemDiv3>
                    <ItemDiv3>
                        <MainItemDiv>Current emissions</MainItemDiv>
                        <ItemDiv4>14.25/block</ItemDiv4>
                    </ItemDiv3>
                </BottomContainer>
      </div>
  )
};


