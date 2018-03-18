import * as React from 'react';

interface ContentProps  {
    search: string;
}

interface ScrabbleState {
    search: string;
}

export default class ScrabbleContent extends React.Component<ContentProps, ScrabbleState> {
    constructor(props: ContentProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <h2>Scrabble</h2>
            </div>
        );
    }
}