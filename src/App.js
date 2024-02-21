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
    return <div>
      <div>Digits Sum: {getDigitsSum(12345)}</div>
     </div>



}


  



export default App;
