import './styles/error.scss';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Error() {
    const error: any = useRouteError();
    function displayError() {
        console.error(error);
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
            <div id="error">
                <div>{displayError()}</div>
                <Link to={"/"} className='home-link'>Retourner sur la page d’accueil</Link>
            </div>
        </>
    )
}