import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <div className="header1">
                        
            
<header className="site-header">
    <div className="brand">
        Vivekanand College
    </div>
    <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">Abouts</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/admission">Admission</Link>
        <Link to="/notfound">NotFound</Link>
        <Link to="/admision" className="apply-btn">Apply Now!</Link>
        
        
    </nav>
</header>

        </div>
    )
}

export default Header;