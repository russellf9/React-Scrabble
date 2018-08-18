import { Action, MiddlewareAPI } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import { TypeKeys } from '../actions/actionTypes';
import { ReadyState, RootState, SubmitWordForm, WordResult } from '../interfaces';
import { makeAPIRequest, HTTPMethod } from '../services';

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

const WORDNIK_API = 'http://api.wordnik.com/v4/word.json/';
const KEY = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
   
export const makeWordRequest = (searchItem: string): Observable<Response> => {
    const url = `${WORDNIK_API}${searchItem}/scrabbleScore?api_key=${KEY}`;
    return makeAPIRequest(url, HTTPMethod.POST);
};

const getNumberRandomNumder = () => Math.floor(Math.random() * 6) + 1;

const randomResult = (word: string): WordResult =>  {
    var obj = {
        result: getNumberRandomNumder(),
        word: word,
        errorMessage: ''
    }; 
    return obj;
};

export const submitEpic = (
    action: ActionsObservable<Action>,
    store: MiddlewareAPI<RootState>): Observable<Action> => action
    .ofType(TypeKeys.ON_SUBMIT)
    .flatMap(() => {
    return makeWordRequest(store.getState().search)
        .flatMap((res: Object): Observable<SubmitWordForm> => 
        Observable.of<SubmitWordForm>({ type: TypeKeys.SUBMIT_COMPLETE, 
            payload: randomResult(store.getState().search) }));
    });
