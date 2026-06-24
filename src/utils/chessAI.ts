import { Chess } from 'chess.js';

// Piece-Square Tables (PST) to guide positional play
const pawnEval = [
  [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
  [5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0,  5.0],
  [1.0,  1.0,  2.0,  3.0,  3.0,  2.0,  1.0,  1.0],
  [0.5,  0.5,  1.0,  2.5,  2.5,  1.0,  0.5,  0.5],
  [0.0,  0.0,  0.0,  2.0,  2.0,  0.0,  0.0,  0.0],
  [0.5, -0.5, -1.0,  0.0,  0.0, -1.0, -0.5,  0.5],
  [0.5,  1.0,  1.0, -2.0, -2.0,  1.0,  1.0,  0.5],
  [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0]
];

const knightEval = [
  [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0],
  [-4.0, -2.0,  0.0,  0.0,  0.0,  0.0, -2.0, -4.0],
  [-3.0,  0.0,  1.0,  1.5,  1.5,  1.0,  0.0, -3.0],
  [-3.0,  0.5,  1.5,  2.0,  2.0,  1.5,  0.5, -3.0],
  [-3.0,  0.0,  1.5,  2.0,  2.0,  1.5,  0.0, -3.0],
  [-3.0,  0.5,  1.0,  1.5,  1.5,  1.0,  0.5, -3.0],
  [-4.0, -2.0,  0.0,  0.5,  0.5,  0.0, -2.0, -4.0],
  [-5.0, -4.0, -3.0, -3.0, -3.0, -3.0, -4.0, -5.0]
];

const bishopEval = [
  [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0],
  [-1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
  [-1.0,  0.0,  0.5,  1.0,  1.0,  0.5,  0.0, -1.0],
  [-1.0,  0.5,  0.5,  1.0,  1.0,  0.5,  0.5, -1.0],
  [-1.0,  0.0,  1.0,  1.0,  1.0,  1.0,  0.0, -1.0],
  [-1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0, -1.0],
  [-1.0,  0.5,  0.0,  0.0,  0.0,  0.0,  0.5, -1.0],
  [-2.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -2.0]
];

const rookEval = [
  [0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0],
  [0.5,  1.0,  1.0,  1.0,  1.0,  1.0,  1.0,  0.5],
  [-0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
  [-0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
  [-0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
  [-0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
  [-0.5,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -0.5],
  [0.0,  0.0,  0.0,  0.5,  0.5,  0.0,  0.0,  0.0]
];

const queenEval = [
  [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0],
  [-1.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, -1.0],
  [-1.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
  [-0.5,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
  [0.0,  0.0,  0.5,  0.5,  0.5,  0.5,  0.0, -0.5],
  [-1.0,  0.5,  0.5,  0.5,  0.5,  0.5,  0.0, -1.0],
  [-1.0,  0.0,  0.5,  0.0,  0.0,  0.5,  0.0, -1.0],
  [-2.0, -1.0, -1.0, -0.5, -0.5, -1.0, -1.0, -2.0]
];

const kingEval = [
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-3.0, -4.0, -4.0, -5.0, -5.0, -4.0, -4.0, -3.0],
  [-2.0, -3.0, -3.0, -4.0, -4.0, -3.0, -3.0, -2.0],
  [-1.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -1.0],
  [2.0,  2.0,  0.0,  0.0,  0.0,  0.0,  2.0,  2.0],
  [2.0,  3.0,  1.0,  0.0,  0.0,  1.0,  3.0,  2.0]
];

// Returns the value of a piece at a given position, relative to White (+ value) or Black (- value)
function getPieceValue(piece: { type: string; color: string } | null, r: number, c: number): number {
  if (!piece) return 0;
  
  const isWhite = piece.color === 'w';
  const row = isWhite ? r : 7 - r;
  const col = c;
  let val = 0;

  switch (piece.type) {
    case 'p':
      val = 100 + pawnEval[row][col] * 10;
      break;
    case 'n':
      val = 320 + knightEval[row][col] * 10;
      break;
    case 'b':
      val = 330 + bishopEval[row][col] * 10;
      break;
    case 'r':
      val = 500 + rookEval[row][col] * 10;
      break;
    case 'q':
      val = 900 + queenEval[row][col] * 10;
      break;
    case 'k':
      val = 20000 + kingEval[row][col] * 10;
      break;
  }

  return isWhite ? val : -val;
}

// Evaluate the board state
export function evaluateBoard(board: any[][]): number {
  let totalEvaluation = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      totalEvaluation += getPieceValue(board[i][j], i, j);
    }
  }
  return totalEvaluation;
}

const pieceValues: Record<string, number> = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 100 };

// Minimax with Alpha-Beta Pruning
export function minimax(
  game: Chess,
  depth: number,
  alpha: number,
  beta: number,
  isMaximizingPlayer: boolean
): { score: number; move: any | null } {
  if (game.isGameOver()) {
    if (game.isCheckmate()) {
      return { score: game.turn() === 'w' ? -100000 - depth : 100000 + depth, move: null };
    }
    return { score: 0, move: null };
  }

  if (depth === 0) {
    return { score: evaluateBoard(game.board()), move: null };
  }

  const moves = game.moves({ verbose: true });

  // MVV-LVA move sorting
  moves.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;

    if (a.captured) {
      scoreA += 10 * pieceValues[a.captured] - pieceValues[a.piece];
    }
    if (b.captured) {
      scoreB += 10 * pieceValues[b.captured] - pieceValues[b.piece];
    }

    if (a.promotion) scoreA += 9;
    if (b.promotion) scoreB += 9;

    if (a.san.includes('+')) scoreA += 5;
    if (b.san.includes('+')) scoreB += 5;

    return scoreB - scoreA;
  });

  let bestMove: any = null;

  if (isMaximizingPlayer) {
    let maxEval = -Infinity;
    for (const move of moves) {
      game.move(move);
      const evaluation = minimax(game, depth - 1, alpha, beta, false).score;
      game.undo();
      if (evaluation > maxEval) {
        maxEval = evaluation;
        bestMove = move;
      }
      alpha = Math.max(alpha, evaluation);
      if (beta <= alpha) {
        break;
      }
    }
    return { score: maxEval, move: bestMove };
  } else {
    let minEval = Infinity;
    for (const move of moves) {
      game.move(move);
      const evaluation = minimax(game, depth - 1, alpha, beta, true).score;
      game.undo();
      if (evaluation < minEval) {
        minEval = evaluation;
        bestMove = move;
      }
      beta = Math.min(beta, evaluation);
      if (beta <= alpha) {
        break;
      }
    }
    return { score: minEval, move: bestMove };
  }
}

// Make standard engine move wrapper
export function getBestMove(game: Chess, difficulty: 'easy' | 'medium' | 'hard'): any | null {
  const isAIWhite = game.turn() === 'w';
  
  // Easy: Depth 1
  // Medium: Depth 2
  // Hard: Depth 3
  let depth = 2;
  if (difficulty === 'easy') depth = 1;
  else if (difficulty === 'hard') depth = 3;

  const result = minimax(game, depth, -Infinity, Infinity, isAIWhite);
  return result.move;
}
