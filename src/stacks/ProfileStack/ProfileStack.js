import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderRight } from '../../core/HeaderRight';
import { ProfileScreen } from '../ProfileStack/screens/ProfileScreen';
const Stack = createStackNavigator();

export const ProfileStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerRight: () => <HeaderRight />,
			}}
		>
			<Stack.Screen name='Profile' component={ProfileScreen} />
		</Stack.Navigator>
	);
};
