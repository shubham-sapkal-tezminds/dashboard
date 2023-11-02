import DashboardLayout from "../../layouts/DashBoardLayOut";
import Dashboard from "../../Pages/Dashboard";
import Customer from "../../Pages/Customerlist";
import Settings from "../../Pages/Settings";
import ContactUs from "../../Pages/ContactUs";
import Pricing from "../../Pages/Pricing";
import {
  PATH_DASHBOARD,
  PATH_CUSTOMER_LIST,
  PATH_CONTACT_US,
  PATH_PRICING,
  PATH_SETTINGS,
} from "../../Path";

const DashboardRoutes = {
  path: "/",
  element: (
    // <ProtectedRoute>
    <DashboardLayout />
    // </ProtectedRoute>
  ),
  children: [
    {
      path: PATH_DASHBOARD,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: PATH_CUSTOMER_LIST,
      children: [
        {
          path: "",
          element: <Customer />,
        },
      ],
    },
    {
      path: PATH_SETTINGS,
      children: [
        {
          path: "",
          element: <Settings />,
        },
      ],
    },
    {
      path: PATH_CONTACT_US,
      children: [
        {
          path: "",
          element: <ContactUs />,
        },
      ],
    },
    {
      path: PATH_PRICING,
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
