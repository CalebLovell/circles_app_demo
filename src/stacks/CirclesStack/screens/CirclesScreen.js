import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const CirclesScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>CirclesScreen</Text>
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
