import { NavLink } from 'react-router'
import PageNav from '../components/PageNav'
import AppNav from '../components/AppNav'

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />

      <h1 className="test">Worldwise</h1>

      <NavLink to="/app">Go to app</NavLink>
    </div>
  )
}

export default Homepage
