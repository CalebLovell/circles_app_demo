import React from 'react';
import { ColorScheme } from './utility/ColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CirclesStack } from './stacks/CirclesStack/CircleStack';
import { CalendarStack } from './stacks/CalendarStack/CalendarStack';
import { ConnectionsStack } from './stacks/ConnectionsStack/ConnectionsStack';
import { ProfileStack } from './stacks/ProfileStack/ProfileStack';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const Footer = () => {
	return (
		<Tab.Navigator
			initialRouteName='Profile'
			tabBarOptions={{
				activeTintColor: ColorScheme.lightMode.primaryColor,
				size: 24,
			}}
		>
			<Tab.Screen
				name='Profile'
				component={ProfileStack}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ focused, color, size }) => {
						<Octicons name='person' size={size} color={color} />;
					},
				}}
			/>
			<Tab.Screen
				name='Circles'
				component={CirclesStack}
				options={{
					tabBarLabel: 'Circles',
					tabBarIcon: ({ color, size }) => {
						<MaterialCommunityIcons name='google-circles-extended' size={size} color={color} />;
					},
				}}
			/>
			<Tab.Screen
				name='Connections'
				component={ConnectionsStack}
				options={{
					tabBarLabel: 'Connections',
					tabBarIcon: ({ color, size }) => {
						<Ionicons name='ios-people' size={24} color='black' />;
					},
				}}
			/>
			<Tab.Screen
				name='Calendar'
				component={CalendarStack}
				options={{
					tabBarLabel: 'Calendar',
					tabBarIcon: ({ color, size }) => {
						<Octicons name='calendar' size={24} color='black' />;
					},
				}}
			/>
		</Tab.Navigator>
	);
};
