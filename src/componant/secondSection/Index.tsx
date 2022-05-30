import React from "react";
import { GiSpain } from "react-icons/gi";
import about from "../../assets/image/about.png";

import {
  SectionTwoContainer,
  ImageLogo,
  MainWrapper,
  CartWrapper,
  ItemCard,
  SectionTwoIcon1,
  SectionTwoIcon2,
  SectionTwoIcon3,
} from "./style";

interface Props {}

const SectionTwo = (props: Props) => {
  return (
    <div>
      <SectionTwoContainer>
        <ImageLogo>
          <img src={about} alt="section" />
        </ImageLogo>
        <MainWrapper>
          <h2>Used by millions.</h2>
          <h2>Trusted with billions.</h2>
          <p>
            PancakeSwap has the most users of any decentralized platform, ever.
            <br></br>
            And those users are now entrusting the platform with over $6 billion
            in funds.
          </p>
        </MainWrapper>
        <CartWrapper>
          <ItemCard>
            <SectionTwoIcon1 />

            <h2>
              3.1 million <br></br>
              <span style={{ color: "rgb(118, 69, 217)" }}>users</span>
            </h2>
            <p>in the last 30 days</p>
          </ItemCard>

          <ItemCard>
            <SectionTwoIcon2 />

            <h2>
              40 million <br></br>
              <span style={{ color: "rgb(31, 199, 212)" }}>trades</span>
            </h2>
            <p>made in the last 30 days</p>
          </ItemCard>

          <ItemCard>
            <SectionTwoIcon3 />

            <h2>
              $6 billion <br></br>
              <span style={{ color: "rgb(237, 75, 158)" }}>staked</span>
            </h2>
            <p>Total Value Locked</p>
          </ItemCard>
        </CartWrapper>
      </SectionTwoContainer>
    </div>
  );
};

export default SectionTwo;
