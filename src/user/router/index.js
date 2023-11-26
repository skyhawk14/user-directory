import { createBrowserRouter } from "react-router-dom";
import UserDetails from "../pages/UserDetails";
import UserPost from "../pages/UserPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserDetails/>
    )
  },
  {
    path: "/user/:id",
    element: (
      <UserPost/>
    )
  },
  {
    path: "*",
    element: <>Not found</>
  }
])

export default router