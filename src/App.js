import React, { useReducer } from "react"
import actions from "./actions.js"


const initial = {
  count: 0
}


  const Increment= 'increment'
  const Decrement= 'decrement'
  const Reset= 'reset'


function reducer(state, action) {
  switch (action.type) {
      case Increment:
      return { count: state.count + 1 }
      case Decrement:
      return { count: state.count - 1 }
      case Reset:
      return { count: 0 }
      default:
      return state
  }
}


export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

function increment() {
  dispatch({ type: Increment })
}

function decrement() {
  dispatch({ type:Decrement })
}

function reset() {
  dispatch({ type: Reset})
}

return (
  <div>
    <button onClick={decrement}>-</button>
    <h1>{state.count}</h1>
    <button onClick={increment}>+</button>
    <h1> </h1>
    <button onClick={reset}>Reset</button>
  </div>
)

}
