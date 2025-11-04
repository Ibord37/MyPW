import { useEffect, useState } from "react";
import axios from "axios";

interface TypeProject {
    name: string;
    description: string;
    html_url: string;
    language: string;
    fork: boolean;
}

const Works = () => {
    const [projects, setProjects] = useState<TypeProject[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const GetProjects = async () => { // manual filter as idk why does the parameter fork=false not working
        try {
            setLoading(true);
            const res = await axios.get<TypeProject[]>("https://api.github.com/users/vydev37/repos?per_page=50");
            if (!res.data) {
                console.log("Failed to GET projects.");
                return;
            }

            const filtered = res.data.filter(repo => !repo.fork).slice(0, 5);
            setProjects(filtered);
        } catch (err) {
            console.log(err);
            setProjects([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        GetProjects()
    }, []);

    return (
        <section id="works" className="container-fluid text-center py-5 w-100" style={{ background: "#2c313c" }}>
            <div className="text-warning fs-1 mb-3"></div>
            <h1 className="fw-bold mb-3">My Works</h1>
            <p className="text-light fs-4 mt-3">This section contains my published works on GitHub.</p>

            {loading ? (
                <p className="lead">Loading...</p>
            ) : (
                <div className="row d-flex justify-content-start mx-5 mt-4 g-4 mb-5">
                    {projects.map((project, idx) => (
                        <div className="col-12 col-md-6 col-lg-3" key={idx}>
                            <div className="card bg-dark text-white h-100 border-0 shadow-lg">
                                <div className="card-body p-4 d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-baseline mb-3">
                                        <h5 className="fw-semibold text-start mb-0">{project.name}</h5>
                                        <span className="fw-semibold small">{project.language}</span>
                                    </div>

                                    <p className="card-text text-start flex-grow-1 mb-4">
                                        {project.description || 'No description available.'}
                                    </p>

                                    <div className="mt-auto"> 
                                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-info text-white fw-bold w-100">
                                            <i className="fab fa-github mx-1"></i>View On Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </section>

    )
}

export default Works;