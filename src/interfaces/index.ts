import { TypeKeys } from "../actions/actionTypes";
import { OnChange, OnReset } from "../actionCreators";

export interface RootState {
  complete: false;
  errorMessage: string;
  isLoading: true;
  lastWord: "";
  onChange: () => OnChange;
  onReset: () => OnReset;
  result: 0;
  resultIsVisible: false;
  search: "";
  submit: () => Submit;
}

export interface ReadyState {
  search: "";
  isLoading: true;
}

export interface SubmitProps {
  complete: boolean;
  errorMessage: string;
  isLoading: boolean;
  lastWord: string;
  onChange: (x: string) => void;
  onReset: Function;
  result: number;
  resultIsVisible: boolean;
  search: string;
  submit: Function;
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
  definition: String;
  errorMessage: string;
  result: number;
  suggestions: Array<String> | null;
  word: string;
}

export interface OnSubmitCompleteAction {
  type: TypeKeys.SUBMIT_COMPLETE;
  payload: WordResult;
}

export type ScrabbleDispatchActions = ReadyAction | SubmitAction;

export type DispatchActions =
  | OnInitAction
  | OnReadyAction
  | OnChangeAction
  | OnSubmitAction
  | OnSubmitCompleteAction
  | ResetFormAction;

export interface SearchFormProps {
  complete: boolean;
  search: string;
  isLoading: boolean;
  onChange: Function;
  requestSearch: Function;
}

export interface FormState {
  search: string;
  complete: boolean;
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
