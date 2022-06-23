import React, { forwardRef, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';

import { NavLink, StyledAppBar, StyledToolbar } from '../styles/navbar';
import { sections } from '../constants/data';

const NavLinks = ({ active }) => {
	const el = useRef();
	const q = gsap.utils.selector(el);

	useEffect(() => {
		gsap.to(
			q('.link'),
			{
				y: 100,
				stagger: 0.2,
				duration: 1,
			}
		);
	}, []);
	return (
		<Box sx={{ display: 'flex' }} ref={el}>
			{sections.map((sec) => (
				<NavLink
					key={sec}
					href={`#${sec}`}
					sx={{
						color: active === sec ? '#0BC5EA' : '#E2E8F0',
					}}
					className='link'
				>
					<code>{sec}</code>
				</NavLink>
			))}
		</Box>
	);
};
const Logo = () => {
	return (
		<Typography sx={{ color: '#0BC5EA' }}>
			<code>&#60;Adrian/&#62;</code>
		</Typography>
	);
};

const Navbar = forwardRef((props, ref) => {
	return (
		<StyledAppBar>
			<StyledToolbar>
				<Logo />
				<NavLinks active={props.active} />
			</StyledToolbar>
		</StyledAppBar>
	);
});

export default Navbar;
