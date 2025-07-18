import { useState } from "react";

const initialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard({onSelectSquare,currentActiveSymbol}){
const[gameBoard,setGameBoard]=useState(initialGameBoard);


function handleSelectSquare(rowIndex,colIndex){
    setGameBoard((prevGameBoard)=>{
     const updatedBoard=[...prevGameBoard.map((innerArray)=>[...innerArray])];
     
     updatedBoard[rowIndex][colIndex]=currentActiveSymbol;
     return updatedBoard;
    })
   
    onSelectSquare((currentSymbol)=>currentSymbol==='X'?'O':'X');

}
    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}