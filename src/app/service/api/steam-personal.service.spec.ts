import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SteamPersonalService } from './steam-personal.service';

describe('SteamPersonalService', () => {
  let service: SteamPersonalService;
  let httpController: HttpTestingController;
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SteamPersonalService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
