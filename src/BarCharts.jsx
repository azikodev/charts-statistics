import React, { useState, useEffect } from "react";

import ReactApexChart from "react-apexcharts";

import axios from "axios";

function BarCharts() {
  const [data, setData] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [],
      },
    },
  });

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countries = response.data;
        const sortedCountries = countries
          .filter((country) => country.population)
          .sort((a, b) => b.population - a.population)
          .slice(0, 30);

        const populations = sortedCountries.map(
          (country) => country.population
        );
        const countryNames = sortedCountries.map(
          (country) => country.name.common
        );

        setData({
          series: [
            {
              data: populations,
            },
          ],
          options: {
            ...data.options,
            xaxis: {
              categories: countryNames,
            },
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching the country data: ", error);
      });
  }, []);

  return (
    <div className="h-[520px]">
      <div>
        <h1 className="text-3xl mb-[50px ]">Bar chart</h1>
      </div>
      <div id="chart">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="bar"
          height={450}
          width={1200}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default BarCharts;
