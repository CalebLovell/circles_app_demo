import React from 'react';
import { CirclesScreen } from './screens/CirclesScreen';
import { Feather } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export const CirclesStack = () => {
	return (
		<Stack.Navigator
			screenOptions={({ route }) => ({
				headerRight: ({ color, size }) => {
					return <Feather name='menu' size={size} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: `tomato`,
				inactiveTintColor: `gray`,
				labelStyle: {
					fontSize: 24,
				},
			}}
		>
			<Stack.Screen name='Circles' component={CirclesScreen} />
		</Stack.Navigator>
	);
};
