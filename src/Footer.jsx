import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CirclesStack } from './stacks/CirclesStack/CircleStack';
import { CalendarStack } from './stacks/CalendarStack/CalendarStack';
import { ConnectionsStack } from './stacks/ConnectionsStack/ConnectionsStack';
import { GiftsStack } from './stacks/GiftsStack/GiftsStack';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';

const Tab = createBottomTabNavigator();

export const Footer = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					if (route.name === `Circles`) {
						return <FAIcon name={`home`} size={size * 1.2} color={color} />;
					} else if (route.name === `Calendar`) {
						return <FAIcon name={`group`} size={size * 0.9} color={color} />;
					} else if (route.name === `Connections`) {
						return <FoundationIcon name={`graph-bar`} size={size * 1.2} color={color} />;
					} else if (route.name === `Gifts`) {
						return <FAIcon name={`search`} size={size} color={color} />;
					}
				},
			})}
		>
			<Tab.Screen name='Circles' component={CirclesStack} />
			<Tab.Screen name='Calendar' component={CalendarStack} />
			<Tab.Screen name='Connections' component={ConnectionsStack} />
			<Tab.Screen name='Gifts' component={GiftsStack} />
		</Tab.Navigator>
	);
};
