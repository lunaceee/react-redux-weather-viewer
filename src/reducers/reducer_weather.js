import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
		// return state.concat([action.payload.data]) 
		return [action.payload.data, ...state];// return a new state instead of mutating the state
	}
	console.log('Action received', action);
	return state;
}

