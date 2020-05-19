import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const ConnectionScreen = () => {
	return (
		<View style={styles.container}>
			<Text>ConnectionScreen</Text>
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
