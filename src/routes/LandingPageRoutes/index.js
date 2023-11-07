import LandingPageLayout from "../../layouts/LandingPageLayOut/index";
import LogIn from "../../layouts/LandingPageLayOut/Login";
import SignUp from "../../layouts/LandingPageLayOut/SignUp";
import { PATH_LOGIN, PATH_SIGNUP } from "../../Config/index";

const LandingPageRoutes = {
  path: "/",
  element: <LandingPageLayout />,
  children: [
    {
      path: PATH_LOGIN,
      element: <LogIn />,
    },
    {
      path: PATH_SIGNUP,
      element: <SignUp />,
    },
  ],
};

export default LandingPageRoutes;
