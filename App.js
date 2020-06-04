import React from 'react';
import { AuthProvider } from './src/providers/AuthProvider';
import { DeviceProvider } from './src/providers/DeviceProvider';
import { Routes } from './src/core/routes';
import { Notification } from './src/core/Notification';

export default function App() {
	return (
		<DeviceProvider>
			<AuthProvider>
				<Routes />
				<Notification />
			</AuthProvider>
		</DeviceProvider>
	);
}
