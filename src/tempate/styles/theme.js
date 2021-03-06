import { createTheme } from '@mui/material';


const theme = createTheme({
	palette: {
		primary: {
			50: '#F7FAFC',
			100: '#EDF2F7',
			200: '#E2E8F0',
			300: '#CBD5E0',
			400: '#A0AEC0',
			500: '#718096',
			600: '#4A5568',
			700: '#2D3748',
			800: '#1A202C',
			900: '#171923',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					scrollBehavior: 'smooth',
				},
				body: {
					backgroundColor: '#171923',
					color: '#E2E8F0',
					overflowX: 'hidden',
					'&::-webkit-scrollbar': {
						display: 'none',
					},
					'*': {
						color: '#E2E8F0',
					},
				},
				a: {
					color: 'inherit',
					textDecoration: 'none',
					cursor: 'pointer',
				},
			},
		},
	},
});

export default theme;
