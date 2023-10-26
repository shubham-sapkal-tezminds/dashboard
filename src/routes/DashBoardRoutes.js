import DashboardLayout from "../pages/DashboardLayout";
import DashBoard from "../Sidebar/dashboard";

const DashBoardRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    {
      path: "dashboard",
      children: [
        {
          path: "",
          element: <DashBoard />,
        },
      ],
    },
  ],
};
