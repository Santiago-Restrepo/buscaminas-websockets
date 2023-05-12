export interface MatrixProps {
    rows?: number;
    cols?: number;
    mines?: number;
}
//Types
export type Cell = {
    value: number;
    visible: boolean;
    x: number;
    y: number;
}

export type userGame = {
    lose: boolean
    win: boolean,
    cellsClicked: number,
    totalCells: number
}