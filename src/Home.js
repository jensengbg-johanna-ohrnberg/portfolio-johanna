import React from 'react';
import Introduction from './components/homepage/Introduction';
import Competences from './components/homepage/Competences';
import Portfolio from './components/homepage/Portfolio';
import Resume from './components/homepage/Resume';
import Contact from './components/homepage/Contact';

export default function Home() {
    return (
        <div>
            <Introduction />
            <Competences />
            <Portfolio />
            <Resume />
            <Contact />
        </div>
    )
}
