import * as React from 'react';
import styled from 'styled-components';
import { SearchFormProps, FormState } from '../../interfaces';
import { colors, fonts, fontWeights } from '../../themes';
import { Button, } from '../shared';

const Wrapper = styled.section`
    align-content: flex-start;;
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
    jflex-direction: row;
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

export default class SearchForm extends React.Component<SearchFormProps, FormState> {
    constructor(props: SearchFormProps) {
        super(props);
    }
    updateSearch = (e: React.ChangeEvent) => {
        e.preventDefault();
        this.props.onChange(e);
    }

    public render() {
        return (
            <Wrapper>
                <SearchRow>
                    <Input
                        key="searchInput"
                        type="text"
                        value={this.props.search}
                        onChange={e => this.updateSearch(e)}
                    />
                    <Button
                        disabled={this.props.isLoading || !this.props.search.length || this.props.complete}
                        value="Search"
                        onClick={e => this.props.requestSearch(this.props.search)}
                    >
                        Search
                    </Button>
                </SearchRow>

                <SearchRow>
                {this.props.isLoading
                    ? <div>
                        <Loading>loading...</Loading>
                    </div>
                    : undefined
                }
                </SearchRow>
            </Wrapper>
        );
    }
}
