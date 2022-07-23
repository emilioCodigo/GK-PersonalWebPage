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
        const temp = { ...this.HomeLayoutSubject.getValue(), ...val }
        console.log(temp)
        this.HomeLayoutSubject.next(temp)
    }
    constructor() {
        this._checkValue()
        this._scroll()
    }
    _scroll() {
        window.addEventListener('scroll', () => {
            this._checkValue()
        })
    }
    _checkValue() {
        const scrollTop = document.documentElement.scrollTop
        const dfHeaderHeight = Number(defaultHomeLayout.headerHeight?.toString().replace('px', ''))
    }
}

const defaultHomeLayout: iHomeLayout = {
    headerHeight: '44px',
    headerBgColor: ColorEnum.steamBg,
    section1MarginTop: '44px',
}
