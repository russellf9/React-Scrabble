import * as React from "react";
import styled from "styled-components";
import { SearchFormProps, FormState } from "../../interfaces";
import { colors } from "../../themes";
import { Button } from "../shared";

const Wrapper = styled.section`
  align-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

type Props = SearchFormProps & FormState;

const SearchForm: React.FC<Props> = ({
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
          disabled={isLoading || !search.length || complete}
          value="Search"
          onClick={() => requestSearch(search)}
        >
          Search
        </Button>
      </SearchRow>
    </Wrapper>
  );
};

export default SearchForm;
