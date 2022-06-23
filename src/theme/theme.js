import { createTheme } from '@mui/material';

const theme = createTheme({
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
					code: {
						color: 'inherit',
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
