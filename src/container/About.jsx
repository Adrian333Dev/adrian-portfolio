import React, { forwardRef } from 'react';
import { Box, Divider, Grid, styled, useMediaQuery } from '@mui/material';

import { Section, SectionContent } from '../styles/styles';
import { Subtitle, Text } from '../styles/typography';
import { aboutText } from '../constants/data';

export const Header = styled(Box)(({ theme }) => ({
	display: 'flex',
}));

export const Img = styled('img')(({ theme }) => ({
	width: '100%',
	borderRadius: 3,
}));

const About = forwardRef((props, ref) => {
	const isXl = useMediaQuery('(max-width: 600px)');
	return (
		<Section id='About' sx={{ alignItems: 'flex-start' }} ref={ref}>
			<SectionContent>
				<Divider textAlign={isXl ? 'center' : 'left'} color='white'>
					<Subtitle variant='h3' className='redwing-light'>
						About Me
					</Subtitle>
				</Divider>
				<Grid container spacing={2} py={2}>
					<Grid item xs={12} md={7}>
						<Text>{aboutText}</Text>
					</Grid>
					<Grid item xs={12} md={5}>
						<Img src='https://picsum.photos/400/400' alt='' />
					</Grid>
				</Grid>
			</SectionContent>
		</Section>
	);
});

export default About;
