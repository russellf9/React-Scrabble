import * as React from 'react';
import styled from 'styled-components';
import { colors, fonts, fontWeights } from '../../themes';

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
const getTitleColor = (props: ResultProps): string => {
    return hasError(props) ? `${colors.red}` : `${colors.green}`;
};

const Title = styled.h2`
    color: ${props => props.color};
    font-family: ${fonts.hind};
    font-size: 1.25em;
    font-weight: ${fontWeights.semiBold};
    text-align: center;
`;

const Wrapper = styled.section`
    background:  ${colors.background};
    padding: 1em;
`;

export default class Result extends React.Component<ResultProps, ResultState> {
    constructor(props: ResultProps) {
        super(props);
    }

    public render() {
        return (
            <Wrapper>
                <Title color={getTitleColor(this.props)}>
                 {displayResult(this.props) ? `${evaluateResultString(this.props)}` : ``}
                </Title>
            </Wrapper>
        );
    }
}
