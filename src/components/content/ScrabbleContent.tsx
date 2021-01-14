import * as React from "react";
import styled from "styled-components";
import { colors, fonts, fontWeights } from "../../themes";

export const Title = styled.h2`
  color: ${colors.darkBlue};
  font-family: ${fonts.hind};
  font-size: 1.75em;
  font-weight: ${fontWeights.semiBold};
  text-align: center;
  //border: 1px solid black;
  text-transform: uppercase;
`;

export const Instructions = styled.p`
  //text-align: center;
`;

export const Wrapper = styled.section`
  background: ${colors.background};
  font-family: "Hind", sans-serif;
  //border: 1px solid pink;
  //padding: 0.5em;
`;

const ScrabbleContent: React.FC<{}> = (): JSX.Element => (
  <Wrapper>
    <Title>Scrabble</Title>
    <Instructions>Enter a word to find out it's scrabble score.</Instructions>
  </Wrapper>
);

export default ScrabbleContent;
