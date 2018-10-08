import React from 'react';
import {AppMenu} from "./styles";

export const Link = ({children, ...props}) => (
  <a className='link' {...props}>
    {children}
  </a>
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