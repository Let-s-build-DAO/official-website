import React from 'react';
import Hero from '../components/Hero';
// import Contact from '../components/home_page/Contact';
import Newsletter from '../components/home_page/Newsletter';
import Sponsor from '../components/home_page/Sponsor';

function Home() {
    return (
        <div>
            <Hero />
            <Sponsor />
            {/* <Contact /> */}
            {/* <Newsletter /> */}
        </div>
    );
}

export default Home;