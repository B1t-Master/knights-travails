import { getPossibleMoves } from "./board.js";
export function knightMoves(startingPoint, goal) {
  //   if (!goal && !startingPoint) return "Invalid Co-ordinates";
  return BFS(goal, (visited = []), (queue = [startingPoint]));
}
function printPath(node) {
  let path = [];
  while (node) {
    path = [...path, [node[0], node[1]]];
    node = node.parent;
  }
  path.reverse();
  return console.log(
    `Knight made it in in ${path.length - 1} moves. Here's your path:\n`,
    path,
  );
}
function BFS(goal, visited, queue) {
  const node = queue.shift();

  const inVisited = visited.some(
    (elem) => JSON.stringify(node) === JSON.stringify(elem),
  );

  const moves = getPossibleMoves(node);
  if (!inVisited) {
    moves.forEach((elem) => {
      elem.parent = node;
      return queue.push(elem);
    });
    visited.push(node);
  }
  //   console.log(visited);

  if (JSON.stringify(node) === JSON.stringify(goal)) {
    return printPath(node);
    // return console.log("value found");
  }

  BFS(goal, visited, queue);
}

let visited = [];
let queue = [];

// console.log(getPossibleMoves([2, 1]));

// console.log(BFS([7, 7], (visited = []), (queue = [[0, 0]])));
