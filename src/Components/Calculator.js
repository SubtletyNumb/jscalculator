import '../style-sheets/Calculator.css';
import Button from './Button';
import Display from './Display';
import { PiDivideThin, PiXThin, PiMinusLight, PiPlusThin, PiEqualsThin,
   PiBackspaceThin, PiPercentThin, PiPlusMinusThin } from 'react-icons/pi';
import {LiaSquareRootAltSolid} from 'react-icons/lia'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch} from 'react-redux';
import { addInput, getResult, removeInput, clear, plusMinus} from '../Features/calculatorSlice/calculatorSlice';
const Calculator = ({}) => {
  
  const dispatch = useDispatch();
  return(
    <div className="calculator">
      <Display/>
      <div className='buttons-container'>
      <div className='row'>
          <Button content={<PiPercentThin />} style={{fontSize: 15}} isOperator={true} handleClic={() => addInput('%')} />
          <Button id={'clear'} content={'CE'} style={{fontSize: 14}} isOperator={true} handleClic={() => clear('e')}/>
          <Button content={'C'} style={{fontSize: 14}} isOperator={true} handleClic={()=> clear('')} />
          <Button content={<PiBackspaceThin />}isOperator={true} style={{fontSize: 16}}  handleClic={() => removeInput()}/>
        </div>
        <div className='row'>
          <Button content={<LiaSquareRootAltSolid style={{color: '#777777'}}/>} isOperator={true} handleClic={()=> addInput('√')} />
          <Button content={'('} isOperator={false} handleClic={() => addInput('(')} />
          <Button content={')'} isOperator={false} handleClic={() => addInput(')')} />
          <Button  id={'divide'} content={'/'} style={{fontSize: 19}}isOperator={true} handleClic={()=> addInput('/')} />
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
          <Button content={<PiPlusMinusThin />} style={{fontSize: 18}} isOperator={false} handleClic={()=> plusMinus()}/>
          <Button id={'zero'} content={'0'} isOperator={false} handleClic={() => addInput('0')} />
          <Button id={'decimal'} content={'.'} isOperator={false} handleClic={() => addInput('.')} />
          <Button id={'equals'} content={'='}isOperator={false} equal={true} handleClic={()=> getResult()} />
        </div>
      </div>
    </div>
  )
}

export default Calculator;