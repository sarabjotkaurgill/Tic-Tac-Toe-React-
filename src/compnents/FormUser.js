import React, { Component } from 'react'
import Square from './Square';

export class FormUser extends Component {

    constructor(props) {
        super(props) 
            this.state= {
                name1: '',
                familyname1: '',
                name2: '',
                familyname2: '',
                squares: Array(9).fill(null),
                xIsNext: true,          
            }
        }

        handleClick(i) {
            const squares = this.state.squares.slice();
            if (calculateWinner(squares) || squares[i]) {
              return;
            }
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
              squares: squares,
              xIsNext: !this.state.xIsNext,
            });
          }

          renderSquare(i) {
            return (
              <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
              />
            );
          }

        changeName1Handler=(event)=>{
            this.setState({
                name1: event.target.value
            })
        }
        changeFamilyName1Handler=(event)=>{
            this.setState({
                familyname1: event.target.value
            })
        }
        changeName2Handler=(event)=>{
            this.setState({
                name2: event.target.value
            })
        }
        changeFamilyName2Handler=(event)=>{
            this.setState({
                familyname2: event.target.value
            })
        }
        handleSubmit=()=>{
            if(this.state.name1 == "" || this.state.name1 == undefined || this.state.familyname1 == "" || this.state.familyname1 == undefined ||
               this.state.name2 == "" || this.state.name2 == undefined || this.state.familyname2 == "" || this.state.familyname2 == undefined){
               alert('Please enter all fields!')
            } else {
                console.log(this.state);
                var item = document.getElementById("form");
                item.parentNode.removeChild(item);
                document.getElementById("gamee").style.visibility = "visible"; 
            }
            }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        let name;
        if (winner) {
            if(winner == 'X') {
                  name = this.state.name1;
            } else {
                name = this.state.name2;
            }
          status = 'Winner: ' + name;
        } else {
          if(this.state.squares[0] != null && this.state.squares[1] != null && this.state.squares[2] != null && this.state.squares[3] != null &&
            this.state.squares[4] != null && this.state.squares[5] != null && this.state.squares[6] != null && this.state.squares[7] != null &&
            this.state.squares[8] != null) {
              status = 'Game Draw';
            } else {
             status = 'Turn: Player  ' + (this.state.xIsNext ? this.state.name1 + ' (X)' : this.state.name2 + ' (O)');
            }
        }

        return (
            <div>
            <div id="form">
                <form onSubmit={this.handleSubmit}>
                    <h1>TIC TAC TOE</h1>
                    <p><b>Player 1</b></p>
                    <p>Enter your Name:</p>
                    <input type='text' value={this.state.name1} onChange={this.changeName1Handler} />
                    <p>Enter your Family Name:</p>
                    <input type='text' value={this.state.familyname1} onChange={this.changeFamilyName1Handler} />
                    <p><b>X</b></p>
                    <p><b>Player 2</b></p>
                    <p>Enter your Name:</p>
                    <input type='text' value={this.state.name2} onChange={this.changeName2Handler} />
                    <p>Enter your Family Name:</p>
                    <input type='text' value={this.state.familyname2} onChange={this.changeFamilyName2Handler} />
                    <p><b>O</b></p>
                    <input type="submit" value="Submit" />
                </form>
                </div>

                <div className="game" id="gamee" style={{ visibility: "hidden" }}>
                    <h1>TIC TAC TOE</h1>
                    <div className="game-board">
                        <div className="main">
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
                   </div>
                   <div className="game-info">
                        <div>{/* status */}</div>
                            <ol>{/* TODO */}</ol>
                    </div>
                 </div>
            </div>
        )
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

export default FormUser
