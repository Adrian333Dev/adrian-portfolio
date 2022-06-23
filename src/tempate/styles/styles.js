import { Box, styled } from '@mui/material';
import bg1 from '../images/bg1.jpg';

export const Container = styled(Box)(({ theme }) => ({
	backgroundImage: `url(${bg1})`,
	backgroundSize: 'cover',
	backgroundAttachment: 'fixed',
	backgroundRepeat: 'no-repeat',
}));

export const Section = styled(Box)(({ theme }) => ({
	minHeight: '100vh',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
}));

export const SectionContent = styled('div')(({ theme }) => ({
	paddingTop: 60,
	width: '90%',
	maxWidth: 1200,
	[theme.breakpoints.down('xl')]: {
		maxWidth: 900,
	},
}));
