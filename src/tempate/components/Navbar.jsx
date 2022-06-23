import React, { useEffect, useState } from 'react';
import {
	alpha,
	styled,
	Typography,
	Toolbar,
	Box,
	IconButton,
	Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import theme from '../styles/theme';

export const StyledAppBar = styled('div')(({ theme }) => ({
	transition: 'all 1s ease-in-out',
	position: 'fixed',
	width: '100%',
	backgroundColor: alpha('#000000', 0.6),
	backdropFilter: 'blur(5px)',
	zIndex: 10,
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	justifyContent: 'space-between',
}));

export const StyledLink = styled('a')(({ theme }) => ({
	padding: 10,
	color: '#A0AEC0	',
	transition: 'all 0.3s ease-in-out',
	'&:hover': {
		color: 'aqua',
	},
	'&: *': {
		color: 'red',
	},
}));

export const Logo = styled(Typography)(({ theme }) => ({}));

export const MenuBtn = styled(IconButton)(({ theme }) => ({
	[theme.breakpoints.up('md')]: {
		display: 'none',
	},
	color: 'inherit',
}));

export const LinksContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	[theme.breakpoints.down('md')]: {
		display: 'none',
	},
}));

export const sections = ['About', 'Skills', 'Work', 'Contact'];

export const timer = (time) => {
	setTimeout(() => true, time);
};

export const NavLinks = () => {
	return (
		<LinksContainer>
			{sections.map((item, i) => (
				<code key={i}>
					<StyledLink href={`#${item}`}>{item}</StyledLink>
				</code>
			))}
		</LinksContainer>
	);
};

const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleToggle = () => setMobileOpen(!mobileOpen);
	return (
		<>
			<StyledAppBar className='fade-down'>
				<StyledToolbar style={{ minHeight: 48 }}>
					<Logo variant='h6' className='fade-right'>
						<code>&#60;Adrian&#47;&#62;</code>
					</Logo>
					<NavLinks />
					<MenuBtn onClick={handleToggle}>
						<MenuIcon />
					</MenuBtn>
				</StyledToolbar>
			</StyledAppBar>
			<Drawer
				variant='temporary'
				open={mobileOpen}
				anchor={'right'}
				onClose={handleToggle}
				ModalProps={{
					keepMounted: true,
				}}
				sx={{
					display: { xs: 'block', md: 'none' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						backgroundColor: theme.palette.primary[900],
						width: 400,
						maxWidth: '100%',
					},
				}}
			>
				<Sidebar setMobileOpen={setMobileOpen} />
			</Drawer>
		</>
	);
};

export default Navbar;
