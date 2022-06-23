import React, { forwardRef } from 'react';
import { Box } from '@mui/material';
import { Section } from '../styles/styles';
import { Title } from '../styles/typography';

const Work = forwardRef((props, ref) => {
	return (
		<Section id='Work' ref={ref} className='section'>
			<Box>
				<Title className='redwing-light' variant='h1'>
					Coming Soon...{' '}
				</Title>
			</Box>
		</Section>
	);
});

export default Work;
