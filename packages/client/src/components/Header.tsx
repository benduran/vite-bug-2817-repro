import React from 'react';

import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useHeaderStyles = makeStyles(() => ({
  headerRoot: {
    padding: '1em',
  },
}));

export const Header = () => {
  const classes = useHeaderStyles();
  return (
    <AppBar className={classes.headerRoot} variant='elevation'>
      <Typography variant='h6'>Stuff goes here</Typography>
    </AppBar>
  );
};
