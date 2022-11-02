import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { charactersSelectors,getCharacters } from './features/characters/charactersSlice';
function App() {
  const dispatch = useDispatch()
  const charactersSelect = useSelector(charactersSelectors)
  const characters = charactersSelect.data
  const [limit,setLimit] = useState(10)
  let [off,setOff] = useState(0) 
  
  useEffect(()=> {
    dispatch(getCharacters({limit : limit,
    off : off}))
  },[off])


 
  return (
    <div className="container">
      {characters.map((character)=> (
        <div>
            <h1>
              {character.name}
            </h1>
        </div>
      ))}
      {(characters.length === 10) && <button onClick={(e)=>{
    e.preventDefault()
    setOff(off + 10)
    console.log(off);
  }}>next</button>}
    </div>
  );
}

export default App;
