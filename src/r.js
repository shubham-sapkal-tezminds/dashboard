
import { useRoutes } from "react-router-dom";
import BaseRoutes from "./LandingPageRoutes";

// routes
import DashboardRoutes from "./DashboardRoutes";
import BasicRoutes from "./BasicRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([BaseRoutes, DashboardRoutes, BasicRoutes]);
}
import BasicLayout from "../layouts/BasicLayout";
import Builder from "../pages/builder";

const BasicRoutes = {
  path: "/",
  element: <BasicLayout />,
  children: [
    {
      path: "/builder",
      element: <Builder />,
    },
  ],
};

export default BasicRoutes;


import LandingPageLayout from "../layouts/LandingPageLayout";
import Home from "../pages/home";

const LandingPageRoutes = {
  path: "/",
  element: <LandingPageLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ],
};

export default LandingPageRoutes;
BaseRoutes;
