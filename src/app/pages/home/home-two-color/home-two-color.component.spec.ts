import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTwoColorComponent } from './home-two-color.component';

describe('HomeTwoColorComponent', () => {
  let component: HomeTwoColorComponent;
  let fixture: ComponentFixture<HomeTwoColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTwoColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTwoColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
