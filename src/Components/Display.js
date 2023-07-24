import { useEffect } from 'react';
import { useState } from 'react';
import '../style-sheets/Display.css';
const Display = ({output, input}) => {
  // const {displayText, innerOperation} = useSelector((state) => state.calculator);

  // useEffect(()=>{
  //   setInput(displayText);
  //   setOutput(innerOperation);
  // },[displayText, innerOperation])
  return(
    <div id="screen">
      <p className='result'>{output}</p>
      <p id='display' className='operation'>{input}</p>
    </div>
  )
}
export default Display;