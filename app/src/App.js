import React, { Component, Fragment } from 'react'
import Toggle from './RpcToggle'
import Portal from './Portal'


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
          <Toggle>
            {({on, toggle}) => (
            <Fragment>
              { on && <h1> Helloooo </h1> }
              <button onClick={toggle}>On / Off</button> 
            <Portal>
              {on && <h1>Hello, this is the portal</h1>}
            </Portal>
            </Fragment>
          )}
          </Toggle>

          <Portal>
            <p>Culpa ullamco non deserunt officia. Proident sunt sit elit laborum. Id id magna irure fugiat id exercitation quis culpa voluptate qui aute consequat tempor. Tempor deserunt eu cupidatat amet eu culpa Lorem dolor eu dolore culpa ut ipsum nulla. Ullamco commodo voluptate incididunt quis exercitation.</p>
          </Portal>
      </div>
    )
  }
}
