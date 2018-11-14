import React from 'react';
import PropTypes from "prop-types";

import {Menu, Button, Link} from './index';

export const PauseMenu = ({onResume, onSave}) => (
  <Menu>
    <Button onClick={onResume}>Resume</Button>
    <Button onClick={onSave}>Save and exit</Button>
    <Link to="/">Main menu</Link>
  </Menu>
);

// interfaces
PauseMenu.propTypes = {
  onResume: PropTypes.func.isRequired
};
