import React from 'react';
import Link from 'next/link';

import NavbarMenu from './NavbarMenu';
import LinkButton from '../button/LinkButton';

import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className='bg-primary'>
      <div className={styles.navbar}>
        <div className={styles.brand}>
          <Link href="/">Brand</Link>
        </div>
        <div className="flex justify-evenly space-x-12">
          <NavbarMenu href='/'>Home</NavbarMenu>
          <NavbarMenu href='/#about'>About</NavbarMenu>
          <NavbarMenu href='/#project'>Project</NavbarMenu>
          <LinkButton href='/#contact'>Contact</LinkButton>
        </div>
      </div>
    </nav>
  );
}