import { TestBed } from '@angular/core/testing';

import { ToolsLayoutService } from './tools-layout.service';

describe('ToolsLayoutService', () => {
  let service: ToolsLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolsLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
