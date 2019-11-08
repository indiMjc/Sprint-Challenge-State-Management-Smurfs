import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSmurfs } from "../actions/actions";
import Smurfs from "./Smurfs";
import "./App.css";
import SmurfForm from "./SmurfForm";

const App = () => {
	const dispatch = useDispatch();
	const getting = useSelector(state => state.gettingSmurf);
	const smurfs = useSelector(state => state.smurfs);
	const error = useSelector(state => state.error);
	return (
		<div className="App">
			{getting && <h1>Loading...</h1>}
			{error && <h1>error.message</h1>}
			{smurfs.length ? (
				smurfs.map(i => (
					<Smurfs key={i.id} name={i.name} age={i.age} height={i.height} />
				))
			) : (
				<h1>Click to load smurfs!</h1>
			)}
			<button onClick={() => dispatch(getSmurfs())}>Get Smurfs</button>
			<SmurfForm />
			<button>Post Smurf</button>
		</div>
	);
};

export default App;
