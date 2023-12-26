import React, { useState } from 'react';
import Header from '~/components/Layout/Header';
import Banner from '~/components/Layout/Banner';
import Technology from '~/components/Layout/Technology';
import About from '~/components/Layout/About';
import Contact from '~/components/Layout/Contact';
import Footer from '~/components/Layout/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Banner />
            <Technology />
            <About />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
