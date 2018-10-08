import React from 'react';
import PropTypes from "prop-types";

import {Menu, Button, Link} from './index';

export const PauseMenu = ({onResume}) => (
  <Menu>
    <Button onClick={onResume}>Resume</Button>
    <Link href='#'>Main menu</Link>
  </Menu>
);

// interfaces
PauseMenu.propTypes = {
  onResume: PropTypes.func.isRequired
};
