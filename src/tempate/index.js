import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';

import App from './App';
import theme from './styles/theme';
import './styles/styles.scss';

import './fonts/Redwing-Light.otf';
import './fonts/Redwing-Medium.otf';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<>
		<ThemeProvider theme={theme}>
			<CssBaseline />
		</ThemeProvider>
		<App />
	</>
);
