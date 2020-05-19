import React from 'react';
import { GiftsScreen } from './screens/GiftsScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const GiftsStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Gifts' component={GiftsScreen} />
		</Stack.Navigator>
	);
};
