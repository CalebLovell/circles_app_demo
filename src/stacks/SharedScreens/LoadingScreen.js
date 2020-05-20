import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export const LoadingScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>
				<ActivityIndicator size='large' />
			</Text>
			<Text>Loading...</Text>
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
