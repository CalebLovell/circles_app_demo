import React from 'react';
import { ConnectionsScreen } from './screens/ConnectionsScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const ConnectionsStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Connections' component={ConnectionsScreen} />
		</Stack.Navigator>
	);
};
