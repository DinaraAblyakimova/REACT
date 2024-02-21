import React from 'react';


function App() {
	const obj = {name: 'john', surname: 'smit'};
	
	return <div>
		<p>name: {obj.name}</p>
		<p>surname: {obj.surname}</p>
	</div>;
}

export default App;
