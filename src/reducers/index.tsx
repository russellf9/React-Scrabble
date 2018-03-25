import * as types from '../constants/actionTypes';

const { freeze } = Object;

export interface ChangeAction {
  type: 'change';
  name: string;
  value: string;
}

export type Action
  = ChangeAction;

interface ScrabbleState {
  result: number;
  lastWord: string;
  search: string;
  errorMessage: string;
}

const initialState = freeze({
  search: 'word',
  result: 0,
  lastWord: '',
  errorMessage: '',
  placeholder: ''
});

export default function (state: ScrabbleState = initialState, action: Action) {

  let nextState;

  switch (action.type) {

    case types.CHANGE:

      nextState = {
        ...state,
        search: action.value,
      };
      break;

    case types.SEARCH:

      nextState = {
        ...state,
        isLoading: true,
        search: action.value,
      };
      break;

    case types.SEARCH_COMPLETE:
      nextState = {
        ...state,
        result: Number(action.value),
        isLoading: false,
        lastWord: state.search,
        search: '',
        errorMessage: '',
      };
      break;

      case types.ON_ERROR:
      nextState = {
        ...state,
        result: 0,
        isLoading: false,
        search: '',
        errorMessage: action.value
      };
      break;

    case types.RESET:
      nextState = {
        ...state,
        search: '',
        lastWord: '',
        errorMessage: '',
      };
      break;

    default:
      nextState = state;
      break;
  }

  return nextState;
}