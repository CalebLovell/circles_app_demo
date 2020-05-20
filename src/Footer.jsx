import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CirclesStack } from './stacks/CirclesStack/CircleStack';
import { CalendarStack } from './stacks/CalendarStack/CalendarStack';
import { ConnectionsStack } from './stacks/ConnectionsStack/ConnectionsStack';
import { ProfileStack } from './stacks/ProfileStack/ProfileStack';
import { DeviceContext } from './providers/DeviceProvider';

import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator();

export const Footer = () => {
	const deviceInfo = useContext(DeviceContext);

	return (
		<BottomTabs.Navigator
			initialRouteName='Profile'
			tabBarOptions={{
				activeTintColor: deviceInfo.colorScheme.primaryColor,
				size: 24,
			}}
		>
			<BottomTabs.Screen
				name='Profile'
				component={ProfileStack}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color, size }) => {
						<Octicons name='person' size={size} color={color} />;
					},
				}}
			/>
			<BottomTabs.Screen
				name='Circles'
				component={CirclesStack}
				options={{
					tabBarLabel: 'Circles',
					tabBarIcon: ({ color, size }) => {
						<MaterialCommunityIcons name='google-circles-extended' size={size} color={color} />;
					},
				}}
			/>
			<BottomTabs.Screen
				name='Connections'
				component={ConnectionsStack}
				options={{
					tabBarLabel: 'Connections',
					tabBarIcon: ({ color, size }) => {
						<Ionicons name='ios-people' size={size} color={color} />;
					},
				}}
			/>
			<BottomTabs.Screen
				name='Calendar'
				component={CalendarStack}
				options={{
					tabBarLabel: 'Calendar',
					tabBarIcon: ({ color, size }) => {
						<Octicons name='calendar' size={size} color={color} />;
					},
				}}
			/>
		</BottomTabs.Navigator>
	);
};
