import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "../pages/Create";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import Users from "../pages/Users";

const PagesRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/create" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
