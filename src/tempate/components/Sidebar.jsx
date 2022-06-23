import React from 'react';
import { Box, Menu, styled } from '@mui/material';

import { sections } from './Navbar';

export const StyledSidebar = styled(Box)(({ theme }) => ({
	width: '100%',
	height: '100%',
}));

export const SidebarLinks = () => {
	return <Menu></Menu>;
};

const Sidebar = () => {
	return <StyledSidebar>Sidebar</StyledSidebar>;
};

export default Sidebar;
