import React from 'react';
import { AuthProvider } from './src/providers/AuthProvider';
import { DeviceProvider } from './src/providers/DeviceProvider';
import { Routes } from './src/routes';

export default function App() {
	return (
		<DeviceProvider>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</DeviceProvider>
	);
}
