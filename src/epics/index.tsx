import { Action, MiddlewareAPI } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import { TypeKeys } from '../actions/actionTypes';
import { ReadyState, RootState, SubmitWordForm } from '../interfaces';
import { evaluateResponse, getResult } from '../dictionary';

export const initEpic = (
    action: ActionsObservable<Action>,
    store: MiddlewareAPI<ReadyState>): Observable<Action> => action
        .ofType(TypeKeys.ON_INIT)
        .flatMap(() => {
            return Observable.of({ type: TypeKeys.ON_READY });
        });

export const readyEpic = (
    action: ActionsObservable<Action>,
    store: MiddlewareAPI<ReadyState>): Observable<Action> => action
        .ofType(TypeKeys.ON_READY)
        .flatMap(() => {
            return Observable.of({ type: TypeKeys.RESET_FORM });
        });

export const changeEpic = (
    action: ActionsObservable<Action>,
    store: MiddlewareAPI<ReadyState>): Observable<Action> => action
        .ofType(TypeKeys.ON_CHANGE);

export const submitEpic = (
    action: ActionsObservable<Action>,
    store: MiddlewareAPI<RootState>): Observable<Action> => action
        .ofType(TypeKeys.ON_SUBMIT)
        .flatMap(() => {
            return getResult(store.getState().search)
                .flatMap((res: Object): Observable<SubmitWordForm> =>
                    Observable.of<SubmitWordForm>({
                        type: TypeKeys.SUBMIT_COMPLETE,
                        payload: evaluateResponse(res, store.getState().search)
                    }));
        });
