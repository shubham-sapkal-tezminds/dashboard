import { useRoutes } from "react-router-dom";

import DashboardRoutes from "./DashBoardRoutes/index";
import LandingPageRoutes from "./LandingPageRoutes/index";

export default function ThemeRoutes() {
  return useRoutes([LandingPageRoutes, DashboardRoutes]);
}
