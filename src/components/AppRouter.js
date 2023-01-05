import { Route, Routes, Navigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";
// import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";
// import { DashboardPage } from "../pages/DashboardPage";

import { useAuth } from "../contexts/AppProvider";
import { DashboardPage } from "../pages/Dashboard";

export const AppRouter = () => {
  const { isLoggedIn, user } = useAuth();
  console.log(isLoggedIn);

  return (
    <>
      <div id="root">App Router</div>
      <Stack sx={{ minHeight: "100vh" }}>
        <Navbar />
        <Box sx={{ minHeight: "75vh" }}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            {/* <Route path="/" element={<HomePage />} /> */}

            {isLoggedIn && (
              <>
                {/* Dashboard Page - view all budgets */}
                <Route path="/dashboard" element={<DashboardPage />} />

                {/* Create Budget Page */}
                {/* Edit Budget Page */}
              </>
            )}

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Box>
        {/* <Footer /> */}
      </Stack>
    </>
  );
};
