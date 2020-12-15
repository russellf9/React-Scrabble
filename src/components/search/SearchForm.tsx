import * as React from "react";
import styled from "styled-components";
import { SearchFormProps, FormState } from "../../interfaces";
import { colors, fonts, fontWeights } from "../../themes";
import { Button } from "../shared";

const Wrapper = styled.section`
  align-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 150px;
`;

const SearchRow = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 75px;
`;

const Input = styled.input`
    background: white;
    border-radius: 4px;
    border: 1px solid ${colors.lightGrey};
    font-size: 14px;
    margin: 0.5em 1em;
    padding 0.5em 1em;
`;

const Loading = styled.p`
  font-family: ${fonts.hind};
  font-size: 18px;
  font-weight: ${fontWeights.semiBold};
  text-transform: uppercase;
`;

type Props = SearchFormProps & FormState;

export const SearchForm: React.FC<Props> = ({
  complete,
  isLoading,
  onChange,
  requestSearch,
  search,
}): JSX.Element => {
  const updateSearch = (e: React.ChangeEvent) => {
    e.preventDefault();
    onChange(e);
  };
  const isDisabled = isLoading || !search.length || complete;
  return (
    <Wrapper>
      <SearchRow>
        <Input
          key="searchInput"
          type="text"
          value={search}
          onChange={(e) => updateSearch(e)}
        />
        <Button
          disabled={isDisabled}
          value="Search"
          onClick={() => requestSearch(search)}
        >
          Search
        </Button>
      </SearchRow>
      <SearchRow>{isLoading && <Loading>Loading...</Loading>}</SearchRow>
    </Wrapper>
  );
};

export default SearchForm;
