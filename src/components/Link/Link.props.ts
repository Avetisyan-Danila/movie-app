import React from 'react';
import { NavLinkProps } from 'react-router-dom';

export interface LinkProps
  extends NavLinkProps,
    React.RefAttributes<HTMLAnchorElement> {}
