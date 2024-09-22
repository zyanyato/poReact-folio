import Reach from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
      <div>
        <h1>poReact-folio</h1>
        <ul>
            <li className='px-1'><Link to="/">Home</Link></li>
            <li className='px-1'><Link to="/porftolio">Portfolio</Link></li>
            <li className='px-1'><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    );
  }