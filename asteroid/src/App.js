import React, { useState } from "react";
import axios from "axios"
import "./App.css";

function App() {
  const [showResult,setShowResult] = useState(false);
  const [resultData,setResultData] = useState()

  const [id,setId] = useState('')

  const handleSubmit = (e,type) => {
    e.preventDefault();
    setShowResult(false)
    if(type==='id'){
      setShowResult(false)
      (async () => {
        const data = await axios.get('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=0RNZ7c9c68qCoKeQoO2pzClneCbh5Y2a2WllhMkZ')
      })();
      setShowResult(true)
    }

    if(type==='random'){
      (async () => {
        const data = await axios.get('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=0RNZ7c9c68qCoKeQoO2pzClneCbh5Y2a2WllhMkZ')
        setResultData(data)
        console.log(resultData)  
      })();
      setShowResult(true)
    } 
    
  };

  return (
      <div className="wrapper">
      <h1>Asteroids</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <fieldset>
          <label>
            <p>Id of an Asteroid</p>
            <input name="name" value={id} onChange={(e)=>setId(e.target.value)}/>
          </label>
        </fieldset>
        <div>
          <button onClick={(e)=>handleSubmit(e,'id')}>Submit</button>
          <button onClick={(e)=>handleSubmit(e,'random')} type='submit'>Random Submit</button>
        </div>
      </form>
      {
        resultData && <div>
          <p>Name : {resultData.data.name}</p>
          
        </div>
      }
    </div>
  );
}

export default App;