"use client"

import styled from '@mui/material/styles/styled';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface AppBarProps extends MuiAppBarProps {
  leftOpen?: boolean;
  rightOpen?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'leftOpen' && prop !== 'rightOpen',
})<AppBarProps>(({ theme, leftOpen, rightOpen }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(leftOpen && {
    width: `calc(100% - ${process.env.drawerWidth}px)`,
    marginLeft: `${process.env.drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(rightOpen && {
    width: `calc(100% - ${process.env.drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: process.env.drawerWidth,
  }),
}));

export default AppBar;
