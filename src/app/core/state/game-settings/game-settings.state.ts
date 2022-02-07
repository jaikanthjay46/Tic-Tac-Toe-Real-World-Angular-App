import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CallSign, GameSettings } from '../../models/game-settings.model';

const INIT_STATE: GameSettings = {
  playerOneCallSign: CallSign.X,
  isplayerTwoAI: false
}

@Injectable({
  providedIn: 'root'
})
export class GameSettingsState{
  private _gameSettings = new BehaviorSubject<GameSettings>(INIT_STATE);
  public gameSettings$ = this._gameSettings.asObservable();

  updateGameSettings(gameSetting: GameSettings) {
    this._gameSettings.next(gameSetting);
  }
}
