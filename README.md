# Knights Travails

A solution to **The Odin Project – Knights Travails** problem. This project finds the shortest possible path a knight can take on a chessboard from a given start square to a target square using graph traversal.

🔗 Project brief: [https://www.theodinproject.com/lessons/javascript-knights-travails](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Problem Overview

A knight moves in an **L-shape**:

- Two squares in one direction and one square perpendicular, or
- One square in one direction and two squares perpendicular

Given:

- A starting position `[x, y]`
- A target position `[x, y]`

The goal is to determine the **shortest path** (fewest moves) the knight can take to reach the target.

## Approach

This solution follows a **Breadth-First Search (BFS)** strategy, based directly on how a knight explores the board level by level.

### Idea

- The chessboard is an **8×8 grid** with valid coordinates `0 ≤ x, y ≤ 7`.
- Knight movement is defined using **relative offsets** (±2, ±1).
- Positions are explored using arithmetic rather than a pre-built graph.
- A `visited` collection ensures each square is processed only once.

### High-Level-Algorithm

1. **Start position**
   - Begin with the knight’s starting position `[x, y]`.
   - Add this position to a queue to begin BFS traversal.

2. **Generate possible moves**
   - For the current position, generate all potential knight moves by adding the predefined move offsets.
   - Filter out any positions that fall outside the board range.

3. **Validate and track positions**
   - Ignore positions that have already been visited.
   - For each valid, unvisited position:
     - Assign a `parent` reference pointing to the position it came from
     - Push it into the queue for further exploration

4. **Goal check**
   - After dequeuing a position, check if it matches the target square.
   - If the goal is reached, stop the search.

5. **Path reconstruction**
   - Starting from the goal node, follow the `parent` references backward to the starting position.
   - Reverse this sequence to produce the knight’s shortest path.

Because BFS explores all positions at the same depth before moving deeper, this approach guarantees the **minimum number of moves**.

## Usage

Example:

```js
knightMoves([0, 0], [7, 7]);
```

Output:

```text
Knight made it in 6 moves. Here's your path:
[
[0,0]
[1,2]
[2,4]
[3,6]
[5,7]
[6,5]
[7,7]
]
```

## Implementation Notes

- The board is not pre-generated as a full graph; valid moves are calculated on the fly.
- A queue is used to manage BFS traversal.
- Parent references are tracked to reconstruct the final path.

## Future Works

- **GUI visualisation** to animate the knight’s movement across the board
- Refactor nodes into a dedicated `Node` class instead of attaching metadata to arrays
