import React from 'react';
import { CirclesScreen } from './screens/CirclesScreen';
import { Header } from '../../Header';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const CirclesStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: () => <Header />,
			}}
			initialRouteName='Circles'
		>
			<Stack.Screen name='Circles' component={CirclesScreen} />
		</Stack.Navigator>
	);
};
