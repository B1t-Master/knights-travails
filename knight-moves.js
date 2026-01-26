import { Node, getPossibleMoves } from "./board.js";
export function knightMoves(startingPoint, goal) {
  if (BFS(goal, startingPoint, visited)) return true;
  getPossibleMoves(startingPoint);
}

function BFS(goal, visited = [], queue = [startingPoint]) {
  //   console.log(queue);
  //   let copy = new Set();

  //   queue.forEach((elem) => {
  //     copy.add(elem);
  //   });

  //   visited.forEach((elem) => {
  //     copy.add(elem);
  //   });

  //   queue = [...copy];

  const node = queue.shift();

  //   if (!node) console.log("empty queue");

  const inVisited = visited.some(
    (elem) => JSON.stringify(node) === JSON.stringify(elem),
  );

  const moves = getPossibleMoves(node);
  //   console.log(node);
  if (!inVisited) {
    moves.forEach((elem) => queue.push(elem));
    visited.push(node);
  }
  console.log(queue);
  //   console.log(visited);
  //   console.log(visited);
  if (JSON.stringify(node) === JSON.stringify(goal))
    return console.log("value found");
  // queue = [];
  BFS(goal, visited, queue);
}
let visited = [];
let queue = [];

// console.log(getPossibleMoves([2, 1]));

console.log(BFS([2, 7], (visited = []), (queue = [[0, 0]])));
