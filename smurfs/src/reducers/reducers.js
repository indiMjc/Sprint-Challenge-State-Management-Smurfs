const initialState = {
	smurfs: [],
	gettingSmurf: false,
	postingSmurf: false,

	error: "",
	name: "",
	age: "",
	height: ""
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "GETTING_SMURFS":
			return {
				...state,
				gettingSmurf: true
			};
		case "GOT_SMURFS":
			return {
				...state,
				smurfs: action.payload,
				gettingSmurf: false
			};
		case "FAILED_SMURFS":
			return {
				...state,
				error: action.payload,
				gettingSmurf: false
			};
		case "POSTING": {
			return {
				...state,
				postingSmurf: true
			};
		}
		case "POSTED": {
			return {
				...state,
				smurfs: action.payload,
				postingSmurf: false
			};
		}
		case "POST_FAILED": {
			return {
				...state,
				postingSmurf: false,
				error: action.payload
			};
		}
		default:
			return state;
	}
};
