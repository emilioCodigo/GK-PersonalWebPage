import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChartKeenComponent } from './home-chart-keen.component';

describe('HomeChartKeenComponent', () => {
  let component: HomeChartKeenComponent;
  let fixture: ComponentFixture<HomeChartKeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChartKeenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChartKeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
