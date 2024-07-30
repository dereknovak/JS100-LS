function allMatches(words, regex) {
  let matches = []
  
  words.forEach(word => {
    if (word.match(regex)) matches.push(word);
  });

  return matches;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrith',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));
