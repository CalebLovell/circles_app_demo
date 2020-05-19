import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Header = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => dispatch({ type: `LOG_OUT` })}>
				<Text>Hello</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => dispatch({ type: `LOG_OUT` })}>
				<Text>Hello</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => dispatch({ type: `LOG_OUT` })}>
				<Text>Hello</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 50,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});
