export * from './requests';
import { Observable } from 'rxjs';

interface Payload {
    value: string;
}

export enum HTTPMethod {
    GET = 'get',
    POST = 'post',
}

const fetchRequest = (endPoint: string, method?: string, data?: Object): Observable<string> => {
    const request = fetch(endPoint, {
        method: method,
    })
        .then(response => response.text());
    return Observable.fromPromise(request);
};

const testData = () => {
    return [
        { username: 'russell', city: 'london' },
        { username: 'grace', city: 'berlin' }
    ]; 
};

export const makeDummyApiCall = (endPoint?: string): Observable<string> => {
    return Observable.of(testData()).map(o => JSON.stringify(o));
};

export const makeAPIRequest = (
    endPoint: string,
    method?: HTTPMethod,
    data?: Payload): Observable<string> => {

    switch (method) {
        case HTTPMethod.POST:
            return fetchRequest(endPoint, method);
        case HTTPMethod.GET:
            return fetchRequest(endPoint, method, data);
        default:
            return (makeDummyApiCall(endPoint));
    }

};
