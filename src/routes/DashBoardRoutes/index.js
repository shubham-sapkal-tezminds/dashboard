import DashboardLayout from "../../layouts/DashBoardLayOut";
import Dashboard from "../../Pages/Dashboard";
import Customer from "../../Pages/Customerlist";
import Settings from "../../Pages/Settings";
import ContactUs from "../../Pages/ContactUs";
import Pricing from "../../Pages/Pricing";
import PersonalDetails from "../../Pages/Settings/PersonalDeatails";
import ChnagePassword from "../../Pages/Settings/ChangePass";

import {
  PATH_DASHBOARD,
  PATH_CUSTOMER_LIST,
  PATH_CONTACT_US,
  PATH_PRICING,
  PATH_SETTINGS,
} from "../../Config/index";

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
          children: [
            {
              path: `PATH_SETTINGS/personaldetails`,
              element: <PersonalDetails />,
            },
            {
              path: `PATH_SETTINGS/ChnagePassword`,
              element: <ChnagePassword />,
            },
            {
              path: `PATH_SETTINGS/personaldetails`,
              element: <PersonalDetails />,
            },
          ],
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
