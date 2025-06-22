import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <div>
<header>
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">Abouts</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admission">Admission</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/notfound">NotFound</Link>
        <img src="https://vivekanandcollege.ac.in/images/header-new.png"></img>
        
    </nav>
</header>


        </div>
    )
}

export default Header;