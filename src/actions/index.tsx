export async function search(searchItem: string) {

    const WORDNIK_API = 'http://api.wordnik.com/v4/word.json/';
    const KEY = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    const url = `${WORDNIK_API}${searchItem}/scrabbleScore?api_key=${KEY}`;

    const data = await fetch(url)
        .then(response => {
            return response.json();
        });

    return data;
}