import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Beluga from './Beluga'; 
import Blue from './Blue';

export default function Whale() {
  const { search } = useLocation();
  const match = search.match(/type=(.*)/)
  const type = match?.[1];

  const [data, setData] = useState('')
  
  const handleChange = event => setData(event.target.value);
 
  return (
    <>
      <h2>Whale</h2>
      <div>
        <input type="text" value={data} onChange={handleChange}></input>
        {/* <button onClick={}>Send</button> */}
      </div>
      {type === 'beluga' && <Beluga name="John"/>}
      {type === 'blue' && <Blue />}
    </>
  );
}