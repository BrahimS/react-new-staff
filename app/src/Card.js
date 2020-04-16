// React Hooks:
// useState

//import React, { Component } from 'react'

// Class style
// class TestHook extends Component {
// 	state = {
// 		name : 'BS',
// 		age  : 43
// 	}
// 	render () {
// 		const { age, name } = this.state
// 		return (
// 			<div>
// 				<h1>This is React hooks test</h1>
// 				<div>
// 					Name :{' '}
// 					<input
// 						type="text"
// 						value={name}
// 						onChange={(e) => this.setState({ name: e.target.value.toUpperCase() })}
// 					/>
// 					<div>My name is : {name} </div>
// 				</div>
// 				<div> age: {age}</div>
// 				<button onClick={(e) => this.setState({ age: age + 1 })} />
// 			</div>
// 		)
// 	}
// }
// export default TestHook

// Hooks Style -> useState

import React, { useState } from "react";

const TestHook = () => {
	const [name, setName] = useState("Baba");
	const [age, setAge] = useState(43);

	return (
		<div>
			<h1>This is React hooks test</h1>
			<div>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<div>My name is : {name.toUpperCase()} </div>
			</div>
			<div> age: {age}</div>
			<button onClick={() => setAge(age + 1)}> Add one on each click</button>
		</div>
	);
};

export default TestHook;
