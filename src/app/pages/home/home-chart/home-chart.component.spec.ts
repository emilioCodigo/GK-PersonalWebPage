import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteamPersonalService } from '@app/service/api/steam-personal.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HomeChartComponent } from './home-chart.component';

describe('HomeChartComponent', () => {
  let component: HomeChartComponent;
  let fixture: ComponentFixture<HomeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeChartComponent],
      providers: [SteamPersonalService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
