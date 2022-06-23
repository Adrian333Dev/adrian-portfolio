import { Box, styled } from '@mui/material';

export const Header = styled(Box)(({ theme }) => ({
	display: 'flex',
}));

export const Img = styled('img')(({ theme }) => ({
	width: '100%',
	borderRadius: 3,
}));
