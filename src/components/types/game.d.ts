// game.d.ts
export type PieceColor = 'red' | 'blue' | 'green' | 'yellow'; // △と▽の色
export type PieceType = 'triangle' | 'floatInvertedTriangle' | `intertedTriangle` | 'empty'; // ピースの種類 (△, 浮いた▽,▽, 空)

export interface Piece {
  type: PieceType;
  color: PieceColor;
  row:number;
  column:number;
  subPixcel:number;
}

export type BoardState = Piece[][]; // 盤面はピースの2次元配列

export interface GameState {
  board: BoardState;
  PiecePosition: Array<Array<Piece>>;
  score: number;
  isGameOver: boolean;
  isPaused: boolean;
}