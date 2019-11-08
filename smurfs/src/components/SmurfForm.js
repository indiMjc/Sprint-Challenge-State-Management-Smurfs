import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	handleNameChange,
	handleAgeChange,
	handleHeightChange,
	postSmurfs
} from "../actions/actions";

const SmurfForm = () => {
	const newName = useSelector(state => state.name);
	const newAge = useSelector(state => state.age);
	const newHeight = useSelector(state => state.height);

	const dispatch = useDispatch();

	const nameChange = e => {
		dispatch(handleNameChange(e.target.value));
	};

	const ageChange = e => {
		dispatch(handleAgeChange(e.target.value));
	};

	const heightChange = e => {
		dispatch(handleHeightChange(e.target.value));
	};

	const newSmurf = {
		name: newName,
		age: newAge,
		height: newHeight
	};

	return (
		<>
			<form>
				<label>
					Name:
					<input type="text" name="name" onChange={nameChange}></input>
				</label>
				<br />
				<label>
					Age:
					<input type="text" name="age" onChange={ageChange}></input>
				</label>
				<br />
				<label>
					Height:
					<input type="text" name="height" onChange={heightChange}></input>
				</label>
			</form>
			<button onClick={() => dispatch(postSmurfs(newSmurf))}>
				Post Smurf
			</button>
		</>
	);
};

export default SmurfForm;
