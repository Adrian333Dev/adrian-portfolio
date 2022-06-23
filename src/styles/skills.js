import { styled, Box, alpha } from '@mui/material';

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
