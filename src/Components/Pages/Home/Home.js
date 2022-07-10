import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Services />
            <Projects />
        </div>
    );
};

export default Home;