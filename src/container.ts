import { Action } from 'redux';
import { Dispatch } from 'react-redux';
import { TypeKeys } from './actions/actionTypes';
import { RootState, ScrabbleDispatchActions, Submit, OnChangeAction, SubmitProps } from './interfaces';
const { freeze } = Object;

export const mapStateToProps = ( state: RootState ): SubmitProps => { 
    return state; 
};

export const mapDispatchToProps = (dispatch: Dispatch<Action>): ScrabbleDispatchActions => {
    return freeze({
        onChange: (payload: string) => 
            dispatch<OnChangeAction>({ type: TypeKeys.ON_CHANGE, payload }),
        submit: () =>
            dispatch<Submit>({ type: TypeKeys.ON_SUBMIT }),
    });
};
