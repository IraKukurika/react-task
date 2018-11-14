import React from 'react';

import { Menu, Link } from './index';

export default () => (
  <Menu>
    <Link to="/game">New game</Link>
    <Link to="/load">Load game</Link>
    <Link to="/leader-board">Leaders</Link>
  </Menu>
);