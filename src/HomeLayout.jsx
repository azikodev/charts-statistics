import React from "react";
import Navbar from "./Navbar";
import PieCharts from "./PieCharts";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function HomeLayout() {
  return (
    <div className="flex flex-col h-full">
      <main className="container max-w-[1200px] m-auto">
        <Navbar />
      </main>
      <main className="container max-w-[1200px] m-auto">
        <Outlet />
      </main>
      <main>
        <Footer />
      </main>
    </div>
  );
}

export default HomeLayout;
