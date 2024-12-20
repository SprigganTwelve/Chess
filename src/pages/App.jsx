import Button from "../components/ui/button"
import styles from "./App.module.css"

function App() {

  return (
    <>
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.textContent}>
                  <h1 className={styles.title}>Chess Game</h1>
                  <div className={styles.paragraphs}>
                      <p className={styles.desc}>
                        The chessboard is a battlefield of strategy, where each piece moves with calculated precision. Every turn builds tension, leading to a climactic checkmate that crowns the victor.
                      </p>
                      <p className={styles.greeting}>
                          ♟️ Hello, strategist! Ready to make your next move?
                      </p>
                  </div>
                </div>
                <div className={styles.buttons}>
                      <Button text="Play"/>
                      <Button text="Rules"/>
                      <Button text="News"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
