module.exports.sortDescending = (word) => {
  return word.split('').sort((a, b) => {
    if (a < b) return 1;
    if (a === b) return 0;
    if (a > b) return -1;
  }).join('');
};