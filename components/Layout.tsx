import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './navbar/Navbar';

type Props = {
  title?: string;
  children?: React.ReactNode;
};

export default function Layout({title, children} : Props) {
  title = title ? `${title} | Tarius` : 'Tarius Personal Website';
  return (
    <>
    <Header title={title} />
    <body>
      <Navbar />
      {children}
    </body>
    <Footer />
    </>
  );
}