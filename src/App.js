import { useState, useEffect } from "react";
import Board from "./components/board";
import Dashboard from "./components/Dashboard";

function App() {
  
  const [cells, setCells] = useState(Array(9).fill(null))
  const [xplaying, setXplaying] = useState(true)
  const [winingMessage, setWiningMessage] = useState(null)
  

  const handleClick = (cellindex) => {
    {const updatedBox = cells.map((value, index) => {
      if(index === cellindex){
        return xplaying === true ? "x" : "o"
      }else {
        return value;
      }
    })
      setCells(updatedBox)
      setXplaying(!xplaying)}
  }

  const checkWinner = () => {
    const winningCondition = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,6],[2,4,8]
    ]
      winningCondition.forEach(array => {
        let xwins = array.every(cell => cells[cell] === "x")
        if (xwins) {
          setWiningMessage("x wins")
          return
        }
      })
      winningCondition.forEach(array => {
        let owins = array.every(cell => cells[cell] === "o")
        if (owins) {
          setWiningMessage("o wins")
          return
        }
      })
  }

    useEffect(() => {
        checkWinner()
    }, [cells])


    const gameOver = () => {
      setCells(Array(9).fill(null))
      setWiningMessage(null)
    }


    const message = xplaying ? "X plays next" : "O plays next"

  return (
    <div className="App">
      <p className = {`message  ${!xplaying ? "xscore" : "oscore"}`}>{winingMessage || message}</p>
      <Dashboard winingMessage={winingMessage} xplaying={xplaying}/>
      <Board board={cells} onClick={winingMessage === null && handleClick}/>  
      
      {winingMessage ? 
      <button className="play-again" onClick={gameOver}>Play Again</button> : 
      <button className="play-again" onClick={gameOver}>Reset game</button>}
    </div>
  );
}

export default App;