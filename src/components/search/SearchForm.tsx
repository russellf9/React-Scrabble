import * as React from 'react';

import { SearchFormProps, FormState } from '../../container';

export default class SearchForm extends React.Component<SearchFormProps, FormState> {
    constructor(props: SearchFormProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <input
                    style={{marginLeft: 10, marginRight: 20}}
                    value={this.props.search}
                    onChange={e => this.props.onChange(e)}
                />
                <button
                    disabled={this.props.isLoading}
                    style={{marginLeft: 20, marginRight: 10}}
                    value="Search"
                    onClick={e => this.props.requestSearch(this.props.search)}
                >
                    Search
                </button>
            </div>
        );
    }
}