export interface Photo {

    isFavourite: boolean

    albumId: string
    id: string
    title: string
    url: string
    thumbnailUrl: string

    [key: string]: string | boolean
}

export interface PhotoData {
    [key: string]: string | boolean
}
