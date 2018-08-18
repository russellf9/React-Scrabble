import { TypeKeys } from '../actions/actionTypes';

export interface RootState {
    search: '';
    isLoading: true;
    submit: () => Submit;
    onChange: () => OnChange;
}

export interface ReadyState {
    search: '';
    isLoading: true;
}

export interface Word {
    word: string;
}

export interface OnChange {
    type: TypeKeys.ON_CHANGE;
    word: Word;
}

export interface SubmitProps {
    search: string;
    isLoading: boolean;
    submit: Function;
    onChange: Function;
}
export interface Submit {
    type: TypeKeys.ON_SUBMIT;
}
export interface Ready {
    type: TypeKeys.ON_READY;
}

export interface ReadyAction {
    ready: () => Ready;
}

export interface SubmitAction {
    submit: () => Submit;
}

export interface OnInitAction {
    type: TypeKeys.ON_INIT;
}

export interface OnReadyAction {
    type: TypeKeys.ON_READY;
}

export interface OnChangeAction {
    type: TypeKeys.ON_CHANGE;
    payload: string;
}

export interface OnSubmitAction {
    type: TypeKeys.ON_SUBMIT;
}

export interface ResetFormAction {
    type: TypeKeys.RESET_FORM;
}

export interface WordResult {
    errorMessage: string;
    result: number;
    word: string;
}

export interface OnSubmitCompleteAction {
    type: TypeKeys.SUBMIT_COMPLETE;
    payload: WordResult;
}

export type ScrabbleDispatchActions = ReadyAction
    | SubmitAction;

export type DispatchActions = OnInitAction
    | OnReadyAction
    | OnChangeAction
    | OnSubmitAction
    | OnSubmitCompleteAction
    | ResetFormAction;

export interface SearchFormProps {
    search: string;
    isLoading: boolean;
    onChange: Function;
    requestSearch: Function;
} 

export interface FormState {
    search: string;
}

export interface ChangeEvent {
    target: { value: string };
    type: string;
    bubbles: boolean;
    cancelable: boolean;
}

export interface SubmitWordForm {
    type: TypeKeys.SUBMIT_COMPLETE;
    payload: WordResult;
}
