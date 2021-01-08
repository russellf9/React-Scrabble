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

export const Wrapper = styled.section`
  background: ${colors.background};
  font-family: "Hind", sans-serif;
  //border: 1px solid black;
  padding: 4em;
`;

const ScrabbleContent: React.FC<{}> = (): JSX.Element => (
  <Wrapper>
    <Title>Scrabble</Title>
  </Wrapper>
);

export default ScrabbleContent;
