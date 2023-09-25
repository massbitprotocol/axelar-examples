import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from 'components/ThemeToggle';

export const Navbar = () => {
    //const [logo, setLogo] = React.useState('/assets/axelar_logo.svg');
    const [logo, setLogo] = React.useState('/assets/scalar.png');
    return (
        <header className="navbar bg-base-200 shadow-sm px-16">
          <Image width={226} height={32} src={logo} alt="Scalar" />
          <nav className="menu menu-horizontal ml-4 flex-1">
            <ul>
              <li>
                <Link href="/">
                  <a className='text-lg'>Examples</a>
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle onThemeChange={(theme: string) => {
            if (theme === 'business') {
              setLogo('/assets/scalar_white.jpg');
            } else {
              // setLogo('/assets/axelar_logo.svg');
              setLogo('/assets/scalar.png');
            }
          }} />
        </header>
    );
};
