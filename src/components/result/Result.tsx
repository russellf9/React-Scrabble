import * as React from 'react';

interface ResultProps {
    complete: boolean;
    result: number;
    word: string;
    errorMessage: string;
}

interface ResultState {
    complete: boolean;
    result: number;
    word: string;
    errorMessage: string;
}

const resultString = (props: ResultProps) => {
    return `The word "${props.word}" is worth ${props.result} in Scrabble.`; 
};

const errorString = (props: ResultProps) => {
    return `Error - word "${props.word}"  ${props.errorMessage}`;
};

const hasError = (props: ResultProps): boolean => {
    return props.result < 1;
};

const evaluateResultString = (props: ResultProps) => { 
    return hasError(props)
        ? errorString(props)
        : resultString(props);
};

const displayResult = (props: ResultProps): boolean => {
    return Boolean(props.complete);
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
