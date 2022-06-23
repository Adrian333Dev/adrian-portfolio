import React, { forwardRef } from 'react';
import { Box, Divider, Grid, styled, useMediaQuery } from '@mui/material';

import { Section, SectionContent } from '../styles/styles';
import { Subtitle, Text } from '../styles/typography';

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
		<Section
			id='About'
			sx={{ alignItems: 'flex-start' }}
			ref={ref}
			className='section'
		>
			<SectionContent>
				<Divider textAlign={isXl ? 'center' : 'left'} color='white'>
					<Subtitle variant='h3' className='redwing-light'>
						About Me
					</Subtitle>
				</Divider>
				<Grid container spacing={2} py={2}>
					<Grid item xs={12} md={7}>
						<Text>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
							obcaecati corrupti et eos voluptate a molestias? Fugiat fuga
							beatae eum quaerat tempora? Porro possimus animi quasi, quae
							cupiditate eius inventore quibusdam. Dolor at quas mollitia
							tenetur aperiam, atque delectus reiciendis pariatur,
							necessitatibus maxime temporibus voluptates consequatur veritatis
							vero molestias quasi iure odio qui asperiores eaque? Temporibus
							omnis consequuntur esse, atque facilis eius ducimus recusandae
							similique quibusdam unde, obcaecati quam dolore voluptatum velit
							voluptatem ex, vitae modi quaerat aspernatur quia rerum? Delectus
							veniam pariatur quod, consequuntur rerum officiis explicabo ad!
							Unde placeat fuga autem alias! Eligendi pariatur nulla consequatur
							natus provident.
						</Text>
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
