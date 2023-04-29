import React from 'react'

const Die = (props) => {

  const style = {
    backgroundColor:props.isHeld? "#59E391" : "white"
  }

  return (
      <>
      <div className='single-dice'
        style={style}
        onClick={props.holdDice}>
        <h2 className='dice-font'>{props.value}</h2>
      </div>
      </>
  )
}

export default Die