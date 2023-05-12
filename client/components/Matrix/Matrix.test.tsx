import { Matrix } from './Matrix';
import { render, waitFor, fireEvent } from '@testing-library/react';

describe('Matrix component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should render', () => {
        render(<Matrix />);
    });
    it('should have "Buscaminas con websockets" as title', () => {
        const { getByText } = render(<Matrix />);
        expect(getByText('Buscaminas con websockets')).toBeInTheDocument();
    });
    it('should render 10x10 matrix of buttons', () => {
        const { getAllByRole } = render(<Matrix rows={10} cols={10}/>);
        expect(getAllByRole('button')).toHaveLength(100);
    });
    it('should render 10 mines', () => {
        const { getAllByText } = render(<Matrix rows={10} cols={10} mines={10}/>);
        expect(getAllByText('💣')).toHaveLength(10);
    });
    it('should render 10 mines in different positions', () => {
        const { getAllByText } = render(<Matrix rows={10} cols={10} mines={10}/>);
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
        const { getAllByRole } = render(<Matrix rows={10} cols={10} mines={10}/>);
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
        const { getAllByText, getByText } = render(<Matrix rows={10} cols={10} mines={10}/>);
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
        const { getAllByRole, getByRole } = render(<Matrix rows={10} cols={10} mines={10}/>);
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
    it('should show nearest mines counter inside cell when cell is clicked', ()=>{
        throw new Error('Pending test')
    })

});