import React from 'react';
// Import Stack Navigators
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CirclesStack from '../stacks/CirclesStack/CirclesStack';
import CalendarStack from './CalendarStack/CalendarStack';
import ConnectionsStack from './ConnectionsStack/ConnectionsStack';
import GiftsStack from './GiftsStack/GiftsStack';
// Import Icons
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';

const BottomTabNavigator = createBottomTabNavigator();

export const MainStackWithBottomTabs = () => {
	return (
		<BottomTabNavigator.Navigator
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
			tabBarOptions={{
				activeTintColor: `tomato`,
				inactiveTintColor: `gray`,
			}}
		>
			<BottomTabNavigator.Screen name='Circles' component={CirclesStack} />
			<BottomTabNavigator.Screen name='Calendar' component={CalendarStack} />
			<BottomTabNavigator.Screen name='Connections' component={ConnectionsStack} />
			<BottomTabNavigator.Screen name='Gifts' component={GiftsStack} />
		</BottomTabNavigator.Navigator>
	);
};
