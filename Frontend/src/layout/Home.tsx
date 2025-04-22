import { Outlet, useOutletContext } from 'react-router-dom'
import NavBar from './Nav'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

// Define a type for the context if using TypeScript
type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="relative">
      {/* Only show Navbar when not loading */}
      {!isLoading && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavBar />
        </div>
      )}
      
      {/* Content area with padding only when navbar is visible */}
      <div className={isLoading ? "" : "pt-20"}>
        <Outlet context={{ isLoading, setIsLoading }} />
      </div>
    </div>
  )
})

// Helper function to use the loading context in child components
export function useLoadingContext() {
  return useOutletContext<LoadingContextType>();
}

export default Home