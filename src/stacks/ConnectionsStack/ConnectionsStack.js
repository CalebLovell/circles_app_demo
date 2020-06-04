import React from 'react';
import { HeaderRight } from '../../core/HeaderRight';
import { ConnectionsScreen } from './screens/ConnectionsScreen';
import { CircleScreen } from '../SharedScreens/CircleScreen';
import { ConnectionScreen } from '../SharedScreens/ConnectionScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const ConnectionsStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerRight: () => <HeaderRight />,
			}}
		>
			<Stack.Screen name='Connections' component={ConnectionsScreen} />
			<Stack.Screen name='Circle' component={CircleScreen} />
			<Stack.Screen name='Connection' component={ConnectionScreen} />
		</Stack.Navigator>
	);
};
