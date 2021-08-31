export const stripLongString = (length, description) => {
  if (!description) return;
  if (description.length <= length) {
    return description;
  }
  return description.substr(0, length) + "\u2026";
};
