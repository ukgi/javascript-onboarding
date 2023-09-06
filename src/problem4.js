function problem4(word) {
  return convertFlogWord(word);
}

module.exports = problem4;

const ascii = {
  UPPER_CASE_A: 65,
  UPPER_CASE_Z: 90,
  LOWER_CASE_a: 97,
  LOWER_CASE_z: 122,
};

function convertFlogWord(word) {
  const result = [];
  const { UPPER_CASE_A, UPPER_CASE_Z, LOWER_CASE_a, LOWER_CASE_z } = ascii;
  for (let i = 0; i < word.length; i++) {
    const asciiValue = word[i].charCodeAt();
    if (asciiValue >= UPPER_CASE_A && asciiValue <= UPPER_CASE_Z) {
      result.push(UPPER_CASE_Z - (asciiValue % UPPER_CASE_A));
    } else if (asciiValue >= LOWER_CASE_a && asciiValue <= LOWER_CASE_z) {
      result.push(LOWER_CASE_z - (asciiValue % LOWER_CASE_a));
    } else {
      result.push(asciiValue);
    }
  }
  return String.fromCharCode(...result);
}

console.log(problem4('I love you'));
