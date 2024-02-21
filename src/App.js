import React from 'react';


function App() {
 function getDigitsSum(num) {
  let sum = 0;
  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
   }
   const digitsSum = getDigitsSum(123);
   return <div>
     <div>Digits Sum of 123: {digitsSum}</div>
    </div>



}


  



export default App;
