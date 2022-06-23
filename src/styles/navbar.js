import { AppBar, styled, Toolbar, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
	backgroundColor: 'rgba(0, 0, 0, 0.75)',
	backdropFilter: 'blur(6px)',
}));
export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	minHeight: '0 !important',
	height: 52,
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));
export const NavLink = styled('a')(({ theme }) => ({
	color: '#A0AEC0',
	transition: 'all 0.2s ease-in-out',
	cursor: 'pointer',
	padding: '0.5rem 0.7rem',
	'&:hover': {
		color: '#0BC5EA',
	},
}));
