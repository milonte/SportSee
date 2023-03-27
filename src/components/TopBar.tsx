import { Link } from 'react-router-dom';
import '../styles/components/navbar.scss';

export default function TopBar() {
    return (
        <div className='navbar topbar'>
            <div className='navbar-logo'>
                <div className="logo-svg"></div>
                <p className="sportsee">SportSee</p>
            </div>
            <Link className='navlink' to={'/12'}>Accueil</Link>
            <Link className='navlink' to={'/12'}>Profil</Link>
            <Link className='navlink' to={'/12'}>Réglage</Link>
            <Link className='navlink' to={'/12'}>Communauté</Link>
        </div>
    )
}
