import './skills.scss';
import { React, Vite, Github, Node, Docker, Redux, Sass } from '@assets/import';

function Skills () {

    return (
        <div className='skillsContainer'>
            <h2>SKILLS</h2>
            <div className='w-logo'>
                <img src={React} alt="react logo" />
                <img src={Vite} alt="vite logo" />
                <img src={Github} alt="github logo" />
                <img src={Node} alt="node logo" />
                <img src={Docker} alt="docker logo" />
                <img src={Redux} alt="redux logo" />
                <img src={Sass} alt="sass logo" />
            </div>
        </div>

    )
}

export default Skills