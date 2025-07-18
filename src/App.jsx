import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

function App() {
  const[activeUser,setActiveUser]=useState('X'); //lifting state up
  
  function handleActiveUser(){
    setActiveUser((userSymbol)=>userSymbol==='X' ? 'O' :'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={activeUser==='X'} />
          <Player initialName="Player2" symbol="O" isActive={activeUser==='O'} />
        </ol>
        <GameBoard onSelectSquare={handleActiveUser} currentActiveSymbol={activeUser}/>
      </div>
      LOG
      
    </main>
  )
}

export default App
