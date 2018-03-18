import * as React from 'react';

interface ControlsProps  {
    clearSearch: Function;
}

interface ScrabbleState {
    search: string;
}

export default class Controls extends React.Component<ControlsProps, ScrabbleState> {
    constructor(props: ControlsProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <button
                    style={{marginLeft: 10}}
                    value="Clear"
                    onClick={e => this.props.clearSearch()}
                >
                    Clear
                </button>
            </div>
        );
    }
}