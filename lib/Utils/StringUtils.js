const capitalizeText = (text) => {
  const firstWord = text.charAt(0).toUpperCase();
  const notFirstWord = text.slice(1);
  const capitalizedText = firstWord + notFirstWord;
  return capitalizedText;
};

export { capitalizeText };
