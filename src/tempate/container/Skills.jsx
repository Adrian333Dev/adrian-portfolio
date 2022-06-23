import React, { forwardRef } from 'react';
import {
	Divider,
	Grid,
	useMediaQuery,
	Typography,
	styled,
	Box,
	alpha,
} from '@mui/material';

import { Section, SectionContent } from '../styles/styles';
import { Subtitle } from '../styles/typography';
import { skills } from '../constants/skills';

export const SkillBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	width: '90%',
	gap: 15,
	padding: '8px 26px',
	borderRadius: 50,
	border: '1px solid #718096',
	backgroundColor: alpha('#0a0908', 0.6),
}));

const Skills = forwardRef((props, ref) => {
	const isXl = useMediaQuery('(max-width: 600px)');

	return (
		<Section id='Skills'>
			<SectionContent>
				<Divider
					textAlign={isXl ? 'center' : 'left'}
					color='white'
					className='section'
				>
					<Subtitle variant='h3' className='redwing-light'>
						Technical Skills
					</Subtitle>
				</Divider>
				<Grid container spacing={2} py={3} sx={{ flexWrap: 'wrap' }}>
					{skills.map((item, i) => (
						<Grid item xs={12} sm={6} key={i}>
							<SkillBox>
								<img src={item.logo} alt='' className='logo' />
								<Typography variant='h5'>
									<code>{item.name}</code>
								</Typography>
							</SkillBox>
						</Grid>
					))}
				</Grid>
			</SectionContent>
		</Section>
	);
});

export default Skills;
