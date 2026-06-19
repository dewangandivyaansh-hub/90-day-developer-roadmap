function About() {

    const skills = [

        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git",
        "GitHub"

    ];

    return (

        <div className="page">

            <h1>
                👨‍💻 About Me
            </h1>

            <p>

                I'm currently learning
                frontend development
                and building projects
                daily.

            </p>

            <h2>
                Skills
            </h2>

            <div className="skills-container">

                {skills.map((skill, index) => (

                    <span
                        key={index}
                        className="skill-badge"
                    >

                        {skill}

                    </span>

                ))}

            </div>

        </div>

    );

}

export default About;