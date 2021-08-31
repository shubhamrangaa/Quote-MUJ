export const trimString = (string, start = 0, end) => {
	let res = string.slice(start, end);
	if (string.length > end) {
		res += "..."
	}
	return res;
}