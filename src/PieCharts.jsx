import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function PieCharts() {
  const [data, setData] = useState({
    series: [],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 400,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    const apiURL = "https://restcountries.com/v3.1/all";

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        const topCountries = data
          .sort((a, b) => b.population - a.population)
          .slice(0, 10);

        const series = topCountries.map((country) => country.population);
        const labels = topCountries.map((country) => country.name.common);

        setData({
          series,
          options: {
            ...data.options,
            labels,
          },
        });
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="h-[520px]">
      <div>
        <h1 className="text-3xl mb-[50px]">Pie chart</h1>
      </div>

      <div id="chart" className=" ">
        <div className="mr-[50px]">
          <ReactApexChart
            options={data.options}
            series={data.series}
            type="pie"
            width={500}
          />
        </div>
      </div>
      <div id="html-dist" className="ml-[150px]"></div>
    </div>
  );
}

export default PieCharts;
