import React, { useState, useEffect, useContext } from 'react';
import { AuthContext, AuthDispatchContext } from './providers/AuthProvider';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Footer } from './Footer';
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
		async try {
			const storedUser = await AsyncStorage.getItem(`user`);
			console.log(storedUser);
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
		return <NavigationContainer>{user ? <Footer /> : <AuthStack />}</NavigationContainer>;
	}
};
