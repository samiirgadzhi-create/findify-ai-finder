import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to niche selection page
    navigate("/niche-selection");
  }, [navigate]);

  return null;
};

export default Dashboard;
