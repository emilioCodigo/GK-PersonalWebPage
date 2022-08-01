import { iToolsLayout } from './../../model/layout.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToolsLayoutService {
  private readonly ToolsLayoutSubject = new BehaviorSubject<iToolsLayout>(
    defaultHomeLayout
  );
  getToolsLayout$(): Observable<iToolsLayout> {
    return this.ToolsLayoutSubject.asObservable();
  }
  setToolsLayout(val: Partial<iToolsLayout>): void {
    this.ToolsLayoutSubject.next({
      ...this.ToolsLayoutSubject.getValue(),
      ...val,
    });
  }
  constructor() {}
}
const defaultHomeLayout: iToolsLayout = {
  sideMenuWidth: '265px',
};
