import { Router, Route } from '@redwoodjs/router'
import HomePage from './pages/HomePage/HomePage'
import { TestPage } from './pages/TestPage/TestPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/test" page={TestPage} name="test" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
