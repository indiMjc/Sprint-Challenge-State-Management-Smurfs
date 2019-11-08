import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSmurfs } from "../actions/actions";
import Smurfs from "./Smurfs";
import "./App.css";

const App = () => {
	const dispatch = useDispatch();
	const getting = useSelector(state => state.gettingSmurf);
	const smurfs = useSelector(state => state.smurfs);
	const error = useSelector(state => state.error);
	return (
		<div className="App">
			<h1>SMURFS! 2.0 W/ Redux</h1>
			<div>Welcome to your state management version of Smurfs!</div>
			<div>Start inside of your `src/index.js` file!</div>
			<div>Have fun!</div>

			{getting && <h1>Loading...</h1>}
			{error && <h1>error.message</h1>}
			{smurfs.length ? (
				smurfs.map(i => (
					<Smurfs key={i.id} name={i.name} age={i.age} height={i.height} />
				))
			) : (
				<h1>Click to load smurfs!</h1>
			)}
			<button onClick={() => dispatch(getSmurfs())}>test</button>
		</div>
	);
};

export default App;
