import React, { useReducer } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const GlobalStateContext = React.createContext();
export const GlobalStateDispatchContext = React.createContext();

const initialState = {
	user: {
		name: ``,
		email: ``,
		number: ``,
	},
};

const reducer = (state, action) => {
	switch (action.type) {
		case `LOG_IN`: {
			AsyncStorage.setItem(`user`, JSON.stringify(action.payload));
			return {
				user: action.payload,
			};
		}
		case `LOG_OUT`: {
			AsyncStorage.removeItem(`user`);
			return {
				user: null,
			};
		}
		default:
			throw new Error(`Bad Action Type`);
	}
};

export const GlobalStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalStateContext.Provider value={state}>
			<GlobalStateDispatchContext.Provider value={dispatch}>{children}</GlobalStateDispatchContext.Provider>
		</GlobalStateContext.Provider>
	);
};
