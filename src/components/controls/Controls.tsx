import * as React from 'react';

interface ControlsProps  {
    clearSearch: Function;
    isLoading: boolean;
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
                    disabled={this.props.isLoading}
                    onClick={e => this.props.clearSearch()}
                    style={{marginLeft: 10}}
                    value="Clear"
                >
                    Clear
                </button>
            </div>
        );
    }
}