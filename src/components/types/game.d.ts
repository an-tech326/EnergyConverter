// game.d.ts
export type PieceColor = 'red' | 'blue' | 'green' | 'yellow'; // △と▽の色
export type PieceType = 'triangle' | 'invertedTriangle' | 'empty'; // ピースの種類 (△, ▽, 空)

export interface Piece {
  type: PieceType;
  color: PieceColor;
  // 他にも、落下中のピースなら 'x', 'y' 座標など
}

export type BoardState = Piece[][]; // 盤面はピースの2次元配列

export interface GameState {
  board: BoardState;
  fallingPiece: Piece;
  fallingPiecePosition: { x: number; y: number; };
  nextPiece: Piece;
  score: number;
  isGameOver: boolean;
  isPaused: boolean;
}