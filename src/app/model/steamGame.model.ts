export interface iSteamGameInfo {
    appid?: number
    playtime_forever?: number
    name?: string
    header_image?: string
    storeurl?: string
    background?: string
    playTime_hour?: number
    categories?: categories[]
    about_the_game?: string
    metacritic?: metacritic
    movies?: movies[]
    screenshots?: screenshots[]
}
interface movies {
    id: number
    name: string
    thumbnail: string
    webm: {
        '480': string
        max: string
    }
    mp4: {
        '480': string
        max: string
    }
    highlight: boolean
}
interface metacritic {
    score: number
    url: string
}
interface screenshots {
    id: number
    path_thumbnail: string
    path_full: string
}
interface categories {
    id?: number
    description?: string
}
