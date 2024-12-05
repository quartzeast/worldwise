import { NavLink } from 'react-router'
import PageNav from '../components/PageNav'

function Homepage() {
  return (
    <div>
      <PageNav />

      <h1>Worldwise</h1>

      <NavLink to="/pricing">Pricing</NavLink>
    </div>
  )
}

export default Homepage
