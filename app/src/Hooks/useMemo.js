// UseMemo Hooks

import React, { useState } from "react";

const TestHookMemo = () => {
	const [plus2, setPlus2] = useState(0);
	const handleClick = () => {
		setPlus2(plus2 + 2);
	};
	return (
		<div>
			<h2>use memo</h2>
			<h3> plus2 : {plus2}</h3>
			<button onClick={handleClick}></button>
		</div>
	);
};

export default TestHookMemo;
// TODO: need more experiment
