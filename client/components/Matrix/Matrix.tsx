import React, { useState, useMemo, useEffect } from 'react'
//0 means empty, 1 means mine
import {
    MatrixProps,
    Cell,
    userGame
} from './MatrixTypes';
export function Matrix({
    initialRows = 3,
    initialCols = 3,
    initialMines = 1
}: MatrixProps) {
    const [minesPositions, setMinesPositions] = useState<number[][]>([]);
    const [userGame, setUserGame] = useState<userGame>({
        lose: false,
        win: false,
        rows: initialRows,
        cols: initialCols,
        mines: initialMines,
        cellsClicked: 0,
        totalCells: (initialRows * initialCols) - initialMines
    })
    const {
        lose,
        win,
        rows,
        cols,
        mines,
        cellsClicked,
        totalCells
    } = userGame;
    const initialMatrix: Cell[][] = useMemo( () => generateMatrix(rows, cols), [rows, cols]);
    const [matrix, setMatrix] = useState<Cell[][]>(initialMatrix);
    function generateMatrix(rows: number, cols: number): Cell[][]{
        const matrix: Cell[][] = Array(rows).fill(null).map((_, x) => Array(cols).fill(null).map((_, y) => ({
            value: 0,
            visible: false,
            x,
            y
        })));
        return matrix;
    }
    function generateRandomPosition(positionsArray: number[][]): number[]{
        const x = Math.floor(Math.random() * rows);
        const y = Math.floor(Math.random() * cols);
        const position = [x, y];
        if(positionsArray.some(([x, y]) => x === position[0] && y === position[1])){
            return generateRandomPosition(positionsArray);
        }
        return position;
    }
    function handleMineClicked({
        x,
        y
    } : Cell){
        setUserGame({
            ...userGame,
            lose: true
        })
        const newMatrix = matrix.map((row) => row.map((cell) => ({...cell})));
        newMatrix[x][y].visible = true;
        setMatrix(newMatrix);
    }
    function handleCellClicked({
        x,
        y
    }: Cell){
        setUserGame({
            ...userGame,
            cellsClicked: cellsClicked + 1
        })
        const nearMinesCount = Array(3).fill(0).reduce((count, curr, i)=>{
            const rowCounter = Array(3).fill(0).reduce((rowCount, curr, j)=>{
                const currentPosition = [(x - 1 + i) , (y - 1 + j)];
                const isMine = minesPositions.some((position) => position.join(',') === currentPosition.join(','))
                if(isMine) return rowCount + 1;
                return rowCount;
            }, 0);
            return count + rowCounter;
        }, 0);
        const newMatrix = matrix.map((row) => row.map((cell) => ({...cell})));
        newMatrix[x][y].value = nearMinesCount;
        newMatrix[x][y].visible = true;
        setMatrix(newMatrix);
    }
    function resetGame(){
        setUserGame({
            lose: false,
            win: false,
            cellsClicked: 0,
            totalCells: (rows * cols) - mines,
            rows,
            cols,
            mines
        })
        setMatrix(initialMatrix);
        changeMinesPosition();
    }
    function changeMinesPosition(){
        const positions: number[][] = [];
        while (positions.length < mines) {
            positions.push(generateRandomPosition(positions));
        }
        setMinesPositions(positions);
    }
    function handleChangeDifficulty(difficulty: 'easy' | 'medium' | 'hard'){
        const newUserGame = {
            ...userGame
        }
        const newValues = {
            rows: 0,
            cols: 0,
            mines: 0
        }
        switch(difficulty){
            case 'easy':
                newValues.rows = 3;
                newValues.cols = 3;
                newValues.mines = 1;
                break;
            case 'medium':
                newValues.rows = 5;
                newValues.cols = 5;
                newValues.mines = 3;
                break;
            case 'hard':
                newValues.rows = 10;
                newValues.cols = 10;
                newValues.mines = 10;
                break;
            default:
                break;
        }
        newUserGame.rows = newValues.rows;
        newUserGame.cols = newValues.cols;
        newUserGame.mines = newValues.mines;
        newUserGame.totalCells = (newValues.rows * newValues.cols) - newValues.mines;
        const newMatrix = generateMatrix(newValues.rows, newValues.cols);
        setMatrix(newMatrix);
        setUserGame(newUserGame);
        
    }
    useEffect(()=>{
        changeMinesPosition();
    }, [rows, cols, mines])
    useEffect(()=>{
        if(cellsClicked === totalCells){
            setUserGame({
                ...userGame,
                win: true
            })
        }
    }, [cellsClicked, totalCells])
    return (
        <div className='flex flex-col'>
            <h1 className="text-2xl font-medium text-gray-200 text-center">
                Buscaminas con websockets
            </h1>
            <h2 
                className='text-xl font-medium text-green-600 text-center'
                role='counter'
            >
                Counter {cellsClicked} / {totalCells}
            </h2>
            <div className='flex justify-center gap-2 mt-5 mb-2'>
                <button
                    className={`bg-green-600 text-gray-200 font-bold py-2 px-4 w-[10rem] h-[3rem] rounded inline-flex items-center justify-center ${rows === 3 ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                    onClick={()=> handleChangeDifficulty('easy')}
                >
                    Easy
                </button>
                <button
                    className={`bg-yellow-600 text-gray-200 font-bold py-2 px-4 w-[10rem] h-[3rem] rounded inline-flex items-center justify-center ${rows === 5 ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                    onClick={()=> handleChangeDifficulty('medium')}
                >
                    Medium
                </button>
                <button
                    className={`bg-red-600 text-gray-200 font-bold py-2 px-4 w-[10rem] h-[3rem] rounded inline-flex items-center justify-center ${rows === 10 ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                    onClick={()=>{ handleChangeDifficulty('hard')}}
                >
                    Hard
                </button>

            </div>
            <div className="matrixWrapper w-full overflow-scroll">
                <div className={`matrix reltative grid w-fit gap-2 mx-auto my-4 p-3 overflow-scroll`}>
                    <div className={`fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-900 bg-opacity-80 flex items-center justify-center transition-all duration-300 ${win || lose ? 'opacity-1 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                        {
                            userGame?.lose && (
                                <div className='flex flex-col justify-center'>
                                    <h2 className='text-4xl font-medium text-gray-200 text-center'>
                                        You lose
                                    </h2>
                                    <button 
                                        className='mt-3 bg-green-600 text-gray-200 font-bold py-2 px-4 w-[10rem] h-[3rem] rounded inline-flex items-center justify-center'
                                        onClick={resetGame}
                                    >
                                        Restart
                                    </button>
                                </div>
                            )
                        }
                        {
                            userGame?.win && (
                                <div className='flex flex-col justify-center'>
                                    <h2 className='text-4xl font-medium text-gray-200 text-center'>
                                        You win
                                    </h2>
                                    <button
                                        className='mt-3 bg-green-600 text-gray-200 font-bold py-2 px-4 w-[10rem] h-[3rem] rounded inline-flex items-center justify-center'
                                        onClick={resetGame}
                                    >
                                        Restart
                                    </button>
                                </div>
                            )
                        }
                    </div>
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
                                            if(cell.visible) return;
                                            isMine ? handleMineClicked(matrix[i][j]) : handleCellClicked(matrix[i][j]);
                                        }}
                                    >
                                        <span 
                                            className={!cell.visible ? 'hidden' : ''}
                                            role={isMine ? 'mine' : 'cell'}
                                        >
                                            {isMine ? '💣' : cell.value}
                                        </span>
                                    </button>
                                )
                            })
                        ))
                    }
                </div>
            </div>
            <style jsx>
                {`
                    .matrix {
                        grid-template-columns: repeat(${cols}, 1fr);
                        grid-template-rows: repeat(${rows}, 1fr);
                    }
                    .matrix::-webkit-scrollbar, .matrixWrapper::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
        </div>
    )
}
