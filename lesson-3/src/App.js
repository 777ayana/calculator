import React, { useState } from 'react';

const App = () => {
  const btnArr = [
    '1','2','3',
    '4','5','6',
    '7','8','9',
    '0','AC','c','=',
    '+','-','.','*','/'
  ] 
  const [result, setResult] = useState('')
  const getNum =(element) => setResult ( result + element)
  const allClear = ()=> setResult('')
  const clear = () => setResult(result.substring(0, result.length -1))
  const calc = () => setResult(eval(result))

  const checkBtn = (element) => {
    if(element == 'AC'){
       return allClear()
    }
    if(element == 'c'){
      return clear()
    }
    if(element == '='){
      return calc()
    }



    getNum(element)
  }
  
  
  return (
    <div>
      {/* <textarea value={result} disabled={true} cols="30" rows="10"></textarea> */}
      <input value={result} disabled={true} type='text'/><br />
      {
        btnArr.map((el,index) => (
          <button onClick={() => checkBtn(el)} key={index}>{el}</button>

        ))
      }
    </div>
  );
};

export default App;