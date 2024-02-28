import React from 'react';


// 34
// function App() {
// function show1() {
//     alert(1);
//   }
//   function show2() {
//     alert(2);
//   }
//   function show3() {
//     alert(3);
//   }

//   return <div>

//     <button onClick={show1}>button 1</button>
//     <button onClick={show2}>button 2</button>
//     <button onClick={show3}>button 3</button>
//   </div>;
//   }

// class App extends React.Component {
//   handleClick(event) {
//     console.log(event);
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>Нажмите на меня</button>
//     );
//   }
// }

// 35.2
// class App extends React.Component {
//   handleClick(event) {
//     console.log(event.target);
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>Нажмите на меня</button>
//     );
//   }
// }

// 36.2
//   function func(arg, arg2, event) {
//     console.log(arg, arg2, event);
//   }
//   return <div>
//     <button onClick={event => func('eee', 'aaa'. event)}>act</button>
//   </div>;
// }
// 36.3
//   function func(event, arg) {
//     console.log(arg, event);
//   }  
//   return <div>
//     <button onClick={event => func('eee', event)}>act</button>
//   </div>;
// }
// 36.4
// function func(arg, event, arg2) {
//   console.log(arg, arg2, event);
// }
// return <div>
//   <button onClick={event => func('eee', 'aaa', event)}>Нажмите на меня</button>
// </div>;

// 37
//   const arr = [
//     <li>1</li>,
//     <li>2</li>,
//     <li>3</li>,
//     <li>4</li>,
//     <li>5</li>,
//   ];
// return <ul>
// {arr}
// </ul>
// };

// 38
//   const arr = [];
  
//   for (let i = 1; i <= 5; i++) {
//     arr.push(<li>{i}</li>);
//   }
  
//   return <ul>
//     {arr}
//   </ul>;

// 39
// const arr = ['a', 'b', 'c', 'd', 'e'];
  
// const res = arr.map(function(item) {
//   return <li>{item}</li>;
// });
  
// return <ul>
//   {res}
// </ul>;

// 40
// const arr = ['a', 'b', 'c', 'd', 'e'];
  
// const res = arr.map(function(item, index) {
//   return <li key={index}>{item}</li>;
// });
  
// return <ul>
//   {res}
// </ul>;

// //41
// const users = [
//     {name: 'user1', surn: 'surn1', age: 30},
//     {name: 'user2', surn: 'surn2', age: 31},
//     {name: 'user3', surn: 'surn3', age: 32},
// ];
// const res = users.map(function(item, index) {
//   return <li key={index}>
//   <span>{item.name}</span>:
//   <span>{item.surn}</span>:
//      <span>{item.age}</span>
//   </li>;
// });
  
// return <ul>
//   {res}
// </ul>;

   

// 42
// const users = [
//  {id: 1, name: 'user1', surn: 'surn1', age: 30},
//  {id: 2, name: 'user2', surn: 'surn2', age: 31},
//  {id: 3, name: 'user3', surn: 'surn3', age: 32},
//    ];
//    function App() {
//  const userList = users.map((user) => (
//   <li key={user.id}>
//    <span>{user.name}</span> <span>{user.surn}</span> <span>{user.age}</span>
//   </li>
//  ));
   
//  return (
//   <div>
//    <ul>
//     {userList}
//    </ul>
//   </div>
//  );

// }



//43
const users = [
	{id: 1, name: 'user1', surn: 'surn1', age: 30},
	{id: 2, name: 'user2', surn: 'surn2', age: 31},
	{id: 3, name: 'user3', surn: 'surn3', age: 32},
	  ];
	  
	  function App() {
	const rows = users.map((user) => (
	 <tr key={user.id}>
	  <td>{user.id}</td>
	  <td>{user.name}</td>
	  <td>{user.surn}</td>
	  <td>{user.age}</td>
	 </tr>
	));
	  
	return (
	 <table>
	  <thead>
	   <tr>
	 <th>ID</th>
	 <th>Name</th>
	 <th>Surname</th>
	 <th>Age</th>
	   </tr>
	  </thead>
	  <tbody>
	   {rows}
	  </tbody>
	 </table>
	);
	  }



export default App;
