import { useNavigate } from 'react-router-dom';
import { 
    NavContainer,
    NavWrap,
    Nav,
    NavLink,
    ButtonContainer, 
    Button 
} from './NavigationStyled';

export const Navigation = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/register');
    }

    return (
            <NavContainer>
                <NavWrap>
                    
                    <Nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                        <NavLink to="/about">About Page</NavLink>
                    </Nav>
                    
                    <ButtonContainer>
                        <Button onClick={handleLogout}>
                            <span>Logout</span>
                        </Button>
                    </ButtonContainer>
                    <NavLink to="/register">Register Page</NavLink>
                    <NavLink to="/login">Login Page</NavLink>
                </NavWrap>
            </NavContainer>
        )
}