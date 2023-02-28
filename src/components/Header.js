import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'


function Header() {

  // const userLogin = useSelector(state => state.userLogin)
  // const {userInfo} = userLogin
  // const dispatch = useDispatch()

  //   const logoutHandler = () => {
  //       dispatch(logout())
  //   }
  return (
    
      <header>
        
    <Navbar bg="dark"   variant="dark"  expand="lg" collapseOnSelect>
      <Container>
     
        <Navbar.Brand href='/#/'>Vishwakarma Arts</Navbar.Brand>
      

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

         
            <Nav.Link  href='/arya2'><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>.
            <Nav.Link  href='/HomeScreen'><i className="fas fa-user"></i>Login</Nav.Link>

            {/* {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <a href='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </a>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <a href='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </a>
                                )} */}
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


      </header>
    
  )
}

export default Header
