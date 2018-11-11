import * as React from 'react';
import { connect } from 'react-redux';
import ScrabbleContent from '../content/ScrabbleContent';
import SearchForm from '../search/SearchForm';
import Result from '../result/Result';
import Controls from '../controls/Controls';
import { ChangeEvent, SubmitProps } from '../../interfaces';
import { mapDispatchToProps, mapStateToProps } from '../../container';
import styled from 'styled-components';
import { colors } from '../../themes';

const UnconnectedScrabble = (props: SubmitProps): React.ReactElement<SubmitProps> => {

    const handleChange = (event: ChangeEvent): void => {
        props.onChange(event.target.value);
    };

    const requestSearch = (searchItem: string): void => {
        props.submit(searchItem);
    };

    const clearSearch = (): void => {
        props.onChange('');
    };

    const Wrapper = styled.section`
        background: ${colors.background};
        padding-bottom: 3em;
        padding-top: 0.5em;
    `;

    return (
        <Wrapper>
            <ScrabbleContent
                search={props.search}
            />
            <SearchForm
                complete={props.complete}
                search={props.search}
                onChange={handleChange}
                requestSearch={requestSearch}
                isLoading={props.isLoading}
            />
            <Result
                complete={props.complete}
                word={props.lastWord}
                result={props.result}
                errorMessage={props.errorMessage}
            />
            <Controls
                clearSearch={clearSearch}
                isLoading={props.isLoading}
            />
        </Wrapper>
    );
};

export const Scrabble = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UnconnectedScrabble);
