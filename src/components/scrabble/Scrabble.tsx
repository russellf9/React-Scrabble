import * as React from 'react';
import { connect } from 'react-redux';
import ScrabbleContent from '../content/ScrabbleContent';
import SearchForm from '../search/SearchForm';
import Result from '../result/Result';
import Controls from '../controls/Controls';
import { ChangeEvent, SubmitProps } from '../../interfaces';
import { mapDispatchToProps, mapStateToProps } from '../../container';

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

    return (
        <div>
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
            <div style={{ margin: 20, padding: 20}}>
            <Result
                complete={props.complete}
                word={props.lastWord}
                result={props.result}
                errorMessage={props.errorMessage}
            />
            </div>
             <div style={{ margin: 20, padding: 20}}>
                    <Controls
                        clearSearch={clearSearch}
                        isLoading={props.isLoading}
                    />
            </div>
        </div>
    );
};

export const Scrabble = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UnconnectedScrabble);
