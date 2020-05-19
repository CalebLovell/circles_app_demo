import React from 'react';
import { CalendarScreen } from './screens/CalendarScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const CalendarStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Calendar' component={CalendarScreen} />
		</Stack.Navigator>
	);
};
