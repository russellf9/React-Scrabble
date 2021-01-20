import { Action, Dispatch } from "redux";
import { TypeKeys } from "./actions/actionTypes";
import {
  RootState,
  //  OnReset, // TODO see if there are dulicates of the Interfaces?
  ScrabbleDispatchActions,
  Submit,
  OnChangeAction,
  SubmitProps,
} from "./interfaces";
import { OnReset } from "./actionCreators";
const { freeze } = Object;

export const mapStateToProps = (state: RootState): SubmitProps => {
  return state;
};

export const mapDispatchToProps = (
  dispatch: Dispatch<Action>
): ScrabbleDispatchActions => {
  return freeze({
    onChange: (payload: string) =>
      dispatch<OnChangeAction>({ type: TypeKeys.ON_CHANGE, payload }),
    submit: () => dispatch<Submit>({ type: TypeKeys.ON_SUBMIT }),
    onReset: () => dispatch<OnReset>({ type: TypeKeys.RESET_FORM }),
  });
};
