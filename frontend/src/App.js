import React, { createContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import useLocalStorageState from "use-local-storage-state"
import { Container } from 'react-bootstrap'
import Headers from './components/Headers'
import Footer from './components/Footer'
import HomeScreen from './components/screen/HomeScreen'
import LoginScreen from './components/screen/LoginScreen'
import MovieDetailScreen from './components/screen/MovieDetailScreen'
import PrivateRoute from './components/PrivateRoute'


export const UserContext = createContext()

const App = () => {

  const [loggedInUser, setLogInUser] = useLocalStorageState('info', {})

  return (
    <UserContext.Provider value={[loggedInUser, setLogInUser]}>
    <Router>
      <Headers></Headers>
      <main className="py-3">
          <Container>
            <PrivateRoute exact path='/moviedetails/:id'>
              <Route path='/moviedetails/:id' component={MovieDetailScreen} />
            </PrivateRoute>
            <Route path='/login' component={LoginScreen} />
            <Route exact path='/' component={HomeScreen} />
          </Container>
      </main>
      <Footer></Footer>
      </Router>
      </UserContext.Provider>
  )
}

export default App
