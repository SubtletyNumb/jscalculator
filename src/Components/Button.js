import '../style-sheets/Button.css';
import { useDispatch } from 'react-redux';
const Button = ({content, id, isOperator, handleClic, style, equal}) => {
  const dispatch = useDispatch();
return(
  <button className={isOperator ? `button operator` : equal ? 'button operator equal' : 'button'} style={style ? style : {}} id={id} onClick={() => dispatch(handleClic())}>{content}</button>
)
}
export default Button;