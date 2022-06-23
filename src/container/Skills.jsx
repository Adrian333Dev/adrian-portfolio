import React, { forwardRef } from 'react';
import { Divider, Grid, useMediaQuery, Typography } from '@mui/material';

import { Section, SectionContent } from '../styles/styles';
import { Subtitle } from '../styles/typography';
import { SkillBox } from '../styles/skills';
import { skills } from '../constants/data';

const Skills = forwardRef((props, ref) => {
	const isXl = useMediaQuery('(max-width: 600px)');
	const divider = isXl ? 'center' : 'left';

	return (
		<Section id='Skills' ref={ref}>
			<SectionContent>
				<Divider textAlign={divider} color='white'>
					<Subtitle variant='h3' className='redwing-light'>
						Technical Skills
					</Subtitle>
				</Divider>
				<Grid container spacing={2} py={3} sx={{ flexWrap: 'wrap' }}>
					{skills.map((item, i) => (
						<Grid item xs={12} sm={6} key={i}>
							<SkillBox>
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
