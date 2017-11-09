import React from 'react';


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
        this.setState({search: e.target.value})
    }

    search() {

        let url = `http://api.wordnik.com/v4/word.json/${this.state.search}/scrabbleScore?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;

        fetch(url)
            .then(response => {
                return response.json() // the promise
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
        return <div>
            <input type="text"
                   onChange={this.update.bind(this)}
                   />
            <p> {this.state.search }</p>
            <button onClick={this.search.bind(this)}>Check</button>
            <p>Result: {this.state.result}</p>
            {
                this.state.errorMessage
                ? <p>Error: {this.state.errorMessage}</p>
                : ''
            }
        </div>
    }

}

export default App;
