import React, { useState } from 'react';
import { Animated, View, TouchableOpacity, Keyboard, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Notification = () => {
	let timeout = null;
	let speed = 200;
	let startingBottom = 50;
	let bottom = new Animated.Value(startingBottom);

	const [visible, setVisible] = useState(true);

	const [message, setMessage] = useState('This is a default test message !');
	const [type, setType] = useState(null);
	const [resendVerify, setResendVerify] = useState(false);
	const [username, setUsername] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const show = (message, type) => {
		this.setState({ message, type, messages: null });
		this.animateIn();
	};

	const animateIn = () => {
		Keyboard.dismiss();
		Animated.timing(bottom, {
			toValue: 0,
			duration: speed,
			easing: this.easing,
		}).start();
		clearTimeout(timeout);
		timeout = setTimeout(() => this.clear(), 3500);
	};

	const clear = () => {
		Animated.timing(bottom, {
			toValue: startingBottom,
			duration: speed,
			easing: this.easing,
		}).start();

		setTimeout(() => {
			this.setState({ message: null, type: null });
		}, speed);
	};

	const error = (message, data = null) => {
		if (data) {
			this.setState({ ...data });
		}
		this.show(message, 'error');
	};

	const errorResponse = ({ validation = {}, errorMessage }) => {
		let messages = [];
		for (let fieldKey of Object.keys(validation)) {
			let fieldErrors = validation[fieldKey] || [];
			messages = [...messages, ...fieldErrors];
		}

		if (messages.length) {
			this.show(messages, 'error');
		} else {
			this.show([errorMessage], 'error');
		}
	};

	const success = message => {
		this.show(message, 'success');
	};

	return visible ? (
		<Animated.View style={[styles.container, styles[type + 'Message'], { bottom: bottom }]}>
			<View style={styles.mainWrap}>
				<TouchableOpacity style={[styles.touchableX, { borderColor: 'white' }]} onPress={() => clear}>
					<AntDesign name='close' size={24} color='white' />
				</TouchableOpacity>
				<View style={styles.errorColumn}>
					{Array.isArray(message) ? (
						message.map((msg, key) => (
							<Text style={[styles.label, resendVerify ? { fontWeight: 'bold' } : {}]} key={key}>
								{msg}
							</Text>
						))
					) : (
						<Text style={styles.label}>{message}</Text>
					)}
				</View>
			</View>
		</Animated.View>
	) : null;
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		left: 0,
		right: 0,
		zIndex: 999,
		overflow: 'hidden',
		padding: 10,
		width: '100%',
		backgroundColor: 'red',
	},
	mainWrap: {
		flexDirection: 'row',
		width: '100%',
	},
	generalMessage: {
		backgroundColor: 'rgba(120,120,120,.9)',
	},
	errorMessage: {
		backgroundColor: 'rgba(255,0,0,.9)',
	},
	successMessage: {
		backgroundColor: 'rgba(0,219,187,.9)',
	},
	warnMessage: {
		backgroundColor: 'rgba(219,183,32,0.9)',
	},
	touchableX: {
		width: 30,
		margin: 10,
		aspectRatio: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 9999,
		borderColor: 'white',
	},
	errorColumn: {
		flex: 1,
		paddingVertical: 10,
		flexDirection: 'column',
	},
	x: {
		top: -3,
		fontSize: 20,
		color: 'white',
	},
	label: {
		margin: 5,
		color: '#ffffff',
		fontWeight: '600',
	},
});
