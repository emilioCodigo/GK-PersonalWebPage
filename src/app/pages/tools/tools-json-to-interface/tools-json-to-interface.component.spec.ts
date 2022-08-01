import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsJsonToInterfaceComponent } from './tools-json-to-interface.component';

describe('ToolsJsonToInterfaceComponent', () => {
  let component: ToolsJsonToInterfaceComponent;
  let fixture: ComponentFixture<ToolsJsonToInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsJsonToInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsJsonToInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
