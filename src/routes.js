import React, { useState, useEffect, useContext } from 'react';
import { AuthContext, AuthDispatchContext } from './providers/AuthProvider';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Footer } from './Footer';
import { AuthStack } from './stacks/AuthStack/AuthStack';
import { LoadingScreen } from './stacks/SharedScreens/LoadingScreen';

export const Routes = () => {
	const user = useContext(AuthContext);
	const dispatchAuth = useContext(AuthDispatchContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkForUser();
	}, []);

	const checkForUser = async () => {
		try {
			const oldUser = JSON.parse(await AsyncStorage.getItem(`user`));
			if (oldUser) {
				dispatchAuth({ type: `LOG_IN`, payload: oldUser });
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
		return <NavigationContainer>{user ? <Footer /> : <AuthStack />}</NavigationContainer>;
	}
};
