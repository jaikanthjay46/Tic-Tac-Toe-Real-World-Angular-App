export enum CallSign {
  X = 'X',
  O = 'O'
}

export interface GameSettings {
  playerOneCallSign: CallSign;
  isplayerTwoAI: boolean;
}
