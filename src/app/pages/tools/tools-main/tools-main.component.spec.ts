import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsMainComponent } from './tools-main.component';

describe('ToolsMainComponent', () => {
  let component: ToolsMainComponent;
  let fixture: ComponentFixture<ToolsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
