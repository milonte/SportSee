import { Link } from 'react-router-dom';
import '../styles/components/navbar.scss';

export default function LeftBar() {
    return (
        <div className='navbar leftbar'>
            <div className='empty'></div>
            <div className='pills'>
                <Link className='leftpill' to={'/12'}><div className='yoga'></div></Link>
                <Link className='leftpill' to={'/12'}><div className='wave'></div></Link>
                <Link className='leftpill' to={'/12'}><div className='bike'></div></Link>
                <Link className='leftpill' to={'/12'}><div className='alt'></div></Link>
            </div>
            <p className='copyright'>Copiryght, SportSee 2020</p>
        </div>
    )
}
