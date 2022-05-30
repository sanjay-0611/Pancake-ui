import React from "react";
import {
  Container,
  LogoWrapper,
  HeaderItem,
  HeaderAction,
  LeftContainer,
  WorldIcon,
  Setting,
  ThreeDot,
  NavTab,
  HoverWrap,
  ListItems,
  ButtonDiv,
  Button,
} from "./style";
import Logo from "../assets/image/Logo.png";
import about from "../assets/image/about.png";

export const Navbar = () => {
  

  return (
    <>
      <Container>
        <LeftContainer>
          <LogoWrapper>
            <img src={Logo} alt="panswap" />
          </LogoWrapper>
          <HeaderItem>
            <NavTab>
              Trade
              <HoverWrap>
                <ListItems>Swap</ListItems>
                <ListItems>Remove</ListItems>
                <ListItems>Liquidity</ListItems>
                <ListItems>Prepactual</ListItems>
              </HoverWrap>
            </NavTab>
            <NavTab>
              Earn
              <HoverWrap>
                <ListItems>Farms</ListItems>
                <ListItems>Pools</ListItems>
              </HoverWrap>
            </NavTab>
            <NavTab>
              Win
              <HoverWrap>
                <ListItems>Trending Compitaion</ListItems>
                <ListItems>Predicyion(BETA)</ListItems>
                <ListItems>Lottory</ListItems>
              </HoverWrap>
            </NavTab>
            <NavTab>
              NFT
              <HoverWrap>
                <ListItems>Overviwe</ListItems>
                <ListItems>Collection</ListItems>
                <ListItems>Activity</ListItems>
              </HoverWrap>
            </NavTab>
            <NavTab>
              <ThreeDot />
              <HoverWrap>
                <ListItems>Info</ListItems>
                <ListItems>IFO</ListItems>
                <ListItems>Voteing</ListItems>
                <ListItems>LeaderBoard</ListItems>
              </HoverWrap>
            </NavTab>
          </HeaderItem>
        </LeftContainer>

        <HeaderAction>
          <img src={about} alt="token" />
          <p>$7.673</p>
          <WorldIcon />
          <Setting />
        </HeaderAction>

        <ButtonDiv>
          <Button>Connect Wallet</Button>
        </ButtonDiv>
      </Container>
    </>
  );
};
