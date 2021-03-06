import React, { Component, Fragment } from "react";
import Toggle from "./RpcToggle";
import Portal from "./Portal";
import TestHook from "./Hooks/useState";
import TestHookMemo from "./Hooks/useMemo";
import styled from "styled-components";

const Wrapper = styled.section`
	display: block;
	width: 500px;
	height: 300px;
	background: purple;
	border-radius: 8px;
	margin-left: 15%;
`;

const Headline = styled.h1`
	color: red;
	text-align: center;
	font-size: 40px;
	font-family: sans-serif;
`;

const Content = styled.p`
	color: white;
	text-align: center;
	padding: 0 5% 0;
	font-size: 16px;
	font-family: serif;
`;

class Card extends Component {
	render() {
		return (
			<Wrapper>
				<Headline>Hello world of fame</Headline>
				<Content>
					Consequat do esse cupidatat anim enim pariatur esse sunt pariatur duis
					aliqua ad sint. Fugiat incididunt et elit sint velit quis mollit id.
					Elit id esse occaecat nisi deserunt laboris eiusmod. Duis cupidatat
					aute irure nulla. Aliquip incididunt enim cillum officia adipisicing
					ad nostrud nostrud commodo et reprehenderit qui minim. Qui laboris eu
					ut eiusmod officia duis minim nisi reprehenderit proident sit.
					Reprehenderit est elit et esse proident est fugiat enim amet irure
					deserunt proident.
				</Content>
			</Wrapper>
		);
	}
}

/**
 * How to work with the Context api
 */

// 1 - Make  a new context
const TheContext = React.createContext();

// 2 - Create a provider Component
class TheProvider extends Component {
	state = {
		name: "Brahim",
		age: 41,
		cool: true,
	};
	render() {
		const { name } = this.state;
		return (
			<TheContext.Provider
				value={{
					state: this.state,
					growAge: () =>
						this.setState({
							age: this.state.age + 1,
						}),
				}}
			>
				{this.props.children}
			</TheContext.Provider>
		);
	}
}

class Person extends Component {
	render() {
		return (
			<div>
				<TheContext.Consumer>
					{(value) => (
						<Fragment>
							<p>My name is {value.state.name} </p>
							<p>
								My age is{" "}
								<span style={{ color: "red", fontWeight: "bold" }}>
									{value.state.age}
								</span>{" "}
							</p>
							<button onClick={value.growAge}>🎂</button>
						</Fragment>
					)}
				</TheContext.Consumer>
			</div>
		);
	}
}

export default class App extends Component {
	render() {
		return (
			<TheProvider>
				<div>
					<Person />
					<Toggle>
						{({ on, toggle }) => (
							<Fragment>
								{on && <h1> Helloooo </h1>}
								<button onClick={toggle}>On / Off</button>
								<Portal>{on && <h1>Hello, this is the portal</h1>}</Portal>
							</Fragment>
						)}
					</Toggle>
					<Card />
					<TestHook />
					<TestHookMemo />
					<Portal>
						<p>
							Culpa ullamco non deserunt officia. Proident sunt sit elit
							laborum. Id id magna irure fugiat id exercitation quis culpa
							voluptate qui aute consequat tempor. Tempor deserunt eu cupidatat
							amet eu culpa Lorem dolor eu dolore culpa ut ipsum nulla. Ullamco
							commodo voluptate incididunt quis exercitation.
						</p>
					</Portal>
				</div>
			</TheProvider>
		);
	}
}
