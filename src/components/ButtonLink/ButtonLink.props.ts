import React from 'react';
import { NavLinkProps } from 'react-router-dom';

export interface ButtonLinkProps
  extends NavLinkProps,
    React.RefAttributes<HTMLAnchorElement> {
  activeState?: boolean;
}
