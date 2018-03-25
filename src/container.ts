import { Dispatch } from 'react-redux';
import { CHANGE, SEARCH, SEARCH_COMPLETE, ON_ERROR, RESET } from './constants/actionTypes';

export interface State {
    search: string;
    result: number;
    lastWord: string;
    isLoading: boolean;
    errorMessage: string;
    placeholder: string;
}

export interface SearchFormProps {
    search: string;
    isLoading: boolean;
    onChange: Function;
    requestSearch: Function;
}

export interface FormState {
    search: string;
}

export interface DefaultProps {
    search: string;
    result: number;
    lastWord: string;
    errorMessage: string;
    placeholder: string;
    isLoading: boolean;
    onSubmit: Function;
    searchComplete: Function;
    onError: Function;
    onChange: Function;
    onClear: Function;
}
export type Action
    = ChangeAction
    | SubmitAction
    | ClearAction;

export interface ChangeEvent {
    target: { value: string };
    type: string;
    bubbles: boolean;
    cancelable: boolean;
}

export interface ChangeAction {
    type: 'change';
    name: string;
    value: string;
}

export interface SubmitAction {
    type: 'submit';
}

export interface ClearAction {
    type: 'clear';
}

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({

    onChange: (value: string) => dispatch({
        type: CHANGE,
        value,
    }),

    onSubmit: (value: string) => {
        dispatch({ 
            type: SEARCH,
            value
        }); 
    },

    searchComplete: (value: number) => {
        dispatch({
            type: SEARCH_COMPLETE,
            value
        });
    },

    onError: (value: string) => {
        dispatch({
            type: ON_ERROR,
            value
        });
    },
 
    onClear: () => {
        dispatch({
            type: RESET
        });
    }

});

export const mapStateToProps = ( state: State) => { 
    return state; 
};
