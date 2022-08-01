import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAsideComponent } from './tools-aside.component';

describe('ToolsAsideComponent', () => {
  let component: ToolsAsideComponent;
  let fixture: ComponentFixture<ToolsAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsAsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
