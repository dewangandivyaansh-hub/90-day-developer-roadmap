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

                I am a self-taught developer currently following a
                90-Day Developer Roadmap.

                I enjoy building web applications with React and
                learning modern development technologies.

                My goal is to become a full-stack developer and
                work on real-world software projects.

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