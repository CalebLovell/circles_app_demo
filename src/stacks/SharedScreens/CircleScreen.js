import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const CircleScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>CircleScreen</Text>
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
