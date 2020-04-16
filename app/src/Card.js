// React Hooks:
// useState

import React, { Component } from 'react'

// Class style
class TestHook extends Component {
	state = {
		name : 'BS',
		age  : 43
	}
	render () {
		const { age, name } = this.state
		return (
			<div>
				<h1>This is React hooks test</h1>
				<div>
					Name :{' '}
					<input
						type="text"
						value={name}
						onChange={(e) => this.setState({ name: e.target.value.toUpperCase() })}
					/>
					<div>My name is : {name} </div>
				</div>
				<div> age: {age}</div>
				<button onClick={(e) => this.setState({ age: age + 1 })} />
			</div>
		)
	}
}
export default TestHook

// Hooks Style

