import React from "react";
import { Link } from "react-router-dom";
import radialbarImg from "./assets/radialbar.jpg";
import piechartImg from "./assets/piechart.svg";
import barchartImg from "./assets/barchart.webp";

function Home() {
  return (
    <div className="container mx-auto p-4 h-[520px]">
      <h1 className="text-2xl font-bold mb-4">Chart Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          to="/radialbars"
          className="card border border-gray-300 p-4 rounded shadow hover:shadow-lg transition"
        >
          <img
            src={radialbarImg}
            alt="RadialBar Chart"
            className="w-full h-48 object-cover mb-2 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">RadialBar Chart</h2>
          <p>
            The RadialBar chart shows the data in a circular style where each
            bar represents the value. Useful for showing progress or performance
            metrics.
          </p>
        </Link>

        <Link
          to="/piecharts"
          className="card border border-gray-300 p-4 rounded shadow hover:shadow-lg transition"
        >
          <img
            src={piechartImg}
            alt="Pie Chart"
            className="w-full h-48 object-cover mb-2 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">Pie Chart</h2>
          <p>
            The Pie chart represents data in a pie slice format. Each slice
            shows the proportion of each category, making it useful for
            comparing parts of a whole.
          </p>
        </Link>

        <Link
          to="/barcharts"
          className="card border border-gray-300 p-4 rounded shadow hover:shadow-lg transition"
        >
          <img
            src={barchartImg}
            alt="Bar Chart"
            className="w-full h-48 object-cover mb-2 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">Bar Chart</h2>
          <p>
            The Bar chart displays data using rectangular bars. It is useful for
            comparing the values of different categories over a period of time
            or among items.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
