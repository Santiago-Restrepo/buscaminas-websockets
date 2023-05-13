//Events

export type NewUser = {
    username: string
}

//Server

export type User = {
    id: string,
    username: string,
    easyScore: number,
    mediumScore: number,
    hardScore: number,
}