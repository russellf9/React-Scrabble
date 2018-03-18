import * as React from 'react';
import SearchForm from '../search/SearchForm';
import ScrabbleContent from '../content/ScrabbleContent';
import Result from '../result/Result';
import Controls from '../controls/Controls';

interface DefaultProps  {
    search: string;
    result: number;
    lastWord: string;
    errorMessage: string;
    placeholder: string;
}

interface ScrabbleState {
    result: number;
    lastWord: string;
    search: string;
    errorMessage: string;
}

interface ChangeEvent {
    target: { value: string };
    type: string;
    bubbles: Boolean;
    cancelable: Boolean;
}

export default class Scrabble extends React.Component<DefaultProps, ScrabbleState> {
    constructor(props: DefaultProps) {
        super(props);
        this.state = { search: this.props.placeholder, result: 0, lastWord: '', errorMessage: '' } ;
        this.handleChange = this.handleChange.bind(this);
        this.requestSearch = this.requestSearch.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }

    public handleChange(event: ChangeEvent): void {
       this.setState({ search: event.target.value });
    }
    
    public requestSearch(searchItem: string): void {
        this._search();
    }
  
    public clearSearch(): void {
        this.setState({ search: '', result: 0 });
    }

    _search() {
        const WORDNIK_API = 'http://api.wordnik.com/v4/word.json/';
        const KEY = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
        let url = `${WORDNIK_API}${this.state.search}/scrabbleScore?api_key=${KEY}`;

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    result: data.value ? data.value : 0,
                    lastWord: this.state.search,
                    errorMessage: data.type ? data.message : ''
                });
            })
            .catch(error => {
                this.setState({ result: 0, errorMessage: error });
            });
    }

    public render() {
        return (
            <div style={{ width: 500, marginLeft: 'auto', marginRight: 'auto', border: 'solid', borderWidth: 1}}>
                <ScrabbleContent
                    search={this.state.search}
                />
                <div>
                <SearchForm
                    search={this.state.search}
                    handleChange={this.handleChange}
                    requestSearch={this.requestSearch}
                />
                </div>
                <div style={{ margin: 20, padding: 20}}>
                <Result
                    word={this.state.lastWord}
                    result={this.state.result}
                />
                </div>
                <div style={{ margin: 20, padding: 20}}>
                    <Controls
                        clearSearch={this.clearSearch}
                    />
                </div>
            </div>
        );
    }
}