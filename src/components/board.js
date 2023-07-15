import Cell from "./Cell";

export default function Board({board, onClick}){

    return(
       <div className="board">
        {board.map((value, index) => <Cell  value={value} onClick={() => value === null && onClick(index)}/>)}

       </div>
    )
}