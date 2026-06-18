function Projects() {

    const projects = [

        {
            title: "React Counter App",
            tech: "React, useState"
        },

        {
            title: "Weather App",
            tech: "React, API, LocalStorage"
        },

        {
            title: "Hero Battle Arena",
            tech: "React, Components, State"
        }

    ];

    return (

        <div className="page">

            <h1>
                My Projects
            </h1>

            <div className="project-container">

                {projects.map((project, index) => (

                    <div
                        key={index}
                        className="project-card"
                    >

                        <h2>
                            {project.title}
                        </h2>

                        <p>
                            {project.tech}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Projects;