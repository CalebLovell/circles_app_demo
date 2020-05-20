import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AuthDispatchContext } from '../../../providers/AuthProvider';

export const SignupScreen = ({ navigation }) => {
	const [name, setname] = useState(``);
	const [email, setemail] = useState(``);
	const [password, setpassword] = useState(``);
	const [confirmpassword, setconfirmpassword] = useState(``);

	const dispatchUser = useContext(AuthDispatchContext);

	const signup = () => {
		const newUser = {
			name: name,
			email: email,
			number: password,
		};
		const user = dispatchUser({ type: 'SIGN_UP', payload: newUser });
		if (user.name && user.email) navigation.navigate(`Login`);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sign Up</Text>
			<TextInput style={styles.input} onChangeText={t => setname(t)} value={name} />
			<TextInput style={styles.input} onChangeText={t => setemail(t)} value={email} />
			<TextInput style={styles.input} onChangeText={t => setpassword(t)} value={password} />
			<TextInput style={styles.input} onChangeText={t => setconfirmpassword(t)} value={confirmpassword} />
			<TouchableOpacity style={styles.button} onPress={signup} />
			<Text style={styles.text}>Already have an account?</Text>
			<Text style={styles.text} onPress={navigation.navigate(`Login`)} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		color: 'red',
	},
	text: {
		fontSize: 24,
		color: 'red',
	},
	input: {},
	button: {
		height: 20,
		width: 100,
		backgroundColor: 'red',
	},
});
