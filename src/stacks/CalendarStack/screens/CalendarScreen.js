import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const CalendarScreen = () => {
	return (
		<View style={styles.container}>
			<Text>CalendarScreen</Text>
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
