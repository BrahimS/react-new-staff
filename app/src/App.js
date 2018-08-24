import React, { Component } from 'react'


class Person extends Component {
  render() {
    let { name, age } = this.props
    return (
      <div>
        <p>  Hello my name is: {name} and i am {age}</p>
      </div>
    )
  }
}


export default class App extends Component {
  state = {
    name: "Brahim",
    age: 41,
    cool: true
  }
  render() {
    return (
      <div>
        <Person name={this.state.name}
        age={this.state.age}/>
      </div>
    )
  }
}
