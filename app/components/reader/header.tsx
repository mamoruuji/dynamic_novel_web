"use client"

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import AppBar from '../sidebar/appBar'

import { useGrobalContext } from "app/context/store"

const header = () => {

const { leftOpen, rightOpen, handleRightDrawerOpen, handleLeftDrawerOpen} = useGrobalContext()

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" leftOpen={leftOpen} rightOpen={rightOpen}>
      <Toolbar className="justify-between">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleLeftDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(leftOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ m: "0 auto" }}>
          Persistent drawer
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleRightDrawerOpen}
          sx={{ ml: 2, ...(rightOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      </AppBar>
    </>
  );
};

export default header;
