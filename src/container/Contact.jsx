import React, { forwardRef } from 'react';
import { Box } from '@mui/material';
import { Section } from '../styles/styles';
import { Title } from '../styles/typography';

const Contact = forwardRef((props, ref) => {
	return (
		<Section id='Contact' ref={ref}>
			<Box>
				<Title className='redwing-light' variant='h1'>
					Contact Me
				</Title>
			</Box>
		</Section>
	);
});

export default Contact;
