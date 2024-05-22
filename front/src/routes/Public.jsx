import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import NotFound from "../pages/notfound/NotFound";
import FormService from "../pages/services/FormService";
import Profile from "../pages/profile/Profile";
import Validate from "../pages/validate/validate";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import ProfileUser from "../pages/profileuser/ProfileUser";

function Public() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forms/services" element={<FormService />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/validate" element={<Validate />} />

      <Route
        path="/profile/:id"
        element={<ProfileUser />}
      />
    </Routes>
  );
}

export default Public;
