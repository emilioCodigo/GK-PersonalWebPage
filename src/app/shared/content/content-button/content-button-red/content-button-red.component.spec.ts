import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentButtonRedComponent } from './content-button-red.component';

describe('ContentButtonRedComponent', () => {
  let component: ContentButtonRedComponent;
  let fixture: ComponentFixture<ContentButtonRedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentButtonRedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentButtonRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
