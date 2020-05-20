import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AuthDispatchContext } from '../../../providers/AuthProvider';

export const LoginScreen = ({ navigation }) => {
	const [name, setname] = useState(``);
	const [email, setemail] = useState(``);
	const [password, setpassword] = useState(``);
	const [confirmpassword, setconfirmpassword] = useState(``);

	const dispatchUser = useContext(AuthDispatchContext);

	const login = () => {
		fakeUser = {
			name: `Caleb Lovell`,
			email: `caleblovell1@gmail.com`,
			number: `(262) 349-5921`,
		};
		dispatchUser({ type: 'LOG_IN', payload: fakeUser });
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Login</Text>
			<TextInput style={styles.input} onChangeText={t => setname(t)} value={name} />
			<TextInput style={styles.input} onChangeText={t => setemail(t)} value={email} />
			<TextInput style={styles.input} onChangeText={t => setpassword(t)} value={password} />
			<TextInput style={styles.input} onChangeText={t => setconfirmpassword(t)} value={confirmpassword} />
			<TouchableOpacity style={styles.button} onPress={login} />
			<Text style={styles.text}>Don't have an account?</Text>
			<TouchableOpacity style={styles.button} onPress={navigation.navigate(`Signup`)} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	input: {},
});
