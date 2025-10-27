import './globals.scss';
import dynamic from 'next/dynamic';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
// const ServerComponent = dynamic(() => import('./components/Modal/Modal'));
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div id="root">
          <Header />
          {children}
          <Footer />
          <Modal />
        </div>
      </body>
    </html>
  )
}