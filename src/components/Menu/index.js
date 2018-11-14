import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {AppMenu} from "./styles";

export const Link = ({children, ...props}) => (
  <RouterLink className='link' {...props}>
    {children}
  </RouterLink>
);

export const Button = ({children, ...props}) => (
  <button className='link' {...props}>
    {children}
  </button>
);

export const Menu = ({title, children}) => (
  <AppMenu>
    <nav className='menu'>
      {title}
      <ul>
        {children.map((child , index) => (
          <li key={index}>{child}</li>
        ))}
      </ul>
    </nav>
  </AppMenu>
);