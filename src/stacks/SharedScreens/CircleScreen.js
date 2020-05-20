import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export const CircleScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<Text>Circle Screen</Text>
			<Button title='Go to Circle Screen' onPress={() => navigation.navigate(`Circle`)} />
			<Button title='Go to Connection Screen' onPress={() => navigation.navigate(`Connection`)} />
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
