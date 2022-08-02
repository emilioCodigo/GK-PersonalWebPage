import { HomeLayoutService } from './../../../service/layout/home-layout.service';
import { SharedModule } from './../../../shared/shared.module';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { HomeHeaderComponent } from './home-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeHeaderComponent', () => {
  let component: HomeHeaderComponent;
  let homeServ: HomeLayoutService;
  let fixture: ComponentFixture<HomeHeaderComponent>;
  let logoElement: HTMLDivElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeHeaderComponent],
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [{ provide: BsDropdownConfig, useValue: { autoClose: true } }],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeHeaderComponent);
    component = fixture.componentInstance;
    homeServ = new HomeLayoutService();
    homeServ.getHomeLayout$().subscribe((r) => {
      component.layout = r;
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
