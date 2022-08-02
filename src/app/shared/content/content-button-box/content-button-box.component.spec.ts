import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentButtonBoxComponent } from './content-button-box.component';

describe('ContentButtonBoxComponent', () => {
  let component: ContentButtonBoxComponent;
  let fixture: ComponentFixture<ContentButtonBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentButtonBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentButtonBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
