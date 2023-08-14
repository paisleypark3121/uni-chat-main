import { Link } from 'react-router-dom';
import './header.css'

export function Header(props){
    const {admin} = props;

    return (
    <div className="header">
    <h1 className="header-title">UniChat</h1>
    {admin && <h2 className="header-page">Admin</h2>}
    <div className="dropdown">
      <button className="dropbtn">&#9776;</button>
      <div className="dropdown-content">
        {admin ? <Link to="/">Chat</Link> : <Link to="/admin">Admin</Link>}
      </div>
    </div>
  </div>
    );
}