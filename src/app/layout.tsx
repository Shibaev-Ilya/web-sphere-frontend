import './globals.scss';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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
        </div>
      </body>
    </html>
  )
}