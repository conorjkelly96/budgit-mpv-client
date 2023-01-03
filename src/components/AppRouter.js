import { Route, Routes, Navigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import { Navbar } from "./Navbar";
// import { Footer } from "./Footer";
// import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/LoginPage";
// import { SignUpPage } from "../pages/SignUpPage";
// import { DashboardPage } from "../pages/DashboardPage";
// import { AboutUsPage } from "../pages/AboutUsPage";
// import { Marketplace } from "../pages/Marketplace";
// import { ForumBoardPage } from "../pages/ForumBoardPage";
// import { ViewSavedJobs } from "../pages/ViewSavedJobs";
// import { CreateItemPage } from "../pages/CreateItemPage";
// import { SingleItemPage } from "../pages/SingleItemPage";
// import { CreateJobPage } from "../pages/CreateJobPage";
// import { ViewJobsPage } from "../pages/ViewJobsPage";
// import { ViewCreatedJobs } from "../pages/ViewCreatedJobs";
// import { CreatePostPage } from "../pages/CreatePostPage";
// import { ViewForumPostPage } from "../pages/ViewForumPostPage";
// import { EditItemPage } from "../pages/EditItemPage";
// import { PurchaseRequestsPage } from "../pages/PurchaseRequestsPage";
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
            {/* <Route path="/about-us" element={<AboutUsPage />} /> */}
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
