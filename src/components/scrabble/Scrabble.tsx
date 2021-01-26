import * as React from "react";
import { connect } from "react-redux";
import ScrabbleContent from "../content/ScrabbleContent";
import SearchForm from "../search/SearchForm";
import Result from "../result/Result";
import { Controls } from "../controls/Controls";
import { Card } from "../shared/Card";
import { ChangeEvent, SubmitProps } from "../../interfaces";
import { mapDispatchToProps, mapStateToProps } from "../../container";
import styled from "styled-components";
import { colors } from "../../themes";

const Wrapper = styled.section`
  align-items: center;
  background: ${colors.background};
  display: flex;
  justify-content: center;
  min-height: 80vh;
`;

const ResultsWrapper = styled.section`
  display: block;
  background: ${colors.background};
  padding: 1em;
  height: 32px;
`;

export const UnconnectedScrabble = (
  props: SubmitProps
): React.ReactElement<SubmitProps> => {
  const handleChange = (event: ChangeEvent): void => {
    props.onChange(event.target.value);
  };

  const requestSearch = (searchItem: string): void => {
    props.submit(searchItem);
  };

  const clearSearch = (): void => {
    props.onReset();
  };

  return (
    <Wrapper>
      <Card>
        <ScrabbleContent />
        <SearchForm
          complete={props.complete}
          search={props.search}
          onChange={handleChange}
          requestSearch={requestSearch}
          isLoading={props.isLoading}
        />
        <ResultsWrapper>
          {props.resultIsVisible && (
            <Result
              complete={props.complete}
              word={props.lastWord}
              result={props.result}
              isLoading={props.isLoading}
              errorMessage={props.errorMessage}
            />
          )}
        </ResultsWrapper>
        <Controls clearSearch={clearSearch} isLoading={props.isLoading} />
      </Card>
    </Wrapper>
  );
};

export const Scrabble = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedScrabble);
