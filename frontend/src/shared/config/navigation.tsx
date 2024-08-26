import {
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "../../app/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "achievement",
        element: <div>Achievements</div>,
      },
      {
        path: "dream",
        element: <div>Dreams</div>,
      },
      {
        path: "profile",
        element: <div>Profile</div>,
      }
    ]
  },
 
]);