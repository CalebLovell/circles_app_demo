import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const CircleScreen = () => {
	return (
		<View style={styles.container}>
			<Text>CircleScreen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});