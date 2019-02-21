import React from 'react';
import './TicTacToe.scss';
import styled from 'styled-components';

const Tile = styled.div`
    height: 21rem;
`

const GridStyled = styled.div`
    column-count: 2;
    column-gap: 20px;
    break-inside: avoid;
    @media (max-width: 638px) {
        column-count: 1;
      }
`

const InfoButton = styled.button`
    border: 1px solid;
    border-color: black;
    color: black;
    background-color: white;
    width:7rem;
    &:hover {
        cursor: pointer;
    }
`

const SquareStyled = styled.div`
    background: #fff;
    border: 2px solid #999;
    float: left;
    font-size: 4rem;
    font-weight: bold;
    line-height: 7rem;
    height: 7rem;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 7rem;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 700px) {
        line-height: 5rem;
        height: 5rem;
        width: 5rem;
    }
    @media (max-width: 1121px) {
        line-height: 6rem;
        height: 6rem;
        width: 6rem;
    }

    
`

function Square(props){
    return (
        <SquareStyled onClick={props.onClick}>
        {props.value}
        </SquareStyled>
    )
}

class Board extends React.Component {

renderSquare(i) {
    return (
        <Square 
            value={this.props.squares[i]}  
            onClick={() => this.props.onClick(i)}
        />
    );
}

render() {      
    return (
        <div>
        <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
        </div>
    );
}
}

class Game extends React.Component {
constructor(props){
    super(props);
    this.state = {
        history: [{
            squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
    };
}

handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
        return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
        history: history.concat([{
            squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
    });
}

jumpTo(step) {
    this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
    });
}

render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <InfoButton onClick={() => this.jumpTo(move)}>
                    {desc}
                </InfoButton>
            </li>
        );
    });

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
        <section id="TicTacToe">
            <header className="major">
                <h2>Tic-Tac-Toe</h2>
            </header>
            <p>This example touches on React concepts including elements, components, props, and state.</p>
            <GridStyled>
                <Tile>
                    <Board 
                        squares = {current.squares}
                        onClick = {(i) => this.handleClick(i)}
                    />
                </Tile> 
                
                <Tile>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </Tile>
            </GridStyled>
        </section>
    );
}
}

function calculateWinner(squares) {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}
  
export default Game;