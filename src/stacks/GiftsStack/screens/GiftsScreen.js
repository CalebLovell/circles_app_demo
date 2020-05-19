import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const GiftsScreen = () => {
	return (
		<View style={styles.container}>
			<Text>GiftsScreen</Text>
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
