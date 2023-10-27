import DashboardLayout from "../layouts/DashBoardLayOut";
import Dashboard from "../pages/dashboard";
import Customer from "../pages/customerlist";
import Settings from "../pages/settings";
import ContactUs from "../pages/contactUs";
import Pricing from "../pages/pricing";

const DashboardRoutes = {
  path: "/",
  element: (
    // <ProtectedRoute>
    <DashboardLayout />
    // </ProtectedRoute>
  ),
  children: [
    {
      path: "dashboard",
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/customer",
      children: [
        {
          path: "",
          element: <Customer />,
        },
      ],
    },
    {
      path: "/settings",
      children: [
        {
          path: "",
          element: <Settings />,
        },
      ],
    },
    {
      path: "/contactUs",
      children: [
        {
          path: "",
          element: <ContactUs />,
        },
      ],
    },
    {
      path: "/pricing",
      children: [
        {
          path: "",
          element: <Pricing />,
        },
      ],
    },
  ],
};

export default DashboardRoutes;
