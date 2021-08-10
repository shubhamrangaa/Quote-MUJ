import { WORDS_PER_MIN } from "../constants/readTimes";

function humanizeTime(time) {
  if (time < 0.5) {
    return "less than a minute read";
  }
  if (time >= 0.5 && time < 1.5) {
    return "1 min read";
  }
  return `${Math.ceil(time)} min read`;
}

function wordsCount(string) {
  const pattern = "\\w+";
  const reg = new RegExp(pattern, "g");
  return (string.match(reg) || []).length;
}

function wordsReadTime(string, wordsPerMin = WORDS_PER_MIN) {
  const wordCount = wordsCount(string);
  const wordTime = wordCount / wordsPerMin;
  return {
    wordTime,
  };
}

function stripTags(string) {
  const pattern = "<\\w+(\\s+(\"[^\"]*\"|\\'[^\\']*'|[^>])+)?>|<\\/\\w+>";
  const reg = new RegExp(pattern, "gi");
  return string.replace(reg, "");
}

function stripWhitespace(string) {
  return string.replace(/^\s+/, "").replace(/\s+$/, "");
}

function readTime(string, customWordTime) {
	try{
		const strippedString = stripTags(stripWhitespace(string));
		const { wordTime } = wordsReadTime(strippedString, customWordTime);
		return humanizeTime(wordTime);
	}
	catch{
		return humanizeTime(0)
	}
}

export default readTime;
