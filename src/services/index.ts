export * from './requests';
import { Observable } from 'rxjs';

interface Payload {
    value: string;
}

export enum HTTPMethod {
    GET = 'get',
    POST = 'post',
}

const fetchRequest = (endPoint: string): Observable<Response> => {
    const request = fetch(endPoint)
        .then(response => response.json());
    return Observable.fromPromise(request);
};

export const makeAPIRequest = (
    endPoint: string,
    method?: HTTPMethod,
    data?: Payload): Observable<Response> => {
    return (fetchRequest(endPoint));
};
