import './styles/error.scss';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TopBar from './components/TopBar';
import LeftBar from './components/LeftBar';

export default function ErrorPage() {
    const error: any = useRouteError();
    function displayError() {
        return (
            <>
                <div className='error-status'>{error.status}</div>
                <div className='error-message'>{404 === error.status ?
                    "Oups! La page que vous demandez n'existe pas." :
                    "Oups! Un problème est survenu."}
                </div>
            </>
        )
    }
    return (
        <>
            <TopBar />
            <LeftBar />
            <div className="main">
                <div id="error">
                    <div>{displayError()}</div>
                    <Link to={"/"} className='home-link'>Retourner sur la page d’accueil</Link>
                </div>
            </div>
        </>
    )
}