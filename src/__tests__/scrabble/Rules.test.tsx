import { getWordScore } from '../../scrabble/rules';

describe('Rules', () => {

    it('calculates the word `test` to score 4', () => {
        // given
        const word = 'test';

        // when
        let score = getWordScore(word);

        // then
        expect(score).toBe(4);
    });

    it('calculates that a one letter word will have a score of 0', () => {
        // given
        const oneLetterWord = 'a';

        // when
        let score = getWordScore(oneLetterWord);

        // then
        expect(score).toBe(0);
    });

    it('calculated that the word `quiz` will have a score of 22', () => {
        // given
        const quiz = 'quiz';

        // when
        let score = getWordScore(quiz);

        // then
        expect(score).toBe(22);
    });
});