import React from 'react';
import { HeaderRight } from '../../core/HeaderRight';
import { CirclesScreen } from './screens/CirclesScreen';
import { CircleScreen } from '../SharedScreens/CircleScreen';
import { ConnectionScreen } from '../SharedScreens/ConnectionScreen';

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
			<Stack.Screen name='Circle' component={CircleScreen} />
			<Stack.Screen name='Connection' component={ConnectionScreen} />
		</Stack.Navigator>
	);
};
