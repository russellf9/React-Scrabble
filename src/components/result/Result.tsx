import * as React from "react";
import styled from "styled-components";
import { colors, fonts, fontWeights } from "../../themes";

interface ResultProps {
  complete: boolean;
  result: number;
  word: string;
  color?: string;
  errorMessage: string;
}

const Title = styled.h2`
  color: ${(props: ResultProps) => props.color};
  font-family: ${fonts.hind};
  font-size: 1.25em;
  font-weight: ${fontWeights.semiBold};
  text-align: center;
`;

const Wrapper = styled.section`
  background: ${colors.background};
  padding: 1em;
`;

const resultString = (word: string, result: number) => {
  return `The word "${word}" is worth ${result} in Scrabble.`;
};

const errorString = (word: string, errorMessage: string) => {
  return `error - word "${word}"  ${errorMessage}`;
};

const evaluateResultString = (
  result: number,
  word: string,
  errorMessage: string
) => {
  return result < 1
    ? errorString(word, errorMessage)
    : resultString(word, result);
};

const getTitleColor = (result: number): string => {
  return result < 1 ? `${colors.red}` : `${colors.green}`;
};

const Result: React.FC<ResultProps> = ({
  complete,
  errorMessage,
  result,
  word,
}): JSX.Element => {
  const resultString = evaluateResultString(result, word, errorMessage);
  return (
    <Wrapper>
      <Title color={getTitleColor(result)}>{complete && resultString}</Title>
    </Wrapper>
  );
};

export default Result;
