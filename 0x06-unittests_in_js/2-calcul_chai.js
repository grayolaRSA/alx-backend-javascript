function calculateNumber(type, a, b) {
  const c = Math.round(a);
  const d = Math.round(b);

  if (type === 'SUM') {
    return c + d;
  } if (type === 'SUBTRACT') {
    return c - d;
  } if (type === 'DIVIDE') {
    if (b === 0) {
      throw new Error('Error');
    } else {
      return c / d;
    }
  }
}

module.exports = calculateNumber;
