const ToUpperCase = (word) => {
  const wordUpper = word
    .toLowerCase()
    .split(" ")
    .map((eachword) => eachword.at(0).toUpperCase() + eachword.slice(1))
    .join(" ");
  return wordUpper;
};

export { ToUpperCase };
