import { createBrowserRouter } from "react-router-dom";
import User from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <User/>
  },
])

export default router