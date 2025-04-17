import { Outlet } from 'react-router-dom'
import NavBar from './Nav'
import { observer } from 'mobx-react-lite'

const Home = observer(() => {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>
      
      {/* Content area with padding to account for navbar height */}
      <div className="pt-20"> {/* Replace [navbarHeight] with your actual navbar height (e.g., 'pt-16' for 4rem/64px) */}
        <Outlet />
      </div>
    </div>
  )
})

export default Home