import React, {Component} from 'react';
import LinkBorder from './LinkBorder.js';
import Link from 'next/link';

const Button = ({href, text}) => (
  <Link href={href}>
    <a className="btn" href={href}>
      {text}
      <LinkBorder btnType={'btn_border'} />
    </a>
  </Link>
);
export default Button;
