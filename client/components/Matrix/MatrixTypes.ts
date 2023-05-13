import { Socket } from "socket.io-client";


export interface MatrixProps {
    initialRows?: number;
    initialCols?: number;
    initialMines?: number;
    socket: Socket;
}
//Types
export type Cell = {
    value: number;
    visible: boolean;
    x: number;
    y: number;
}

export enum Difficulty {
    easy = 'easy',
    medium = 'medium',
    hard = 'hard',
}

export type userGame = {
    lose: boolean
    win: boolean,
    cellsClicked: number,
    totalCells: number,
    rows: number,
    cols: number,
    mines: number,
    difficulty: Difficulty,
    username: string,
}

export type User = {
    id: string,
    username: string,
    easyScore: number,
    mediumScore: number,
    hardScore: number,
}
//Events

export type ENewUser = {
    user: User | null,
    leaderboard: User[]
}