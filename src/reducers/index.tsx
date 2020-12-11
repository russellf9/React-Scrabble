import { TypeKeys } from "../actions/actionTypes";
import { DispatchActions } from "../interfaces";
import { AppProps } from "../App";

const { freeze } = Object;

const initialState = freeze({
  complete: false,
  errorMessage: "",
  isLoading: true,
  lastWord: "",
  placeholder: "",
  result: 0,
  search: "word",
});

export default function(
  state: AppProps = initialState,
  action: DispatchActions
) {
  let nextState;

  switch (action.type) {
    case TypeKeys.ON_READY:
      nextState = {
        ...state,
        isLoading: false,
      };
      break;

    case TypeKeys.RESET_FORM:
      nextState = {
        ...state,
        complete: false,
        search: "",
      };
      break;

    case TypeKeys.ON_CHANGE:
      nextState = {
        ...state,
        complete: false,
        search: action.payload,
      };
      break;

    case TypeKeys.ON_SUBMIT:
      nextState = {
        ...state,
        complete: false,
        isLoading: true,
      };
      break;

    case TypeKeys.SUBMIT_COMPLETE:
      nextState = {
        ...state,
        complete: true,
        definition: action.payload.definition,
        errorMessage: action.payload.errorMessage,
        isLoading: false,
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
