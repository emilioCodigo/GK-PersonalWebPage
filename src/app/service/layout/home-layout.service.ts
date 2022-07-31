import { ColorEnum } from './../../constant/enum/color.enum'
import { Injectable } from '@angular/core'
import { iHomeLayout } from '@app/model/layout.model'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class HomeLayoutService {
    private readonly HomeLayoutSubject = new BehaviorSubject<iHomeLayout>(defaultHomeLayout)
    getHomeLayout$(): Observable<iHomeLayout> {
        return this.HomeLayoutSubject.asObservable()
    }
    setHomeLayout(val: Partial<iHomeLayout>): void {
        this.HomeLayoutSubject.next({ ...this.HomeLayoutSubject.getValue(), ...val })
    }
    constructor() {}
}

const defaultHomeLayout: iHomeLayout = {
    headerHeight: '44px',
    headerBgColor: ColorEnum.steamBg,
    section1MarginTop: '44px',
}
