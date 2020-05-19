import React from 'react';
import { AuthProvider } from './src/providers/AuthProvider';
import { Routes } from './src/routes';

export default function App() {
	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
}
