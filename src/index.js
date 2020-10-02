
exports.min = function min (array) {
  if(array === undefined || array.length === 0) return 0;
  return array.reduce(function (value1, value2) {
    return ( value1 < value2 ? value1 : value2 );
  });
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) return 0;
  return array.reduce(function (value1, value2) {
    return ( value1 > value2 ? value1 : value2 );
  });
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) return 0;
  let sum = array.reduce((sum, elem) => sum + elem);
  return sum / array.length;
}
