import { makeAPIRequest, HTTPMethod } from '../services';
import { Observable } from 'rxjs';
import { WordResult } from '../interfaces';
import { getWordScore } from '../scrabble';

const WEBSTER_API = 'https://www.dictionaryapi.com/api/v1/references/collegiate/xml/';
const WEBSTER_KEY = '08c63e42-bce1-4f63-8666-51b71d0e8380';

const sanitizeString = (word: string): string => {
    return word.replace(/(?:<|<\/)dt>|(?:<|<\/)suggestion>|(?:<|<\/)sx>|:/gi, '');
};

export const getResult = (searchItem: string): Observable<string> => {
    const url = `${WEBSTER_API}${searchItem}?key=${WEBSTER_KEY}`;
    return makeAPIRequest(url, HTTPMethod.GET);
};

export const evaluateResponse = (response: Object, search: string): WordResult => {

    const value = String(response);

    const definitionExpression = /<dt>(.*?)<\/dt>/g;
    const definitions: Array<string> | null  = value.match(definitionExpression);
    const isOneLetter = search.length === 1;
    const isValid = Array.isArray(definitions) && !isOneLetter;
    const firstDefinition = Array.isArray(definitions) ? definitions[0] : '';
    const suggestionExpression = /<suggestion>(.*?)<\/suggestion>/g;
    const suggestions: Array<string> | null  = value.match(suggestionExpression);

    const getErrorMessage = (): string => {
        return isOneLetter ? ' - a word must be two letters or more' : 'is not a valid scrabble word!';
    };
    const evaluateErrorMessage = (): string => { 
        return isValid ? '' : getErrorMessage();
    };

    return {
        definition: sanitizeString(firstDefinition).trim(),
        errorMessage: evaluateErrorMessage(),
        result: isValid ? getWordScore(search) : 0,
        suggestions: suggestions,
        word: search,
    };
 };
