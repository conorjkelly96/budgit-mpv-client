import { Route, Routes, Navigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";
// import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
// import { SignUpPage } from "../pages/SignUpPage";
// import { DashboardPage } from "../pages/DashboardPage";

import { useAuth } from "../contexts/AppProvider";

export const AppRouter = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <div id="root">App Router</div>
      <Stack sx={{ minHeight: "100vh" }}>
        <Navbar />
        <Box sx={{ minHeight: "75vh" }}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/sign-up" element={<SignUpPage />} /> */}
            {/* <Route path="/" element={<HomePage />} /> */}

            {isLoggedIn && (
              <>
                {/* Dashboard Page - view all budgets */}
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
