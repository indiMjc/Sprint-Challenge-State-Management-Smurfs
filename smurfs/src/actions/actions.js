import axios from "axios";

export const getSmurfs = () => {
	return function(dispatch) {
		dispatch({ type: "LOADING_GET" });

		return axios
			.get(`http://localhost:3333/smurfs`)
			.then(res => {
				dispatch({ type: "GOT_SMURFS", payload: res.data });
				// console.log(res);
			})
			.catch(err => dispatch({ type: "FAILED_SMURFS", payload: err }));
	};
};

export const postSmurfs = post => {
	return function(dispatch) {
		dispatch({ type: "POSTING" });

		return axios
			.post(`http://localhost:3333/smurfs`, post)
			.then(res => {
				dispatch({ type: "POSTED", payload: res.data });
			})
			.catch(err => dispatch({ type: "POST_FAILED", payload: err }));
	};
};
