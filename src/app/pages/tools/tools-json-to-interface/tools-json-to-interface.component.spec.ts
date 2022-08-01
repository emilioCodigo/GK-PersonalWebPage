import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared/shared.module';
import { ToolsJsonToInterfaceComponent } from './tools-json-to-interface.component';

describe('ToolsJsonToInterfaceComponent', () => {
  let component: ToolsJsonToInterfaceComponent;
  let fixture: ComponentFixture<ToolsJsonToInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolsJsonToInterfaceComponent],
      imports: [SharedModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ToolsJsonToInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('create', () => {
    expect(component).toBeDefined();
  });
  it('textValue change ParseValue', () => {
    component.textValue = JSON.stringify({ list: [{ age: 15 }], name: 'wang' });
    // fixture.detectChanges();
    expect(component.ParseValue.length).toBeGreaterThan(0);
  });
});
