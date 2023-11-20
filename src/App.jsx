import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LandingPage } from "./pages/LandingPage";
import ProfilePage  from "./pages/ProfilePage";
import LogoutButton from "./components/LogoutButton";
import Header from "./components/Header";
import LoginButton from "./components/LoginButton";
import Footer from "./components/Footer";

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/profile" element={<ProfilePage/>} />
          <Route exact path="/login" element={<LoginButton/>} />
          <Route exact path="/logout" element={<LogoutButton/>} />
          {/*<ProtectedRoute path="/user" component={UserPage} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;