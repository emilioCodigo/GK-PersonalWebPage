import { DUMMY_steamData } from './../../../../constant/dummy/steam.data';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as $ from 'jquery';

import { HomeChartKeenComponent } from './home-chart-keen.component';

describe('HomeChartKeenComponent', () => {
  let component: HomeChartKeenComponent;
  let fixture: ComponentFixture<HomeChartKeenComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeChartKeenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeChartKeenComponent);
    component = fixture.componentInstance;
    component.focusGame = DUMMY_steamData[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
