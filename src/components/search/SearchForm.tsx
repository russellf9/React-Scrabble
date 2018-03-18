import * as React from 'react';

interface SearchFormProps  {
    search: string;
    handleChange: Function;
    requestSearch: Function;
}

interface FormState {
    search: string;
}

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
                    onChange={e => this.props.handleChange(e)}
                />
                <button
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