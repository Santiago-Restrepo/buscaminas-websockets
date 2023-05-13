export interface MatrixProps {
    initialRows?: number;
    initialCols?: number;
    initialMines?: number;
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
    totalCells: number,
    rows: number,
    cols: number,
    mines: number,
}