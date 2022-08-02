import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentButtonYellowComponent } from './content-button-yellow.component';

describe('ContentButtonYellowComponent', () => {
  let component: ContentButtonYellowComponent;
  let fixture: ComponentFixture<ContentButtonYellowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentButtonYellowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentButtonYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
