
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/main");
    } else {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  return <div>HomePage</div>;
};

export default HomePage;
