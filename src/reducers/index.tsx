import { TypeKeys } from '../actions/actionTypes';
import { DispatchActions } from '../interfaces';

const { freeze } = Object;

interface ScrabbleState {
  errorMessage: string;
  lastWord: string;
  result: number;
  search: string;
  complete: string;
}

const initialState = freeze({
  complete: '',
  errorMessage: '',
  isLoading: true,
  lastWord: '',
  placeholder: '',
  result: 0,
  search: 'word',
});

export default function (state: ScrabbleState = initialState, action: DispatchActions) {

  let nextState;

  switch (action.type) {

    case TypeKeys.ON_READY:
    nextState = {
      ...state,
      isLoading: false
    };
    break;

    case TypeKeys.RESET_FORM:
    nextState = {
      ...state,
      search: ''
    };
    break;

    case TypeKeys.ON_CHANGE :
    nextState = {
      ...state,
      search: action.payload
    };
    break;

    case TypeKeys.ON_SUBMIT:
    nextState = {
      ...state,
    };
    break;

    case TypeKeys.SUBMIT_COMPLETE:
    nextState = {
      ...state,
      errorMessage: action.payload.errorMessage,
      lastWord: action.payload.word,
      result: action.payload.result,
    };
    break;

    default:
      nextState = state;
      break;
  }

  return nextState;
}