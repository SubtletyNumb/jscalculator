import '../style-sheets/Button.css';
const Button = ({content, id, isOperator, handleClic, style, equal}) => {
return(
  <button className={isOperator ? `button operator` : equal ? 'button operator equal' : 'button'} style={style ? style : {}} id={id} onClick={() => handleClic()}>{content}</button>
)
}
export default Button;