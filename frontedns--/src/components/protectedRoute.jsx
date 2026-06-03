import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import api from "../api";
import { useEffect, useState } from "react";

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(()  => {
    const refreshToken = async () => {
      const refreshTokenValue = localStorage.getItem(REFRESH_TOKEN);
      try {
        const res = await api.post("/api/token/refresh", {
          refresh: refreshTokenValue,
        });

        if (res.status === 200 && res.data?.access) {
          localStorage.setItem(ACCESS_TOKEN, res.data.access);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
      }
    };

    const auth = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN);
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const tokenExpiration = decodedToken?.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration && tokenExpiration < now) {
          await refreshToken();
        } else {
          setIsAuthenticated(true);
        }
      } catch (e) {
        console.log(e);
        setIsAuthenticated(false);
      }
    };

    auth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
