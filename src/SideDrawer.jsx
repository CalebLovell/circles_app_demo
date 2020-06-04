import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SideDrawer = ({ isOpen, setIsOpen }) => {
	const navigation = useNavigation();
	return (
		<Modal visible={isOpen}>
			<View style={styles.sideDrawer}>
				<TouchableOpacity style={styles.button} onPress={() => setIsOpen(false)}>
					<Text>Close</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						setIsOpen(false);
						navigation.navigate('Connections');
					}}
				>
					<Text>Close and Go to Connections</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	sideDrawer: {
		height: '100%',
		width: '100%',
		position: 'absolute',
		backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		marginTop: 10,
	},
});
