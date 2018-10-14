export interface Tile {
    letter: String;
    score: number;
    count: number;
} 
const letterDistribution: Array<Tile> =
    [{ letter: 'E', score: 1, count: 12 },
    { letter: 'A', score: 1, count: 9 },
    { letter: 'I', score: 1, count: 9 },
    { letter: 'O', score: 1, count: 8 },
    { letter: 'N', score: 1, count: 6 },
    { letter: 'R', score: 1, count: 6 },
    { letter: 'T', score: 1, count: 6 },
    { letter: 'L', score: 1, count: 4 },
    { letter: 'S', score: 1, count: 4 },
    { letter: 'U', score: 1, count: 4 },
    { letter: 'D', score: 2, count: 4 },
    { letter: 'G', score: 2, count: 3 },
    { letter: 'B', score: 3, count: 2 },
    { letter: 'C', score: 3, count: 2 },
    { letter: 'M', score: 3, count: 2 },
    { letter: 'P', score: 3, count: 2 },
    { letter: 'F', score: 4, count: 2 },
    { letter: 'H', score: 4, count: 2 },
    { letter: 'V', score: 4, count: 2 },
    { letter: 'W', score: 4, count: 2 },
    { letter: 'Y', score: 4, count: 2 },
    { letter: 'K', score: 5, count: 1 },
    { letter: 'J', score: 8, count: 1 },
    { letter: 'X', score: 8, count: 1 },
    { letter: 'Q', score: 10, count: 1 },
    { letter: 'Z', score: 10, count: 1 }];

const getTileScore = (letter: string): number => {
    const tile: Tile | undefined = letterDistribution.find(
        x => x.letter === letter.toUpperCase()
    );
    return tile ? tile.score : 0;
};

export const getWordScore = (word: string, isValid: boolean): number => {
    if (word.length <= 1 || !isValid) {
        return 0;
    }
    return word.split('')
        .map(letter => getTileScore(letter))
        .reduce((a: number, b: number) => a + b);
};
