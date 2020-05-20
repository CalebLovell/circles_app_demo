import React from 'react';
import { HeaderRight } from '../../HeaderRight';
import { ConnectionsScreen } from './screens/ConnectionsScreen';

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
		</Stack.Navigator>
	);
};
