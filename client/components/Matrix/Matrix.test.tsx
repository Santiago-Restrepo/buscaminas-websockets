import { Matrix } from './Matrix';
import { render, waitFor, fireEvent } from '@testing-library/react';

describe('Matrix component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should render', () => {
        render(<Matrix />);
    });
    it('should have "Minesweeper" as title', () => {
        const { getByText } = render(<Matrix />);
        expect(getByText('Minesweeper')).toBeInTheDocument();
    });
    it('should render 10x10 matrix of buttons', () => {
        const { getAllByRole } = render(<Matrix initialRows={10} initialCols={10}/>);
        expect(getAllByRole('button')).toHaveLength(100);
    });
    it('should render 10 mines', () => {
        const { getAllByText } = render(<Matrix initialRows={10} initialCols={10} initialMines={10}/>);
        expect(getAllByText('💣')).toHaveLength(10);
    });
    it('should render 10 mines in different positions', () => {
        const { getAllByText } = render(<Matrix initialRows={10} initialCols={10} initialMines={10}/>);
        const mines = getAllByText('💣');
        const minesPositions = mines.map((mine) => {
            const { parentElement } = mine;
            if(!parentElement) throw new Error('Parent element not found');
            const x = parentElement.getAttribute('data-x');
            const y = parentElement.getAttribute('data-y');
            return [x, y];
            
        });
        const minesPositionsSet = new Set(minesPositions.map((position) => position.join(',')));
        expect(minesPositionsSet.size).toBe(10);
    });
    it('should remove child hidden class when some button is clicked', async () => {
        const { getAllByRole } = render(<Matrix initialRows={10} initialCols={10} initialMines={10}/>);
        const buttons = getAllByRole('button');
        const button = buttons[0];

        fireEvent.click(button);
        
        const span = button.querySelector('span');
        //Delay to wait for the animation
        await waitFor(() => {
            expect(span?.classList.contains('hidden')).toBe(false);
        });
    });
    it('should show "You lose" when a mine is clicked', async () => {
        const { getAllByText, getByText } = render(<Matrix initialRows={10} initialCols={10} initialMines={10}/>);
        const mines = getAllByText('💣');
        const firstMine = mines[0];
        const button = firstMine.parentElement;
        if(!button) throw new Error('Parent element not found')
        fireEvent.click(button);
        const youLose = getByText('You lose');
        await waitFor(() => {
            expect(youLose).toBeInTheDocument();
        });
    });
    it('should increment counter when a cell without a bomb is clicked', async ()=>{
        const { getAllByRole, getByRole } = render(<Matrix initialRows={10} initialCols={10} initialMines={10}/>);
        const cells = getAllByRole('cell');
        const totalCells = cells.length;
        const iterations = totalCells > 10 ? 10 : totalCells
        const counter = getByRole('counter');
        for (let index = 0; index < iterations; index++) {
            const cell = cells[index];
            const button = cell.parentElement;
            if(!button) throw new Error('No parent element');
            fireEvent.click(button);
            await waitFor(() => {
                expect(counter.innerHTML).toContain(`${index + 1} / ${totalCells}`)
            });
        }
    });
    it('should increment counter just one time when a cell without a bomb is clicked', async ()=>{
        const { getAllByRole, getByRole } = render(<Matrix initialRows={10} initialCols={10} initialMines={10}/>);
        const cells = getAllByRole('cell');
        const totalCells = cells.length;
        const cell = cells[0];
        const button = cell.parentElement;
        if(!button) throw new Error('No parent element');
        fireEvent.click(button);
        await waitFor(() => {
            expect(getByRole('counter').innerHTML).toContain(`1 / ${totalCells}`)
        });
        fireEvent.click(button);
        await waitFor(() => {
            expect(getByRole('counter').innerHTML).toContain(`1 / ${totalCells}`)
        });
    });
    it('should show nearest mines counter inside cell when random cell is clicked', async ()=>{
        const { getAllByRole, getAllByText } = render(<Matrix initialRows={10} initialCols={10} initialMines={10}/>);
        const cells = getAllByRole('cell');
        const randomCell = cells[Math.floor(Math.random() * cells.length)];
        const button = randomCell.parentElement;
        if(!button) throw new Error('No parent element');
        //Get cell position
        let x = button.getAttribute('data-x') ? parseInt(button.getAttribute('data-x') as string) : -1
        let y = button.getAttribute('data-y') ? parseInt(button.getAttribute('data-y') as string) : -1
        if(x === -1 || y === -1) throw new Error("no x or y attribute found")
        //Get mines and their positions
        const mines = getAllByText('💣');
        const minesPositions = mines.map((mine) => {
            const { parentElement } = mine;
            if(!parentElement) throw new Error('Parent element not found');
            const x = parentElement.getAttribute('data-x');
            const y = parentElement.getAttribute('data-y');
            return [x, y];
            
        });
        fireEvent.click(button);
        //Get near mines count
        const nearMinesCount = Array(3).fill(0).reduce((count, curr, i)=>{
            const rowCounter = Array(3).fill(0).reduce((rowCount, curr, j)=>{
                const currentPosition = [(x - 1 + i) , (y - 1 + j)];
                const isMine = minesPositions.some((position) => position.join(',') === currentPosition.join(','))
                if(isMine) return rowCount + 1;
                return rowCount;
            }, 0);
            return count + rowCounter;
        }, 0);
        await waitFor(() => {
            expect(randomCell.innerHTML).toBe(String(nearMinesCount));
        });
    })

});