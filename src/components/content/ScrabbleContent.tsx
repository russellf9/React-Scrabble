import * as React from "react";
import styled from "styled-components";
import { colors, fonts, fontWeights } from "../../themes";

export const Wrapper = styled.section`
  background: ${colors.background};
  font-family: "Hind", sans-serif;
`;

export const Title = styled.h2`
  color: ${colors.darkBlue};
  font-family: ${fonts.hind};
  font-size: 1.75em;
  font-weight: ${fontWeights.semiBold};
  text-align: center;
  text-transform: uppercase;
`;

const ScrabbleContent: React.FC<{}> = (): JSX.Element => (
  <Wrapper>
    <Title>Scrabble</Title>
    <p>Enter a word to find out it's Scrabble score.</p>
  </Wrapper>
);

export default ScrabbleContent;
