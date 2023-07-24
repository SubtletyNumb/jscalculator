// import { createSlice } from "@reduxjs/toolkit";
// import { evaluate, compile, re} from "mathjs";
// import Display from "../../Components/Display";
// import { faL } from "@fortawesome/free-solid-svg-icons";


// const initialState = {
//   displayText: '0',
//   innerOperation: '',
//   result: '',
//   clearInput: false,
//   clearInnerOperation: false,
// }

// const getFilteredOperationString = (string) => {
//   return string.replace(/√/g, 'sqrt')
//   .replace(/x/g, '*')
//   .replace(/÷/g, '/')
//   .replace(/,/g, '.');  
// }
// let getOpenBrackets = (string) =>string.split('').filter(el => el === '(').length;
// let getClosedBrackets = (string) =>string.split('').filter(el => el === ')').length;

// const calculatorSlice = createSlice({
//   name: 'calculatorSlice',
//   initialState,
//   reducers:{
//     addInput: (state, {payload}) => {
//           console.log(payload);

//       if(/[\D]/.test(payload) === false && payload !== ','){
//         console.log('number added')
//         if(state.clearInput){
//           state.displayText = payload;
//           state.clearInput = false;
//         }else{
//           if(state.displayText.charAt(0) === '0' && state.displayText.charAt(1) !== '.'){
//            state.displayText = payload;
//             return;
//           }  
//           state.displayText += payload;
//           state.clearInput = false;
//           return;
//         }
//       }else if(/\D/.test(payload)){

//          //if the argument is a colon we need to make sure to add just one in a single part of the operation
//   if(payload === '.'){
//     console.log('colon')
//     let numOfColons = state.displayText.match(/\./g);
//     if(numOfColons === null) numOfColons = 0;
//     if(numOfColons < 1){
//       console.log(numOfColons)
//       numOfColons += 1;
//       state.displayText += '.';
//       // return;
//     }
//   }
//         //Logic when we insert an operator and is not a bracket
//         if(payload !== ')' && payload !== '(' && payload !== '.'){
//           if(state.clearInnerOperation){
//             state.innerOperation = state.displayText + payload;
//             state.clearInnerOperation = false;
//             state.clearInput = true;
//             return;
//           }
//           if(state.displayText.length === 1 && state.displayText.slice(-1) === '0' && state.innerOperation.length <= 1){
//             if(payload === '√'){
//             state.innerOperation = payload + '(0)';
//             state.clearInput = true;
//             console.log('square root at 0')
//             return;
//             }else{
//               state.innerOperation = '0' + payload;
//               state.clearInput = true;
//               console.log('string changed to 0 + operator')
//             }
//           }
//         if(state.clearInput === false && state.innerOperation.slice(-1) !== ')'){
//           if(payload === '%'){
//             state.innerOperation += state.displayText + payload + 'x';
//             state.displayText = '0'
//             state.clearInput = true;
//             return;
//           }else if(payload === '√'){
//             console.log('square?')
//             state.displayText = `${payload}(${state.displayText})`;
//             state.innerOperation += state.displayText;
//             state.displayText = '0';
//             state.clearInput = true;
//             console.log(state.innerOperation)
//           }else if(payload === '-'){
//             console.log('minus')
//             state.displayText += payload;
//             state.innerOperation += state.displayText;
//             state.displayText = state.displayText.slice(0,-1);
//             state.clearInput = true;
//           }else{
//           state.displayText += payload;
//           state.innerOperation += state.displayText;
//           state.displayText = state.displayText.slice(0,-1);
//           state.clearInput = true;
//           console.log('operator added')
//           }
//         }
//         if(state.clearInput){
//           console.log(state.innerOperation + ' on clear input')
//           if(state.innerOperation.slice(-1) === ')' && state.innerOperation.match(/√\(\d+\)$/) === null){
//             state.innerOperation = state.innerOperation + payload;
//           }else if(state.innerOperation.match(/√\(\d+\)$/) && payload !== '√'){
//             console.log('square at most ')
//             state.innerOperation = state.innerOperation + payload;
//           }else if(payload === '-' && state.innerOperation.slice(-1) !== payload){
//             console.log('minus');
//             state.innerOperation += payload;
//           }else if(state.innerOperation.match(/\d+\D{2,2}$/)){
//             console.log('wtf')
//             console.log(state.innerOperation.match(/\d+\D*$/))
//            state.innerOperation = state.innerOperation.slice(0, 1) + payload; 
//           }else{
//             if(state.innerOperation.match(/√\(\d+\)$/) === null){
//               state.innerOperation = state.innerOperation.slice(0,-1) + payload;
//               console.log('clearInput')
//             }
//           }
//         } 

//         console.log('operator' + state.clearInput);
//           //End of logic when we insert an operator that is not a bracket.

//           //Logic when we start adding brackets
//         }else if(payload === ')'){
//           if(getOpenBrackets(state.innerOperation) > getClosedBrackets(state.innerOperation)){
//             if(state.innerOperation.slice(-1) === ')'){
//               state.innerOperation += ')';
//             }else if(state.innerOperation.slice(-1) === '('){
//               state.displayText += payload;
//               state.innerOperation += state.displayText;
//               state.displayText = state.displayText.slice(0,-1);
//             }else if(state.innerOperation.slice(-1).match(/[+-÷x√%/]/) !== null){
//               state.displayText += payload;
//               state.innerOperation += state.displayText;
//               state.displayText = '0';
//             }
//             state.clearInput = true;
//           }

//           //When adding opening brackets
//         }else if(payload === '('){
//           if(state.displayText.length === 1 && state.displayText.slice(-1) === '0' && state.innerOperation.length <= 1){
//             state.displayText = payload;
//             state.innerOperation += payload;
//             state.displayText = '0';
//           }else{
//             if(state.innerOperation.slice(-1) === ')'){
//               state.innerOperation += 'x' + '(';
//               return;
//             }else if(state.innerOperation.slice(-1) === '('){
//               state.innerOperation += payload;
//               return;
//             }else if(state.innerOperation.slice(-1).match(/[+-÷x√%/]/) !== null){
//               state.innerOperation += payload;
//               state.displayText = '0';
//             }
//           }
//       }
//           if(state.innerOperation.match(/\d[+-÷x√%/]$/) !== null || state.innerOperation.match(/\d*\)$/) !== null){
//             if(payload !== '.'){
//             console.log(state.innerOperation + 'b4 result');
//           let result = getFilteredOperationString(state.innerOperation);
//           if(result.match(/\(\d*\D*$/) && result.match(/sqrt\(\d+\)$/) === null){
//             console.log(result)
        
//           }
//           if((getOpenBrackets(result) === getClosedBrackets(result)) === false){
//             while(getOpenBrackets(result) > getClosedBrackets(result)){
//               result += ')';
//             }
//             return;
//           }
//           if(result.match(/[[+-÷*√%/]$/) !== null && result.match(/sqrt\(\d*$/) === null){
//             console.log('substracted')
//             console.log(result);
//             result = result.slice(0,-1);
//             return;
//           }
//           console.log(result);
//           console.log('operation result: ' + evaluate(result));
//           state.displayText = String(evaluate(result))
//           return;
//         }
//       }
//        //if the argument is an operator we will call the function setInnerOperation
//   }
 

//   },
//   //End of Add Input
//   removeInput: (state) => {
//     if(state.displayText.length === 1 || state.displayText.charAt(0) === '-'){
//       state.displayText = '0'
//       return;
//     }
//     state.displayText = state.displayText.slice(0, -1);
//   },

//   getResult: (state) => {
//     console.log('equals pressed')
//     if(state.innerOperation.slice(-1) === '=') return;
//     if(state.displayText.length === 1 && state.innerOperation.length < 1){
//       state.innerOperation = state.displayText + '=';
//       state.clearInput = true;
//       return;
//     }
//     if(state.innerOperation.slice(-1).match(/[+-÷x√%/]/)){
//       state.innerOperation += state.displayText;
//     }
//     if(getOpenBrackets(state.innerOperation) > getClosedBrackets(state.innerOperation)){
//       if(state.innerOperation.slice(-1) !== ')'){
//         state.innerOperation += state.displayText;
//       }
//       console.log(state.displayText)
//       while(getOpenBrackets(state.innerOperation) > getClosedBrackets(state.innerOperation)){
//           state.innerOperation += ')'
//     }
//     state.innerOperation += '='
//     return;
//   }
//     if(state.displayText.charAt(0) === '0' && state.innerOperation.length < 1 || state.innerOperation.match(/0=/)){
//       state.displayText = '0';
//       state.clearInput = true;
//       state.innerOperation = '0=';
//       return;
//     }
 
//    document.getElementById('operation-display').innerText = String(evaluate(state.innerOperation));
//     state.innerOperation += '=' + String(evaluate(state.innerOperation));
//     state.clearInnerOperation = true;
//   },
//   clear: (state, {payload}) => {
//     if(payload === 'e'){
//       state.displayText = '0';
//       state.innerOperation = ''; 
//     }
//     state.displayText = '0';
//   },
//   plusMinus: (state) => {
//     //if the first char of the input is a zero and the length is 1 we would not add a hyphen
//     if(state.displayText.length === 1 && state.displayText.charAt(0) === '0') return;

//     //if the last part of the input is currenly negative
//     if(state.displayText.match(/-\d+$/) !== null){
//       //we will do the number positive 
//      state.displayText = state.displayText.replace(/-{0,1}\d+$/, (match) => match.slice(1))
//     }else{
//       //else we put it as negative
//       state.displayText = state.displayText.replace(/\d+$/, (match) => '-' + match);
//     }
//   }
// }
// })

// export default calculatorSlice.reducer;
// export const {addInput, removeInput, getResult, clear, plusMinus} = calculatorSlice.actions;