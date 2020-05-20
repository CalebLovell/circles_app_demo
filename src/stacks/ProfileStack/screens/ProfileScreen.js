import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AuthContext, AuthDispatchContext } from '../../../providers/AuthProvider';

export const ProfileScreen = () => {
	const userContext = useContext(AuthContext);
	const dispatchAuth = useContext(AuthDispatchContext);
	return (
		<View style={styles.screen}>
			<Text>Profile Screen</Text>
			<Text>Welcome {userContext.name}!</Text>
			<Text>Your email is {userContext.email}</Text>
			<Button title='Log Out' onPress={() => dispatchAuth({ type: `LOG_OUT` })} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
