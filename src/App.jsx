import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from './Dice'
import { nanoid } from 'nanoid'
function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzie, setTenzie] = useState()

  useEffect(() => {
    const allHeld = dice.every(ele => ele.isHeld === true)
    const firstValue = dice[0].value
    const allSameValue = dice.every(ele => ele.value === firstValue)
    if (allHeld && allSameValue) {
    setTenzie(true)
  }}
    , [dice])
  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const diceList = []
    for (let i = 0; i < 10; i++) {
      diceList.push(generateNewDice())
    }
    return diceList
  }

  function rollDice() {
    if(!tenzie) {
      setDice(oldDice => oldDice.map(ele => {
        return ele.isHeld? ele : generateNewDice()
      }))
    }
    else {
      setTenzie(false)
      setDice(allNewDice())
    }
  }


  const diceElement = dice.map(ele => <Dice value={ele.value} key={ele.id} isHeld={ele.isHeld}
    holdDice={() => { holdDice(ele.id) }} />)



  function holdDice(id) {
    setDice(oldDice => oldDice.map(dice => {
      return dice.id === id? {...dice,isHeld:!dice.isHeld} :dice
    }))
    // console.log(id)
  }



  return (
    <div className="container">
      <main className='main'>

        <section>
          <h1>Tenzies</h1>
          <p>Roll Deices untill you get all the same numbers</p>
          <div className="diceContainer">
            {diceElement}
          </div>
          <button className='button' onClick={rollDice}>
            {tenzie ? "New Game" : "Let's Roll"}</button>
        </section>
      </main>
    </div>
  )
}

export default App
