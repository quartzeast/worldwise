import { Link } from 'react-router'
import PageNav from '../components/PageNav'

function Homepage() {
  return (
    <div>
      <PageNav />

      <h1>Worldwise</h1>

      <Link to="/pricing">Pricing</Link>
    </div>
  )
}

export default Homepage
