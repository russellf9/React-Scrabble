import * as React from "react";
import styled from "styled-components";
import { colors, fonts, fontWeights } from "../../themes";

// TODO should this be elsewhere?
interface ResultProps {
  complete: boolean;
  isLoading: boolean;
  result: number;
  word: string;
  color?: string;
  errorMessage: string;
}

const Loading = styled.h2`
  font-family: ${fonts.hind};
  font-size: 1.25em;
  font-weight: ${fontWeights.semiBold};
  text-transform: uppercase;
`;

const Title = styled.h2`
  color: ${(props: ResultProps) => props.color};
  font-family: ${fonts.hind};
  font-size: 1.25em;
  font-weight: ${fontWeights.semiBold};
  text-align: center;
`;

const wordResult = (word: string, result: number) => {
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
    : wordResult(word, result);
};

const getTitleColor = (result: number): string => {
  return result < 1 ? `${colors.red}` : `${colors.green}`;
};

const Result: React.FC<ResultProps> = ({
  complete,
  errorMessage,
  isLoading,
  result,
  word,
}): JSX.Element => {
  const resultString = evaluateResultString(result, word, errorMessage);
  const titleColor = getTitleColor(result);
  return (
    <>
      <Title color={titleColor}>{complete && resultString}</Title>
      {isLoading && <Loading>loading...</Loading>}
    </>
  );
};

export default Result;
