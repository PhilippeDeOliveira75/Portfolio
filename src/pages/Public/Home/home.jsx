
import './home.scss';

import { Intro, AboutMe, Skills, Projects } from '@components/import';


function Home() {


    return (

        <div className='homeContainer'>
            
            <Intro />
            <AboutMe />
            <Skills />
            <Projects />

        </div>
    );
}

export default Home;