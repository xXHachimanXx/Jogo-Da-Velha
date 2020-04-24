import React from "react";
import ReactDOM from 'react-dom';
import "./css/style.css";

function Square(props) {

  return (
    <button
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );

}

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(), // Array com todas as posições do tabuleiro
      xIsNext: true,
    }
  }

  renderSquare(i) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); // slice cria uma cópia dos arrays
    squares[i] = this.state.xIsNext? 'X' : 'O';

    this.setState({ squares: squares, xIsNext: !this.state.xIsNext }); // Setar novo valor para vetor de quadrados
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
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
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);
