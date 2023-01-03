import {Link} from 'react-router-dom';
import './Navegacion.css';

export default function Navegacion () {
    return(
        <div className='barnav'>
            <ul>
                <li>
                    <Link className='itemnav' to="/">Home</Link>
                </li>
                <li>
                    <Link className='itemnav' to="/Service">Service</Link>
                </li>
                <li>
                    <Link className='itemnav' to="/contact">Contact</Link>
                </li>
                <li>
                    <Link className='itemnav' to="/gallery">Gallery</Link>
                </li>
                
            </ul>
        </div>
    )
}
