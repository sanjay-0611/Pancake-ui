import React from "react";
import { Button } from "../homeSection/style";
import {
  MainContainer,
  Wrapper,
  Heading,
  Paragrap,
  Paragrap2,
  FinishDiv,
} from "./style";

interface Props {}

export const SixthSection = (props: Props) => {
  return (
    <div>
      <MainContainer>
        <Wrapper>
          <Heading>
            <h1>Start in seconds.</h1>
          </Heading>
          <Paragrap>
            <p>Connect your crypto wallet to start using the app in seconds.</p>
          </Paragrap>
          <Paragrap2>
            <p>No registration needed.</p>
          </Paragrap2>
          <FinishDiv>Learn how to start</FinishDiv>
          <Button>Connect Wallet</Button>
        </Wrapper>
      </MainContainer>
    </div>
  );
};
