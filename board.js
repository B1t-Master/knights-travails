// export class Node {
//   constructor(x, y) {
//     this.coordinate = [x, y];
//     this.parent = null;
//     // this.visited = false;
//   }
// }

const moves = [
  [2, 1],
  [2, -1],
  [1, 2],
  [1, -2],
  [-2, 1],
  [-2, -1],
  [-1, 2],
  [-1, -2],
];

function isInRange(position) {
  const [x, y] = position;
  // console.log(x);
  // console.log(y);
  if (typeof x !== "number" && typeof y !== "number") return false;
  if (!(x > -1 && x < 8)) return false;
  if (!(y > -1 && y < 8)) return false;
  // if (y > 7 || y < 0) return false;
  return true;
}

export function getPossibleMoves(position) {
  if (!isInRange(position)) return;
  const [x, y] = position;
  const deepCopy = JSON.parse(JSON.stringify(moves));
  let positions = deepCopy.map((elem) => {
    elem[0] = elem[0] + x;
    elem[1] = elem[1] + y;
    return elem;
  });
  return positions.filter((elem) => isInRange(elem));
}
