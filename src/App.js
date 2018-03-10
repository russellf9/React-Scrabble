import React from 'react';
import {Container} from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';


class App extends React.Component {


    constructor() {
        super();
        this.state = {
            search: '',
            lastWord: '',
            result: '', // the scrabble value of the word
            errorMessage: ''
        }
    }

    update(e) {
        this.setState({search: e.target.value.toLowerCase()})
    }

    search() {
        let url = `http://api.wordnik.com/v4/word.json/${this.state.search}/scrabbleScore?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;

        fetch(url)
            .then(response => {
                return response.json(); // the promise
            })
            .then(data => {
                this.setState({
                    result: data.value ? data.value : 0,
                    lastWord: this.state.search,
                    errorMessage: data.type ? data.message : ''
                })
            })
            .catch(error => {
                this.setState({result: 0, errorMessage: error})
            });
    }

    clear() {
        this.setState({
            search: '',
            result: '',
            errorMessage: ''
        })
    }

    render() {
        return <Container style={{marginTop: '7em'}}>
            <div className="ui grid">
                <div className="sixteen wide column">
                    <ScrabbleHeader />
                </div>
                {/* SEARCH INPUT */}
                <div className="four wide column">
                    <div className="ui text container">
                        <div className="ui loading icon input">
                            <input type="text"
                                   value={this.state.search}
                                   onChange={this.update.bind(this)}
                                   tabIndex="0"
                                   placeholder="enter word..."
                                   autoComplete="off"/>
                        </div>
                    </div>
                </div>
                <WordSearch
                    search={this.state.search}
                    onChange={this.update.bind(this)}/>

                <div className="four wide column">
                    <SearchButton
                        search={this.state.search}
                        onClick={this.search.bind(this)}/>
                </div>

                <div className="four wide column">
                    <ClearButton
                        search={this.state.search}
                        onClick={this.clear.bind(this)}/>
                </div>

                <div className="eight wide column"></div>

                <div className="sixteen wide column">
                    {/* RESULT TEXT */}
                    {
                        this.state.result && this.state.search && (this.state.search === this.state.lastWord)
                            ? ( <div className="results transition">
                            <div className="message">
                                <div className="header">The word <strong>{this.state.search}</strong> is
                                    worth {this.state.result } points in Scrabble
                                </div>
                            </div>
                        </div>)
                            : ''

                    }
                    {/* ERROR TEXT */}
                    {
                        this.state.errorMessage && this.state.search && (this.state.search === this.state.lastWord)
                            ? (  <div className="results transition">
                            <div className="message error">
                                <div className="header">Error: {this.state.errorMessage}</div>
                            </div>
                        </div>)
                            : ''
                    }
                </div>
            </div>
        </Container>
    }
}

const ScrabbleHeader = () =>
    <div className="ui text container">
        <h2 className="ui header">Scrabble Word Score</h2>
    </div>;

class WordSearch extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.changeHandler.bind(this)
    }

    changeHandler(e){
        console.log(e)
        this.props.onChange(e.target.value)

    }


    render() {
        return (
            <div className="four wide column">
                <div className="ui text container">
                    <div className="ui loading icon input">
                        <input type="text"
                               value={this.props.value}
                               onChange={this.changeHandler}
                               tabIndex="0"
                               placeholder="enter word..."
                               autoComplete="off"/>
                    </div>
                </div>
            </div>
        )
    }
}
/*
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}*/


class ClearButton extends React.Component {
    render() {
        return (
            <div className="ui text container">
                <Button
                    disabled={!this.props.search}
                    onClick={this.props.onClick}>Clear</Button>
            </div>
        )
    }
}

class SearchButton extends React.Component {
    render() {
        return (
            <div className="ui text container">
                <Button
                    disabled={!this.props.search || this.props.search === this.props.lastWord}
                    onClick={this.props.onClick}>Check Word Score</Button>
            </div>
        )
    }
}


export default App;
