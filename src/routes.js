import React, { useState, useEffect, useContext } from 'react';
import { AuthContext, AuthDispatchContext } from './providers/AuthProvider';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './stacks/MainStack';
import { AuthStack } from './stacks/AuthStack/AuthStack';
import { LoadingScreen } from './stacks/SharedScreens/LoadingScreen';

export const Routes = () => {
	const { user } = useContext(AuthContext);
	const dispatch = useContext(AuthDispatchContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkForUser();
	}, []);

	const checkForUser = async () => {
		try {
			const storedUser = await JSON.parse(AsyncStorage.getItem(`user`));
			if (storedUser) {
				dispatch({ type: `LOG_IN`, payload: storedUser });
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <LoadingScreen size='large' />;
	} else {
		return <NavigationContainer>{user ? <MainStack /> : <AuthStack />}</NavigationContainer>;
	}
};
