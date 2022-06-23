import { styled, Typography } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
	background: '-webkit-linear-gradient(45deg, #B2FEFA, #0ED2F7)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
	fontSize: 96,
	[theme.breakpoints.down('xl')]: {
		fontSize: 84,
	},
	[theme.breakpoints.down('md')]: {
		fontSize: 72,
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: 52,
	},
}));
export const Subtitle = styled(Typography)(({ theme }) => ({
	textAlign: 'center',
	background: '-webkit-linear-gradient(45deg, #B2FEFA, #0ED2F7)',
	WebkitBackgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
}));

export const Text = styled(Typography)(({ theme }) => ({
	color: '#A0AEC0',
	fontSize: 19,
	fontWeight: 300,
	lineHeight: 1.5,
	letterSpacing: 1,
	[theme.breakpoints.down('md')]: {
		textAlign: 'center',
		fontSize: 18,
	},
	[theme.breakpoints.down('sm')]: {
		fontSize: 16,
	},
}));
