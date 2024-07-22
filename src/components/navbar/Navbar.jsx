import './Navbar.css'
// Navbar component of the page
// Should be responsive
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <p>JOSHUEL ERNEST SIMBULAN</p>
            </div>
            <div className="links">
                <a href="#" className="stack">Stack</a>
                <a href="#" className="projects">Projects</a>
                <a href="#" className="contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;