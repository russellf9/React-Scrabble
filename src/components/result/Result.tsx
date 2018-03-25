import * as React from 'react';

interface ResultProps {
    result: number;
    word: string;
    errorMessage: string;
}

interface ResultState {
    result: number;
    word: string;
    errorMessage: string;
}

const resultString = (props: ResultProps) => {
    return `The word "${props.word}" is worth ${props.result} in Scrabble.`; 
};

const errorString = (props: ResultProps) => {
    return `Error ${props.errorMessage}`;
};

const evaluateResultString = (props: ResultProps) => { 
    return 0 < props.errorMessage.length
        ? errorString(props)
        : resultString(props);
};

const displayResult = (props: ResultProps): boolean => {
    return Boolean(props.errorMessage.length || props.word.length);
};

export default class Result extends React.Component<ResultProps, ResultState> {
    constructor(props: ResultProps) {
        super(props);
    }

    public render() {
        return (
            displayResult(this.props) ? `${evaluateResultString(this.props)}` : ``
        );
    }
}
