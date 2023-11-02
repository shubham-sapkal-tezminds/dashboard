import LandingPageLayout from "../../layouts/LandingPageLayOut/index";
import Login from "../../layouts/LandingPageLayOut/Login/Login";
import SignUp from "../../layouts/LandingPageLayOut/SignUp/SignUp";
import { PATH_LOGIN, PATH_SIGNUP } from "../../Path/index";

const LandingPageRoutes = {
  path: "/",
  element: <LandingPageLayout />,
  children: [
    {
      path: PATH_LOGIN,
      element: <Login />,
    },
    {
      path: PATH_SIGNUP,
      element: <SignUp />,
    },
  ],
};

export default LandingPageRoutes;
