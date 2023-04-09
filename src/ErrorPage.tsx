import './styles/error.scss';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TopBar from './components/TopBar';
import LeftBar from './components/LeftBar';
import { ReactElement } from 'react';

/**
 * Error page
 * @returns ReactElement
 */
export default function ErrorPage(): ReactElement {
    const error: any = useRouteError();

    return (
        <>
            <TopBar />
            <LeftBar />
            <div className="main">
                <div id="error">
                    <div className='error-status'>{error.status}</div>
                    {/* <div className='error-message'>{404 === error.status ?
                        "Oups! La page que vous demandez n'existe pas." :
                        "Oups! Un problème est survenu."}
                    </div> */}
                    <div className='error-message'>{error.statusText}</div>
                    <Link to={"/"} className='home-link'>Retourner sur la page d’accueil</Link>
                </div>
            </div>
        </>
    )
}