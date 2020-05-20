import React from 'react';
import { HeaderRight } from '../../HeaderRight';
import { CalendarScreen } from './screens/CalendarScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const CalendarStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerRight: () => <HeaderRight />,
			}}
		>
			<Stack.Screen name='Calendar' component={CalendarScreen} />
		</Stack.Navigator>
	);
};
