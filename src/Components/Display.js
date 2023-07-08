import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import '../style-sheets/Display.css';
const Display = () => {
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const {displayText, innerOperation} = useSelector((state) => state.calculator);
  useEffect(()=>{
    setInput(displayText);
    setOutput(innerOperation);
  },[displayText, innerOperation])
  return(
    <div id="display">
      <p className='result'>{output}</p>
      <p id='operation-display' className='operation'>{input}</p>
    </div>
  )
}
export default Display;