import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SideDrawer } from './SideDrawer';

export const HeaderRight = () => {
	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
	return (
		<>
			<View style={{ marginRight: 10 }}>
				<TouchableOpacity onPress={() => setSideDrawerOpen(!sideDrawerOpen)}>
					<Feather name='menu' size={30} color='gray' />
				</TouchableOpacity>
			</View>
			<SideDrawer isOpen={sideDrawerOpen} setIsOpen={setSideDrawerOpen} />
		</>
	);
};
