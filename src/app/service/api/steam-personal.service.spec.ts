import { TestBed } from '@angular/core/testing';

import { SteamPersonalService } from './steam-personal.service';

describe('SteamPersonalService', () => {
  let service: SteamPersonalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SteamPersonalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
