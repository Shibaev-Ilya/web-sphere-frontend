import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import './globals.scss';
import Util from './components/Util/Util';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import Widget from './components/Widget/Widget';

export const metadata: Metadata = {
  title: 'Web Sphere - Digital агентство',
  description: 'Разработка сайтов и интернет-магазинов на WordPress и быстрых одностраничных лендингов. Создаем сайты, которые приносят продажи.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div id="root">
          <Util />
          <Header />
          {children}
          <Footer />
          <Modal />
          <Widget />
        </div>
      </body>
    </html>
  )
}