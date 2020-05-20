import React from 'react';
import { HeaderRight } from '../../HeaderRight';
import { CirclesScreen } from './screens/CirclesScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const CirclesStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerRight: () => <HeaderRight />,
			}}
		>
			<Stack.Screen name='Circles' component={CirclesScreen} />
		</Stack.Navigator>
	);
};
