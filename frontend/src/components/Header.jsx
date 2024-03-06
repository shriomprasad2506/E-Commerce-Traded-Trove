import { Navbar, Nav, Container, NavbarToggle } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assests/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                        <img src={logo} alt='ProShop'/>
                        ProShop</Navbar.Brand>
                    </LinkContainer>
                    <NavbarToggle aria-controls="basic-navbar-nav"/> 
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className="ms-auto">
                                <LinkContainer to='/Cart'>
                                <Nav.Link>
                                    <FaShoppingCart />Cart
                                </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/login'>
                                    <Nav.Link href="/login">
                                        <FaUser />Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header