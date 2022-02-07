import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CallSign, GameSettings } from 'src/app/core/models/game-settings.model';
import { GameSettingsState } from 'src/app/core/state/game-settings/game-settings.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  pickedX=true
  CallSign = CallSign;
  gameSettings: GameSettings = {
    playerOneCallSign: CallSign.X,
    isplayerTwoAI: false
  }

  constructor(private gameSettingsState: GameSettingsState, private router: Router) {
  }

  startGame(withAI: boolean) {
    this.gameSettings.isplayerTwoAI = withAI;
    this.gameSettingsState.updateGameSettings(this.gameSettings);

    this.router.navigate(['/game'])
  }

}
