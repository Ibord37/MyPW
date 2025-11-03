

const Skills = () => {
    const journeyCards = [
        { id: 1, icon: "cpp-icon text-blue-py", title: "C/C++", desc: "My first programming language learned. I used C++ for Growtopia Private Server development, competitive programming, game development test, and other learning." },
        { id: 2, icon: "fab fa-python text-blue-py", title: "Python", desc: "I used to use Python for discord bot development purpose, but now I use it for college projects." },
        { id: 3, icon: "fab fa-js text-warning", title: "JavaScript & TypeScript", desc: "I used to use JavaScript to develop discord bot, but then switched to the development of client-side and server-side of website." },
        { id: 4, icon: "fab fa-html5 text-orange-html", title: "HTML5", desc: "The first language I used to learn website for the first time as it is the core of website development." },
        { id: 5, icon: "fab fa-css text-blue-css", title: "CSS3", desc: "I used this to design my HTML page of course, this is also the core of website development." },
        { id: 6, icon: "fab fa-react text-blue-py", title: "React", desc: "Currently the library that I used to build my frontend SPA (Single Page Application) projects and this portofolio." },
        { id: 7, icon: "fab fa-bootstrap text-primary", title: "Bootstrap", desc: "A CSS Framework that I learned and found to be helpful in boosting my website development progress." },
        { id: 8, icon: "fas fa-database text-warning", title: "Database", desc: "For database, I have used MongoDB and PostgreSQL. However, I decided to fully use PostgreSQL for the simplicity." },
        { id: 9, icon: "fab fa-git text-warning", title: "Git", desc: "I usually distribute my code to Github with this tool." },
        { id: 10, icon: "vscode-icon", title: "Visual Studio Code", desc: "IDE (Integrated Development Environment) of my projects." }
    ];

    return (
        <section id="skills" className="container-fluid bg-dark text-center py-5 w-100">
            <div className="text-warning fs-1 mb-3"></div>
            <h1 className="fw-bold mb-3">Skills & Technologies</h1>
            <p className="text-light fs-4 mt-3">Technologies & Programming Languages I have used and familiar with:</p>

            <div className="row d-flex justify-content-center mt-4">
                <div className="col-10 col-md-4">
                    {journeyCards.slice(0, Math.ceil(journeyCards.length / 2)).map(journey => (
                        <div key={journey.id} className="card p-0 bg-dark text-white my-3">
                            <div className="card-body text-start">
                                <div className="d-flex">
                                    <i className={`fs-5 ${journey.icon}`}></i>
                                    <p className="fw-bold ms-2">{journey.title}</p>
                                </div>
                                <p>{journey.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-10 col-md-4 ms-4">
                    {journeyCards.slice(Math.ceil(journeyCards.length / 2)).map(journey => (
                        <div key={journey.id} className="card p-0 bg-dark text-white my-3">
                            <div className="card-body text-start">
                                <div className="d-flex">
                                    <i className={`fs-5 ${journey.icon}`}></i>
                                    <p className="fw-bold ms-2">{journey.title}</p>
                                </div>
                                <p>{journey.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>

    )
}

export default Skills;