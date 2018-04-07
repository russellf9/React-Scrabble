import { MiddlewareAPI } from 'redux';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import { Action, State } from '../container';
import { search } from '../services';
 
export const submitEpic = (action: Observable<Action>, store: MiddlewareAPI<State>): Observable<Action> => {
    return action
    .filter((x) => x.type === 'submit')
    .flatMap(
        () => search(store.getState().search) 
    );
};
