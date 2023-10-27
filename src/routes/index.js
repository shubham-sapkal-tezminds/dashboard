import { useRoutes } from "react-router-dom";

import DashboardRoutes from "./DashBoardRoutes";

export default function ThemeRoutes() {
  return useRoutes([DashboardRoutes]);
}
