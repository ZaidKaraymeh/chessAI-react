import {useState, useEffect} from 'react'
import Pawn from './Pawn';
import "./App.css"
function App() {

  const [board, setBoard] = useState(() => createBoard())
  const [fen, setFen] = useState({})

  const fenNotation = {
    "k": "king",
    "q": "queen",
    "b": "bishop",
    "n": "knight",
    "r": "rook",
    "p": "pawn",
  }

  const startingPosition = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
  const pawn = "p"

  function createBoard() {
    var [r, c] = [8, 8]; 
    const board = Array(r)
      .fill()
      .map(() => Array(c).fill(0));

    console.log(board);
    return board
  }
  return (
    <div>
        <table>
          <tbody>
            {board.map((row, idx) => {
              
              return (
                <tr>
                  {row.map((cell, idy) => 
                  {
                    var isColor = (idx + idy) % 2 === 0 ? "white" : "black";
                    return  (<td className="cellParent" > <Pawn id={idy} isColor={isColor} key={idy} /> </td>) ;
                  })}
                </tr>
              )
              
            })}
          </tbody>
        </table>
    </div>
  );
}

export default App;
