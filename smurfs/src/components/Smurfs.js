import React from "react";

const Smurfs = props => {
	return (
		<>
			<h1>Name: {props.name}</h1>
			<p>Age: {props.age}</p>
			<p>Height: {props.height}</p>
		</>
	);
};

export default Smurfs;
