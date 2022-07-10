import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div >
            <Banner />
            <Skills />
            <Services />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;