import React from 'react';
import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
	position: 'fixed',
	bottom: 0,
	left: 30,
}));
export const LineY = styled(Box)(({ theme }) => ({
	width: 2,
	height: 120,
	borderRadius: 5,
	backgroundColor: '#ffffff',
}));

const SocialIcons = () => {
	return (
		<Container>
			<LineY />
		</Container>
	);
};

export default SocialIcons;
