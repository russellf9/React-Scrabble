import React from 'react';
import { Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';


class App extends React.Component {


    constructor() {
        super();
        this.state = {
            search: '',
            result: '',
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
                    errorMessage: data.type ? data.message : ''})
            })
            .catch(error => {
                this.setState({result: 0, errorMessage: error})});
    }

    render() {
        return <Container style={{marginTop: '7em'}}>
            <div className="ui grid">
                <div className="sixteen wide column">
                    <div className="ui text container">
                        <h2 className="ui header">Scrabble Word Score</h2>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="ui text container">
                        <div className="ui loading icon input">
                            <input type="text"
                                   onChange={this.update.bind(this)}
                                   tabIndex="0"
                                   placeholder="enter word..."
                                   autoComplete="off"/>
                        </div>
                    </div>
                </div>

                <div className="four wide column">
                    <div className="ui text container">
                        <Button onClick={this.search.bind(this)}>Check Word Score</Button>
                    </div>
                </div>

                <div className="eight wide column"></div>

                <div className="eight wide column">
                    {
                        this.state.result && this.state.search
                            ? ( <div className="results transition">
                            <div className="message">
                                <div className="header">{this.state.search} is worth {this.state.result } points in Scrabble</div>
                            </div>
                        </div>)
                            : ''

                    }

                    {
                        this.state.errorMessage && this.state.search
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

export default App;
