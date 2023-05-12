import React, { useState, useMemo, useEffect } from 'react'
//0 means empty, 1 means mine
import {
    MatrixProps,
    Cell,
    userGame
} from './MatrixTypes';
export function Matrix({
    rows = 10,
    cols = 10,
    mines = 10
}: MatrixProps) {
    const [minesPositions, setMinesPositions] = useState<number[][]>([]);
    const [userGame, setUserGame] = useState<userGame>({
        lose: false,
        win: false,
        cellsClicked: 0,
        totalCells: (rows * cols) - mines
    })
    const initialMatrix: Cell[][] = useMemo(() => {
        const matrix: Cell[][] = Array(rows).fill(null).map(() => Array(cols).fill(null).map(() => ({
            value: 0,
            visible: false,
            x: 0,
            y: 0
        })));
        return matrix;
    }, [rows, cols, mines]);
    const [matrix, setMatrix] = useState<Cell[][]>(initialMatrix);

    function generateRandomPosition(positionsArray: number[][]): number[]{
        const x = Math.floor(Math.random() * rows);
        const y = Math.floor(Math.random() * cols);
        const position = [x, y];
        if(positionsArray.some(([x, y]) => x === position[0] && y === position[1])){
            return generateRandomPosition(positionsArray);
        }
        return position;
    }
    function handleMineClicked(){
        setUserGame({
            ...userGame,
            lose: true
        })
    }
    function handleCellClicked({
        x,
        y
    }: Cell){
        setUserGame({
            ...userGame,
            cellsClicked: userGame.cellsClicked + 1
        })
    }
    useEffect(()=>{
        const positions: number[][] = [];
        while (positions.length < mines) {
            positions.push(generateRandomPosition(positions));
        }
        setMinesPositions(positions);
    }, [rows, cols, mines]);
    return (
        <div className='flex flex-col'>
            <h1 className="text-2xl font-medium text-gray-200 text-center">
                Buscaminas con websockets
            </h1>
            <h2 className='text-xl font-medium text-red-500 text-center'>
                {userGame?.lose && "You lose"}
            </h2>
            <h2 
                className='text-xl font-medium text-green-600 text-center'
                role='counter'
            >
                Counter {userGame.cellsClicked} / {userGame.totalCells}
            </h2>
            <div className="grid grid-cols-10 gap-2 mx-auto my-4">
                {
                    matrix.map((row, i) => (
                        row.map((cell, j) => {
                            const isMine = minesPositions.some(([x, y]) => x === i && y === j);
                            return (
                                <button
                                    key={`${i}-${j}`}
                                    role={'button'}
                                    className="bg-gray-200 text-gray-800 font-bold py-2 px-4 w-[2.5rem] h-[2.5rem] rounded inline-flex items-center justify-center"
                                    data-x={i}
                                    data-y={j}
                                    onClick={() => {
                                        const newMatrix = matrix.map((row) => row.map((cell) => ({...cell})));
                                        newMatrix[i][j].visible = true;
                                        isMine ? handleMineClicked() : handleCellClicked(newMatrix[i][j]);
                                        setMatrix(newMatrix);
                                    }}
                                >
                                    <span 
                                        className={!cell.visible ? 'hidden' : ''}
                                        role={isMine ? 'mine' : 'cell'}
                                    >
                                        {isMine ? '💣' : '1'}
                                    </span>
                                </button>
                            )
                        })
                    ))
                }
            </div>
        </div>
    )
}
