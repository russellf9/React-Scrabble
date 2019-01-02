import * as React from 'react';
import { Button } from '../shared';

export interface ControlsProps  {
    clearSearch: Function;
    isLoading: boolean;
}

interface ScrabbleState {
    search: string;
}

export class Controls extends React.Component<ControlsProps, ScrabbleState> {
    constructor(props: ControlsProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Button
                    disabled={this.props.isLoading}
                    onClick={e => this.props.clearSearch()}
                    style={{marginLeft: 10}}
                    value="Clear"
                >
                    Clear
                </Button>
            </div>
        );
    }
}