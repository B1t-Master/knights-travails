export class Node {
  constructor(x, y) {
    this.coordinate = [x, y];
    this.visited = false;
  }
}

const moves = [
  [2, 1],
  [2, -1],
  [1, 2],
  [1, -2],
  [-2, 1],
  [-2, -1],
  [-1, 2],
  [-1 - 2],
];

function isInRange(position) {
  const [x, y] = position;
  if (x > 7 || x < 0) return false;
  if (y > 7 || y < 0) return false;
  return true;
}

function getPossibleMoves(position) {
  const [x, y] = position;
  //   console.log(position);
  let positions = moves.map((elem) => {
    elem[0] = elem[0] + x;
    elem[1] = elem[1] + y;
    return elem;
  });
  return positions.filter((position) => isInRange(position));
  //   return positions;
}

console.log(getPossibleMoves([2, 5]));
