import React from 'react';
import { GlobalStateProvider } from './src/providers/GlobalStateProvider';
import { Routes } from './src/routes';

export default function App() {
	return (
		<GlobalStateProvider>
			<Routes />
		</GlobalStateProvider>
	);
}
