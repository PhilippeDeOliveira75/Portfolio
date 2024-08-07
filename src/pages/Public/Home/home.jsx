
import './home.scss';

import { Intro, AboutMe, Skills, Projects, Contact } from '@components/import';


function Home() {


    return (

        <div className='homeContainer'>
            
            <Intro />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />

        </div>
    );
}

export default Home