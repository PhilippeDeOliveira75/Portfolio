import './projects.scss';

function Projects() {
    return ( 
        <div className="projectsContainer">
            <h2>PROJECTS</h2>
            <div className="w-projects">
                <div className="project">
                    <img src='' alt="project1" />
                    <h3>Project 1</h3>
                    <p>Project description</p>
                </div>
                <div className="project">
                    <img src='' alt="project2" />
                    <h3>Project 2</h3>
                    <p>Project description</p>
                </div>
                <div className="project">
                    <img src='' alt="project3" />
                    <h3>Project 3</h3>
                    <p>Project description</p>
                </div>
                <div className="project">
                    <img src='' alt="project4" />
                    <h3>Project 4</h3>
                    <p>Project description</p>
                </div>

            </div>
        </div>
    );
}

export default Projects