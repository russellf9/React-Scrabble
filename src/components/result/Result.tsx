import * as React from 'react';

interface ResultProps {
    result: number;
    word: string;
}

interface ResultState {
    result: number;
    word: string;
}

const resultString = (props: ResultProps) => {
    return `The word ${props.word} is worth ${props.result} in Scrabble.`; 
};

const errorString = (props: ResultProps) => {
    return '';
};

const evaluateResultString = (props: ResultProps) => { 
    return 0 < props.result 
        ? resultString(props)
        : errorString(props);
};

export default class Result extends React.Component<ResultProps, ResultState> {
    constructor(props: ResultProps) {
        super(props);
    }

    public render() {
        return (
             `${evaluateResultString(this.props)}`
        );
    }
}