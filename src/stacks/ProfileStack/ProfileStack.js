import React from 'react';
import { ProfileScreen } from '../ProfileStack/screens/ProfileScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const ProfileStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Profile' component={ProfileScreen} />
		</Stack.Navigator>
	);
};
