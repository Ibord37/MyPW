import CVSaya from "../../public/CV Saya.pdf";

const Home = () => {
    return (
        <section id="home" className="container-fluid bg-dark text-center py-5 w-100" style={{ height: '80vh' }}>
            <div className="text-warning fs-1 mb-3"></div>
            <div className="mt-5">
                <h1 className="display-4 fw-bold mb-3">Welcome to my page!</h1>
                <h2 className="h3 fw-semibold">Hi, I'm <span style={{ color: "var(--fav-color)" }}>Vincent</span>.</h2>
                <div className="row d-flex fs-5 mt-5 justify-content-center">
                    <div className="col-5">
                        I am a full-stack developer who usually uses TypeScript for both Frontend and Backend.
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <a className="button text-white rounded-2 border-0 outline-0 text-decoration-none py-2 px-4 fs-5 my-4 mx-3 fw-bold" 
                    style={{ background: "var(--fav-color)" }} href={CVSaya} download="Vincent's CV" target="_blank" rel="noreferrer" >Download CV</a>
                <a className="button text-white bg-transparent border-1 rounded-2 outline-0 text-decoration-none py-2 px-4 fs-5 my-4 mx-3 fw-bold"
                    style={{ borderColor: "var(--fav-color)" }} href="#about">About me</a>
            </div>
        </section>
    )
}

export default Home;