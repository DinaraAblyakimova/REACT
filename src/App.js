import React from 'react';


function App() {
	let text;
	const isAdult = true;
	if (isAdult) {
		text = <p>Добро пожаловать на сайт </p>
		}
		else {
			text = <p>Вам нет 18 </p>
		}
	
	return (
	  <div>
		{text}
	  </div>
	)
  }
  



export default App;
