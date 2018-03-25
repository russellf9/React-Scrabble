import * as React from 'react';
import { connect } from 'react-redux';
import ScrabbleContent from '../content/ScrabbleContent';
import SearchForm from '../search/SearchForm';
import Result from '../result/Result';
import Controls from '../controls/Controls';
import { search } from '../../actions';
import { DefaultProps, ChangeEvent, mapDispatchToProps, mapStateToProps } from '../../container';

const UnconnectedScrabble = (props: DefaultProps): React.ReactElement<DefaultProps> => {

    const handleChange = (event: ChangeEvent): void => {
        props.onChange(event.target.value);
   };

    const submitUpdate = (value: string): void => {
        props.searchComplete(value);
    };

    const submitError = (message: string): void => {
        props.onError(message);
    };

    const requestSearch = (searchItem: string): void => {
        props.onSubmit(searchItem);

        search(props.search)
            .then(result => {
                result.type === 'error'
                    ? submitError(result.message)
                    : submitUpdate(String(result.value));
            });
    };

    const clearSearch = (): void => {
        props.onClear();
    };

    return (
        <div>
            <ScrabbleContent 
                search={props.search} 
            />
            <SearchForm
                    search={props.search}
                    onChange={handleChange}
                    requestSearch={requestSearch}
                    isLoading={props.isLoading}
            />
            <div style={{ margin: 20, padding: 20}}>
            <Result
                word={props.lastWord}
                result={props.result}
                errorMessage={props.errorMessage}
            />
            </div>
             <div style={{ margin: 20, padding: 20}}>
                    <Controls
                        clearSearch={clearSearch}
                    />
            </div>
        </div>
    );
};

export const Scrabble = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UnconnectedScrabble);
