/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(word: string = ''): string {
	if (word == '') {
		const answer: string = `One for you, one for me.`;
		return answer;
	}
	const answer: string = `One for ${word}, one for me.`;
	return answer;
}
