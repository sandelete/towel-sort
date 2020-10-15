module.exports = function towelSort (matrix) {
  if (typeof(matrix) !== 'object') return [];

  for (let i = 0; i < matrix.length; i++) {
    if ((i + 1) % 2 === 0) {
      matrix[i].reverse();
    }
  }

  return matrix.flat();
};