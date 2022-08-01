import { DUMMY_steamData } from './../../../../constant/dummy/steam.data';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChartBoardComponent } from './home-chart-board.component';

describe('HomeChartBoardComponent', () => {
  let component: HomeChartBoardComponent;
  let fixture: ComponentFixture<HomeChartBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeChartBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeChartBoardComponent);
    component = fixture.componentInstance;
    component.focusGame = DUMMY_steamData[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
