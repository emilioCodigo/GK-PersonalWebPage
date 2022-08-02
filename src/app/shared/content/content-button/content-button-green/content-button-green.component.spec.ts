import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentButtonGreenComponent } from './content-button-green.component';

describe('ContentButtonGreenComponent', () => {
  let component: ContentButtonGreenComponent;
  let fixture: ComponentFixture<ContentButtonGreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentButtonGreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentButtonGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
