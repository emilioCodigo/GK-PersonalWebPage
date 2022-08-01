import { TestBed } from '@angular/core/testing';
import { HomeLayoutService } from './home-layout.service';

describe('HomeLayoutService', () => {
  let service: HomeLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('#getHomeLayout$', (done: DoneFn) => {
    service.getHomeLayout$().subscribe((val) => {
      expect(val.headerHeight).toEqual('44px');
    });
    done();
  });
});
