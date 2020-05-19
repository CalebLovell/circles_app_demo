import React, { useState, useEffect, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { AuthStack } from './AuthStack/AuthStack';
import AsyncStorage from '@react-native-community/async-storage';
import { GlobalStateContext, GlobalStateDispatchContext } from './providers/GlobalStateProvider';

export const Routes = () => {
	const { user } = useContext(GlobalStateContext);
	const dispatch = useContext(GlobalStateDispatchContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		checkForUser();
	}, []);

	const checkForUser = async () => {
		try {
			const storedUser = await AsyncStorage.getItem(`user`);
			if (storedUser) {
				dispatch({ type: `LOG_IN`, payload: JSON.parse(storedUser) });
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	if (loading) {
		return <ActivityIndicator size='large' />;
	} else {
		return <NavigationContainer>{user ? <MainStack /> : <AuthStack />}</NavigationContainer>;
	}
};
