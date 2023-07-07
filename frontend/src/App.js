import "./App.css";
import JobPosting from "./pages/JobPosting";
import Jobs from "./pages/Jobs";
import Leaderboard from "./pages/Leaderboard";
import { Routes, Route } from "react-router-dom";

import { RequireAuth } from "react-auth-kit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePost from "./pages/CreatePost";
import Step1 from "./pages/Step1";
import UserProfile from "./pages/UserProfile";
import Signuprecruiter from './pages/SignupRecrutier';
import { Avatar, Typography, BottomNavigation } from "@mui/material";
import Logo from "./assets/images/CoBuildLogo.png";
import Code from "./pages/Code";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboard/:id" element={<Leaderboard />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/User" element={<UserProfile />} />
        <Route path="/Code" element={<Code />} />
        <Route path="/signuprecruiter" element={ <Signuprecruiter/> } />
        <Route
          path="/jobs"
          element={
            <RequireAuth loginPath="/login">
              <Jobs />
            </RequireAuth>
          }
        />
        <Route
          path="/jobpost/:id"
          element={
            <RequireAuth loginPath="/login">
              <JobPosting />
            </RequireAuth>
          }
        />
        <Route
          path="/createpost"
          element={
            <RequireAuth loginPath="/login">
              <CreatePost />
            </RequireAuth>
          }
        />
      </Routes>
      <BottomNavigation
        style={{
          background: "#3B3B3B",
          height: "195px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Work Sans",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Logo"
            src={Logo}
            style={{
              width: "60px",
              height: "60px",
              marginRight: "10px",
              marginLeft: "40px",
            }}
          />
          <Typography
            variant="body1"
            style={{
              color: "white",
              fontSize: "28px",
              fontFamily: "Work Sans",
              borderBottom: "1px solid white",
            }}
          >
            CoBuild
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: "white",
              fontSize: "28px",
              fontFamily: "Work Sans",
              marginLeft: "150px",
            }}
          >
            <a href="#" style={{ color: "white" }}>
              Join Our Community
            </a>{" "}
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: "white",
              fontSize: "28px",
              fontFamily: "Work Sans",
              marginLeft: "150px",
            }}
          >
            <a href="#" style={{ color: "white" }}>
              About
            </a>{" "}
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: "white",
              fontSize: "28px",
              fontFamily: "Work Sans",
              marginLeft: "150px",
            }}
          >
            <a href="#" style={{ color: "white" }}>
              Explore
            </a>{" "}
          </Typography>
        </div>
        <div
          style={{
            borderTop: "1px solid white",
            marginTop: "20px",
            paddingTop: "10px",
            display: "flex",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <Typography
            variant="body2"
            style={{
              color: "white",
              fontSize: "14px",
              fontFamily: "Work Sans",
            }}
          >
            &copy; {new Date().getFullYear()} CoBuild. All rights reserved.
          </Typography>
        </div>
      </BottomNavigation>
    </div>
  );
}

export default App;
