import React from 'react';
import { render } from 'react-dom';

import { Header, Loader } from 'components';

const rootDiv = document.getElementById('root');

render(
  <>
    <Header />
    <Loader message='Application is warming up...' />
  </>,
  rootDiv,
);
