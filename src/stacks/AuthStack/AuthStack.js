import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignupScreen } from './screens/SignupScreen';
import { LoginScreen } from './screens/LoginScreen';

const Stack = createStackNavigator();

export const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: () => null,
			}}
			initialRouteName='Login'
		>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='Signup' component={SignupScreen} />
		</Stack.Navigator>
	);
};
