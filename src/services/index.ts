export * from './requests';
import { Observable } from 'rxjs';

interface Payload {
    value: string;
}

export enum HTTPMethod {
    GET = 'get',
    POST = 'post',
}

const fetchRequest = (endPoint: string, data?: Object, method?: String): Observable<String> => {
    const request = fetch(endPoint, {
        method: 'POST'
    })
        .then(response => response.text());
    return Observable.fromPromise(request);
};

export const makeAPIRequest = (
    endPoint: string,
    method?: HTTPMethod,
    data?: Payload): Observable<String> => {

    switch (method) {
        case HTTPMethod.POST:
        case HTTPMethod.GET:
            return fetchRequest(endPoint);
        default:
            return (fetchRequest(endPoint));
    }

};
