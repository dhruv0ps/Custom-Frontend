import { refreshTokenThunk } from "@/features/authSlice";
import { AppDispatch, RootState } from "@/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { Loading } from "./Loading";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(true);
  // const location = useLocation();

  useEffect(() => {
    const refreshToken = sessionStorage.getItem("refresh_token");

    if (refreshToken && !isAuthenticated) {
      dispatch(refreshTokenThunk()).then((_action) => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [dispatch, isAuthenticated]);

  if (loading) {
    return <Loading full />;
  }

  // if (!isAuthenticated) {
  //   const callbackUrl = encodeURIComponent(location.pathname + location.search);
  //   return <Navigate to={`/auth/login?callback=${callbackUrl}`} />;
  // }

  if (isAuthenticated && user?.customerId === null) {
    return <Navigate to="/auth/profile" />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
