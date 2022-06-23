import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
	overflowY: 'auto',
	scrollSnapType: 'y mandatory',
	height: '100vh',
	'&::-webkit-scrollbar': {
		display: 'none',
	},
}));
export const BgImg = styled('img')(({ theme }) => ({
	width: '100%',
	position: 'fixed',
	zIndex: '-1',
}));

export const Section = styled(Box)(({ theme }) => ({
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	scrollSnapAlign: 'start',
}));

export const SectionContent = styled('div')(({ theme }) => ({
	paddingTop: 60,
	width: '90%',
	maxWidth: 1200,
	[theme.breakpoints.down('xl')]: {
		maxWidth: 900,
	},
}));
