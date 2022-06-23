import React, { forwardRef } from 'react';
import { Box } from '@mui/material';
import { Section } from '../styles/styles';
import { Title } from '../styles/typography';

const Hero = forwardRef((props, ref) => {
	return (
		<Section id='Hero' ref={ref} className='section'>
			<Box>
				<Title className='redwing-light' variant='h1'>
					Hey, I'm Adrian <br />
					React Frontend Developer
				</Title>
			</Box>
		</Section>
	);
});

export default Hero;
