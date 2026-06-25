function Projects() {

    const projects = [

        {
            name: "React Weather App",
            tech: "React, API, CSS",
            description:
                "Weather application with city search, geolocation, search history, and weather data from OpenWeather API."
        },

        {
            name: "React To-Do App",
            tech: "React, useState",
            description:
                "Task management application with add, delete, and complete task functionality."
        },

        {
            name: "React Quiz App",
            tech: "React, Props, State",
            description:
                "Interactive quiz application with score tracking and multiple questions."
        },

        {
            name: "Hero Battle Arena",
            tech: "React, useState",
            description:
                "RPG battle simulator featuring hero classes, monsters, healing system, and battle logs."
        },

        {
            name: "React Portfolio Website",
            tech: "React Router, CSS",
            description:
                "Personal portfolio website featuring routing, project showcase, contact page, and theme toggle."
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