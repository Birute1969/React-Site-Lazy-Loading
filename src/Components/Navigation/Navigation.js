import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavContainer } from './NavigationStyled';



export const Navigation = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    }

    return (
        <NavContainer>
             {/* {location.pathname !== '/' && <Link to="/">Home</Link>} */}
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about">About Page</Link>
            <button onClick={handleLogout}>Logout</button>
        </NavContainer>
           
    )
}