import * as React from 'react';
import styled from 'styled-components';
import { colors, fonts, fontWeights } from '../../themes';

export interface ContentProps  {
    search: string;
}

interface ContentState {
    search: string;
}

export const Title = styled.h2`
    color: ${colors.darkBlue};
    font-family: ${fonts.hind};
    font-size: 1.75em;
    font-weight: ${fontWeights.semiBold};
    text-align: center;
    text-transform: uppercase;
`;

const Wrapper = styled.section`
    background: ${colors.background};
    font-family: 'Hind', sans-serif;
    padding: 4em;
`;

export class ScrabbleContent extends React.Component<ContentProps, ContentState> {
    constructor(props: ContentProps) {
        super(props);
    }

    public render() {
        return (
            <Wrapper>
                <Title>Scrabble</Title>
            </Wrapper>
        );
    }
}