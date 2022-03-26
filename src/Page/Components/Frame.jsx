import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Frame = ({children}) => {
  return (
    <div className='frame'>
        <Header />
            {children}
        <Footer />
    </div>
  )
}

export default Frame