import React from "react";

const SmurfForm = () => {
	return (
		<form>
			<label>
				Name:
				<input type="text" name="name"></input>
			</label>
			<br />
			<label>
				Age:
				<input type="text" name="age"></input>
			</label>
			<br />
			<label>
				Height:
				<input type="text" name="height"></input>
			</label>
		</form>
	);
};

export default SmurfForm;
