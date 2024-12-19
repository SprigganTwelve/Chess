import './App.css'
import Button from "./components/ui/button"

function App() {

  return (
    <>
        <div className='home'>
            <div>
              <h1>Chess Game</h1>
              <p>
                The chessboard is a battlefield of strategy, where each piece moves with calculated precision. Every turn builds tension, leading to a climactic checkmate that crowns the victor.
              </p>
              <p>
                  ♟️ Hello, strategist! Ready to make your next move?
              </p>
            </div>
            <div>
                  <Button text="Play"/>
                  <Button text="Rules"/>
                  <Button text="News"/>
            </div>
        </div>
    </>
  )
}

export default App
