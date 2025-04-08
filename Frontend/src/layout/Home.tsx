import { Outlet } from 'react-router-dom';

import NavBar from './Nav';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

const Home = observer(() => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }


  // if (authStore.loading)
  //   return <Loading />

  return (
    <div className='relative '>
      
        <NavBar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      
      <div className='flex items-start relative overflow-hidden sm:overflow-auto'>

      
        <div className='relative flex-1  '>
          <div className='flex items-center sticky max-w-5xl mx-auto z-20 top-0 '>
            

          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
})

export default Home