import { TestBed } from '@angular/core/testing';

import { GameSettingsState } from './game-settings.state';

describe('GameSettingsState', () => {
  let service: GameSettingsState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameSettingsState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
