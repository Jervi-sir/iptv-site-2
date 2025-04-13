import React from 'react';
import Header from './header';
import Footer from './footer';

export const Theme2Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
};