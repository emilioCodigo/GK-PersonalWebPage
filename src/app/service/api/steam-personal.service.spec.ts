import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SteamPersonalService } from './steam-personal.service';

describe('SteamPersonalService', () => {
  let service: SteamPersonalService;
  let httpSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpSpy = jasmine.createSpyObj('httpClientz', ['get']);
    service = new SteamPersonalService(httpSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
