function Projects() {

    const projects = [

        {
            name: "React Weather App",
            tech: "React, API, CSS",
            description:
                "Weather app with city search and geolocation."
        },

        {
            name: "Hero Battle Arena",
            tech: "React, useState",
            description:
                "RPG battle simulator with classes and battle logs."
        },

        {
            name: "React Counter App",
            tech: "React",
            description:
                "Counter application using React state."
        }

    ];

    return (

        <div className="page">

            <h1>
                🚀 Projects
            </h1>

            <div className="projects-grid">

                {projects.map((project, index) => (

                    <div
                        key={index}
                        className="project-card"
                    >

                        <h2>
                            {project.name}
                        </h2>

                        <p>
                            {project.description}
                        </p>

                        <h4>
                            {project.tech}
                        </h4>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default Projects;