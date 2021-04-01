import React from 'react';

import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useLoaderStyles = makeStyles(() => ({
  loaderRoot: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    left: '50%',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

interface LoaderProps {
  className?: string;
  message?: string;
}

export const Loader = ({ className, message }: LoaderProps) => {
  const classes = useLoaderStyles();

  return (
    <Typography className={`${classes.loaderRoot} ${className ?? ''}`} component='div'>
      <CircularProgress size={40} />
      <br />
      {message}
    </Typography>
  );
};
