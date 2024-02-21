import React from 'react';


function App() {
	let text;
	const isAdult = false;
	if (isAdult) {
		text = <p>Добро пожаловать на сайт </p>
		}
		

	return (
	  <div>
		{text}
	  </div>
	)
  }


  



export default App;
