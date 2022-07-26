import { Component, Input, OnInit } from '@angular/core'
import { iHomeLayout } from '@app/model/layout.model'

@Component({
    selector: 'app-home-two-color',
    templateUrl: './home-two-color.component.html',
    styleUrls: ['./home-two-color.component.scss'],
})
export class HomeTwoColorComponent implements OnInit {
    part1: iTwoColorContext = {
        title: '經營管理遊戲愛好者',
        text: '我是一名Paradox公司的死忠粉絲<br>當兵放假時總是瘋狂地在電腦中建造城市、規劃交通、管理國務內政、對外貿易。<br>具有高度自由性、創造性、模組化與活躍社群的遊戲我絕對他媽玩爆。',
    }
    part2: iTwoColorContext = {
        title: '電子音樂迷',
        text: '從2012年至今從未中斷過對電子音樂的探索，從西歐世界的<br>Dubstep、PsyTrance、FutureBass、Big Room House，至拉美的Reggae通通都是好球帶。<br>對超脫規範的實驗性音色與無調性音樂十分感興趣。',
    }
    @Input() layout!: iHomeLayout
    constructor() {}

    ngOnInit(): void {}
}
interface iTwoColorContext {
    title: string
    text: string
}
