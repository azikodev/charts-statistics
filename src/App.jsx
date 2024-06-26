import Navbar from "./Navbar";
import PieCharts from "./PieCharts";
import BarCharts from "./BarCharts";
import Radialbar from "./Radialbar";
import HomeLayout from "./HomeLayout";
import Home from "./Home";
//react router dom
import {
  createBrowserRouter,
  Navigate,
  Router,
  RouterProvider,
} from "react-router-dom";

//useeffect
import { useEffect } from "react";

//pages

function App() {
  const user = true;

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/piecharts",
          element: <PieCharts />,
        },

        {
          path: "/barcharts",
          element: <BarCharts />,
        },
        {
          path: "/radialbars",
          element: <Radialbar />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
