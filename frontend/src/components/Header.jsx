import { useNavigate } from 'react-router-dom';
import { Badge, Navbar, Nav, Container, NavbarToggle, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector,useDispatch } from 'react-redux'
import logo from '../assests/logo1.png';
import {useLogoutMutation} from '../slices/usersApiSlice'
import {logout} from '../slices/authSlice'
import { Link } from 'react-router-dom';
const Header = () => {
    const { cartItems } = useSelector((state) => state.cart)
    const {userInfo} =useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate= useNavigate()

    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async() => {
        try{ 
            await logoutApiCall().unwrap()
            dispatch(logout())
            navigate('/login')
        }
        catch(err){
            console.log(err)
        } 
    }
    
    console.log('cartItems:', cartItems);
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img src={logo} alt='ProShop' style={{ height: '50px' }} />
                            TradeTrove</Navbar.Brand>
                    </LinkContainer>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="ms-auto">
                            <LinkContainer to='/Cart'>
                                <Nav.Link>
                                    <FaShoppingCart />Cart
                                    {cartItems.length > 0 && (
                                        <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                                            {cartItems.reduce((a, c) => a + c.qty, 0)}
                                        </Badge>
                                    )}
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo?(
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>

                                </NavDropdown>
                            ): (<LinkContainer to='/login'>
                                <Nav.Link href="/login">
                                    <FaUser />Sign In
                                </Nav.Link>
                            </LinkContainer>)}
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header