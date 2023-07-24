import '../style-sheets/Calculator.css';
import Button from './Button';
import Display from './Display';
import { evaluate, re } from 'mathjs';
import { PiDivideThin, PiXThin, PiMinusLight, PiPlusThin, PiEqualsThin,
   PiBackspaceThin, PiPercentThin, PiPlusMinusThin } from 'react-icons/pi';
import { useState, useEffect } from 'react';
const Calculator = ({}) => {
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');
  const [clearInput, setClearInput] = useState(false);
  const [clearInnerOperation, setClearInnerOperation] = useState(false);
  const [result, setResult] = useState(false);
  useEffect(() => {
    const getResult = () => {
      if(output.length < 1 && input === '0'){
        setOutput('0=0');
        setClearInnerOperation(true);
        return;
      }
      if(output.match(/=/)){
        return;
      }
      if(output.slice(-1).match(/[+-/*]/)){
        setOutput(output.slice(0,-1) + '=' + String(evaluate(output.slice(0,-1))))
        setInput(String(evaluate(output.slice(0,-1))));
        setClearInnerOperation(true)
        return;
      }
      if(input.length === 1 && output.length <= 1){
        setOutput(input + '=')
        setClearInnerOperation(true);
      }
      setInput(String(evaluate(output)));
      setOutput(output + '=' + String(evaluate(output)));
      setClearInnerOperation(true)
    }
    if(result){
      setResult(false);
      getResult();
    }
  },[output, result]);

  //add input function
  const addInput = (payload) => {
    if(/\d/.test(payload) && payload !== '.'){
      if(clearInput){
       setInput(payload)
       setOutput(output + payload);
       setClearInput(false);
      }
      if(clearInnerOperation){
        setInput(payload);
        setOutput(payload);
        setClearInnerOperation(false);
        return;
      }
      if(input.charAt(0) === '0' && payload === '0'){
        return;
      }else{
        setOutput(output + payload);
        if(input.charAt(0) === '0'){
          setInput(payload);
        }else{
          setInput(input + payload);
        }
      }
    }else if(/[+-/*]/.test(payload)){
      if(payload === '.'){
        let numOfColons = input.match(/\./g);
        if(numOfColons === null) numOfColons = 0;
        if(numOfColons < 1){
          numOfColons += 1;
          setInput(input + '.')
          setOutput(output + '.')
        }
        return;
        }
      if(/[+-/*]$/.test(output) === false){
        if(clearInnerOperation){

          setOutput(input + payload);
          setInput('0')
          setClearInnerOperation(false);
          return;
        }
        if(output.length < 1){
          setOutput(input + payload);
          setInput('0');
        
        }else{
          setOutput(output + payload);
          setInput('0');
        }
      }else if(/[+-/*]$/.test(output)){
        if(payload === '-' && output.slice(-1) !== '-'){
          setOutput(output + payload);
        }else if(payload !== '-' && output.slice(-1) !== '-'){
          setOutput(output.slice(0,-1) + payload);
        }else if(payload !== '-' && output.slice(-1) === '-'){
          setOutput(output.slice(0,-2) + payload);
        }
      }
       //if the argument is a colon we need to make sure to add just one in a single part of the operation
 
}
  }
   const clear = (CE) => {
    if(CE){
      setOutput('');
      setInput('0');
      return;
    }
    setInput('0');
   }
   
  return(
    <div className="calculator">
      <Display input={input} output={output}/>
      <div className='buttons-container'>
      <div className='row'>
          <Button  id={'divide'} content={'/'} style={{fontSize: 19}}isOperator={true} handleClic={()=> addInput('/')} />
          <Button id={'clear'} content={'CE'} style={{fontSize: 14, width: 234}} isOperator={true} handleClic={() => clear(true)}/>
        </div>
      <div className='row'>
        </div>
        <div className='row'>
          <Button  id={'seven'} content={'7'} isOperator={false} handleClic={() => addInput('7')} />
          <Button  id={'eight'} content={'8'} isOperator={false} handleClic={() => addInput('8')}/>
          <Button  id={'nine'} content={'9'} isOperator={false} handleClic={() => addInput('9')}/>
          <Button  id={'multiply'} content={<PiXThin />} style={{fontSize: 16}}isOperator={true} handleClic={() => addInput('*')} />
        </div>
        <div className='row'>
          <Button  id={'four'} content={'4'} isOperator={false} handleClic={() => addInput('4')} />
          <Button  id={'five'} content={'5'} isOperator={false} handleClic={() => addInput('5')} />
          <Button  id={'six'} content={'6'} isOperator={false} handleClic={() => addInput('6')} />
          <Button id={'subtract'} content={<PiMinusLight />} handleClic={() => addInput('-')} style={{fontSize: 16, fontWeight: 400}} isOperator={true}/>
        </div>
        <div className='row'>
          <Button id={'one'} content={'1'} isOperator={false} handleClic={() => addInput('1')} />
          <Button id={'two'} content={'2'} isOperator={false} handleClic={() => addInput('2')} />
          <Button id={'three'} content={'3'} isOperator={false} handleClic={() => addInput('3')} />
          <Button id={'add'} content={<PiPlusThin />}isOperator={true} style={{fontSize: 16}}  handleClic={() => addInput('+')} />
        </div>
        <div className='row'>
          <Button id={'zero'} content={'0'} isOperator={false} style={{width: 155}} handleClic={() => addInput('0')} />
          <Button id={'decimal'} content={'.'} isOperator={false} handleClic={() => addInput('.')} />
          <Button id={'equals'} content={'='}isOperator={false} equal={true} handleClic={()=> setResult(true)} />
        </div>
      </div>
    </div>
  )
}

export default Calculator;