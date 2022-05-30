import React from "react";
import { Button } from "../homeSection/style";
import {
  TradeContainer,
  Wrapper,
  ColumnLeft,
  ColumnRight,
  ImageIcon,
  ImageOne,
  ImageTwo,
  ImageThree,
} from "./style";
import Trad from "../../assets/image/about3.webp";
import About from "../../assets/image/about.webp";
import Bitcoin from "../../assets/image/bitcoin.webp";
import Coin from "../../assets/image/coin.webp";

interface Props {}

export const ThirdSection = (props: Props) => {
  return (
    <div>
      <TradeContainer>
        <Wrapper>
          <ColumnLeft>
            <h2>
              <span>Trade</span> anything. No registration, no hassle.{" "}
            </h2>
            <h2></h2>
            <p>
              Trade any token on BNB Smart Chain in seconds, just by connecting
              your wallet.
            </p>
            <Button>Trade Now</Button>
          </ColumnLeft>
          <ColumnRight>
            <ImageIcon>
              <ImageOne src={About} />
              <ImageTwo src={Bitcoin} />
              <ImageThree src={Coin} />
            </ImageIcon>
          </ColumnRight>
        </Wrapper>
      </TradeContainer>
    </div>
  );
};
