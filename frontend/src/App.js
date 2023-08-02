import "./App.css";
import JobPosting from "./pages/JobPosting";
import Jobs from "./pages/Jobs";
import Leaderboard from "./pages/Leaderboard";
import Verification from "./pages/Verification";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import { RequireAuth } from "react-auth-kit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePost from "./pages/CreatePost";
import Assessment from "./pages/Assessment";
import Step1 from "./pages/Step1";
import UserProfile from "./pages/UserProfile";
import Signuprecruiter from "./pages/SignupRecrutier";
import RecruiterSteps1 from "./pages/RecruiterSteps1";
import Navbar from "./pages/components/Navbar";

import { Avatar, Typography, BottomNavigation } from "@mui/material";
import UploadAssessment from "./pages/UploadAssessment";
import LoginPage from "./pages/components/LoginBox";
import SearchBar from "./pages/components/SearchBar";
import ViewUser from "./pages/ViewUser";
import Chat from "./pages/Chat";

import Application from "./pages/Application";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<><Navbar userType={""} /></>} />
        <Route path="/test" element={<><Navbar userType={""} /><LoginPage /></>} />
        <Route path="/search" element={<><Navbar userType={"user"} /><SearchBar /></>} />
        <Route path="/viewprofile/:id" element={<ViewUser />} />
        <Route path="/chat" element={<><Navbar userType={"user"} /><Chat /></>} />

        <Route path="/login" element={<><Navbar userType={""} /><Login /></>} />
        <Route path="/signup" element={<><Navbar userType={""} /><Signup /></>} />
        <Route path="/leaderboard/:id" element={<><Navbar userType={"user"} /><Leaderboard /></>} />
        <Route path="/step1" element={<><Navbar userType={"user"} /><Step1 /></>} />
        <Route path="/User" element={<><Navbar userType={"user"} /><UserProfile /></>} />
        <Route path="/signuprecruiter" element={<><Navbar userType={"recruiter"} /><Signuprecruiter /></>} />
        <Route path="/recruiterstep1" element={<><Navbar userType={"recruiter"} /><RecruiterSteps1 /></>} />

        <Route path="/upload" element={<><Navbar userType={"recruiter"} /><UploadAssessment /></>} />
        <Route path="/verfication/:id" element={<><Navbar userType={"user"} /><Verification /></>} />
        <Route path="/application" element={<><Navbar userType={"user"} /><Application /></>} />
        <Route path="/jobs" element={<><Navbar userType={"user"} /><Jobs /></>} />
        <Route path="/jobpost/:id" element={<><Navbar userType={"user"} /><JobPosting /></>} />
        <Route path="/assess/:id" element={<><Navbar userType={"user"} /><Assessment /></>} />
        <Route path="/createpost" element={<><Navbar userType={"recruiter"} /><CreatePost /></>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
