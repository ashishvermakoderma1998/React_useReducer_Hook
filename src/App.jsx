import { useReducer, useState } from 'react'
import './App.css'

const initialScore = [
  {
    id: 1,
    score: 0,
    name: "Ashish"
  },

  {
    id: 2,
    score: 0,
    name: "Suraj"
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
    return state.map((player)=> {
      if (player.id === action.id){
        return {...player, score: player.score + 1};
      }else {
        return player;
      }
    });
    default:
      return state;
  }
}



function App() {
  const [score, dispatch] = useReducer(reducer, initialScore);

  const handleIncrease = (player)=> {
    dispatch({type: "increase", id: player.id})
  }

  return (
    <>
    {score.map((player)=> (
      <div key={player.id}>
        <label>
          <input type="button" 
          style={{color:"red",marginLeft:"15px"}}
          onClick={() => handleIncrease(player)}
          value={player.name}
          />
          {player.score}
        </label>
      </div>
    ) )}
    </>
  )
}

export default App
