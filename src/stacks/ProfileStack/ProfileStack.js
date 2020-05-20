import React, { useContext } from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthDispatchContext } from '../../providers/AuthProvider';
import { ProfileScreen } from '../ProfileStack/screens/ProfileScreen';
const Stack = createStackNavigator();

export const ProfileStack = () => {
	const dispatchAuth = useContext(AuthDispatchContext);
	return (
		<Stack.Navigator
			screenOptions={({ route }) => ({
				headerRight: ({ color, size }) => {
					return <Button title='Log Out' onPress={() => dispatchAuth({ type: `LOG_OUT` })} />;
				},
			})}
		>
			<Stack.Screen name='Profile' component={ProfileScreen} />
		</Stack.Navigator>
	);
};
