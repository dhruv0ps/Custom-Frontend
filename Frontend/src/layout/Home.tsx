import { Outlet } from 'react-router-dom'
import NavBar from './Nav'

import { observer } from 'mobx-react-lite'

const Home = observer(() => {
  

  return (
    <div className="relative z-20 w-full min-h-screen">
      <NavBar />

      <div className="flex flex-col md:flex-row w-full overflow-auto">
        <div className="flex-1 w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  )
})

export default Home
