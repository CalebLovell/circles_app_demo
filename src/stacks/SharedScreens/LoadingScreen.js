import React from 'react';
import { Text, ActivityIndicator, StyleSheet } from 'react-native';

export const LoadingScreen = () => {
	return (
		<Text style={styles.container}>
			<ActivityIndicator size='large' />;
		</Text>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
