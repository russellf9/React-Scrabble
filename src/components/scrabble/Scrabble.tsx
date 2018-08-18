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
                    search={props.search}
                    onChange={handleChange}
                    requestSearch={requestSearch}
                    isLoading={props.isLoading}
            />
            <div style={{ margin: 20, padding: 20}}>
            <Result
                word={'lastWord'}
                result={99}
                errorMessage={'errorMessage'}
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
