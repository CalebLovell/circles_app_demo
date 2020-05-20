import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const ConnectionScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>ConnectionScreen</Text>
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
