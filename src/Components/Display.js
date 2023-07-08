import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../style-sheets/Display.css';
const Display = () => {
  // const [result, setResult] = useState({result: '0', operation: ''})
  const {displayText, innerOperation} = useSelector((state) => state.calculator);
  // useEffect(()=>{
  //   setResult({result: displayText, operation: innerOperation})
  // },[])
  return(
    <div id="display">
      <p className='result'>{innerOperation}</p>
      <p id='operation-display' className='operation'>{displayText}</p>
    </div>
  )
}
export default Display;