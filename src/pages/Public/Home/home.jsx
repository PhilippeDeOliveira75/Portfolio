import './home.scss';
import { Intro, AboutMe, Skills, Projects, Contact } from '@components/import';

function Home() {
    return (
        <div className='homeContainer'>
            <section id="home">
                <Intro />
            </section>
            <section id="about">
                <AboutMe />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default Home;