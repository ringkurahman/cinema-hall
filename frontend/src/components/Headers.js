import React, { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { UserContext } from '../App'
import { handleSignOut } from './login/LogInManager'


const Headers = () => {

  const [loggedInUser, setLogInUser] = useContext(UserContext)

  // Sign Out event handler
    const signOut = () => {
        handleSignOut()
          .then((res) => {
              setLogInUser(res)
        })
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Cinema Hall</Navbar.Brand>
            </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto d-flex align-items-center">
                {
                  loggedInUser.name && <Nav.Link>Welcome { loggedInUser.name }</Nav.Link>
                }
                
                {
                  loggedInUser.name ?
                    <Nav.Link>
                      <button className="btn btn-primary" onClick={signOut} style={{ border: 'none', background: 'none' }}><i className="fas fa-user"></i>Sign Out</button>
                    </Nav.Link> :
                    <Nav.Link href="/login"><i className="fas fa-user"></i>Sign In</Nav.Link>
                }
              </Nav>
                </Navbar.Collapse>
               </Container>
            </Navbar>
        </header>
    )
}

export default Headers