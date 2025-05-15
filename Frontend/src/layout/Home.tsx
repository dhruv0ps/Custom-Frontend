import { Outlet, useOutletContext, useLocation } from 'react-router-dom'
import NavBar from './Nav'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = observer(() => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" 
    });
  }, [location.pathname]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white">
      {!isLoading && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <NavBar />
        </div>
      )}

      <div className={`bg-white ${isLoading ? "" : "pt-20"}`}>
        <Outlet context={{ isLoading, setIsLoading }} />
      </div>
    </div>
  )
})

export function useLoadingContext() {
  return useOutletContext<LoadingContextType>();
}

export default Home