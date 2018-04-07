
/* tslint:disable */
export async function search3(searchItem: string) {

    const WORDNIK_API = 'http://api.wordnik.com/v4/word.json/';
    const KEY = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    const url = `${WORDNIK_API}${searchItem}/scrabbleScore?api_key=${KEY}`;

    const data = await fetch(url)
        .then(response => {
            return response.json();
        });

    return data;
}
/* tslint:enable */

export interface DescribedResponse {
    message?: string;
    statusDescription?: string;
}

const WORDNIK_API = 'http://api.wordnik.com/v4/word.json/';
const KEY = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

const getURL = (searchItem: string) => {
    return `${WORDNIK_API}${searchItem}/scrabbleScore?api_key=${KEY}`;
};

const handleError = (responseData: DescribedResponse): void => {

    const message = (responseData.message === undefined)
        ? responseData.statusDescription
        : responseData.message;

    alert(`Error: ${message}.`);
};

 /* tslint:disable */
const searchWithItem = (searchItem: string): Promise<any> => {
    /* tslint:enable */ 
    const request = fetch(getURL(searchItem)); // is a Promise!

    return request.then(
        (response) => response.json().then(
            (data) => response.ok
                ? Promise.resolve(response)
                : Promise.reject(data),
        )); 
};
 /* tslint:disable */
// Observable<SubmitAction>
export const search = (searchItem: string): any => {
   
    console.log('search: ', searchItem);
    /* tslint:enable */ 

    searchWithItem(searchItem)
        .then(() => true)
        .catch((error) => {
            handleError(error);
            return false;
        });
};