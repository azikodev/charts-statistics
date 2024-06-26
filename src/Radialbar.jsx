import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function Radialbar() {
  const [data, setData] = useState({
    series: [],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // This will be the total of the series values
                return data.series.reduce((a, b) => a + b, 0);
              },
            },
          },
        },
      },
      labels: [],
    },
  });

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countries) => {
        const sortedCountries = countries.sort(
          (a, b) => b.population - a.population
        );
        const topCountries = sortedCountries.slice(0, 4);
        const series = topCountries.map((country) => country.population);
        const labels = topCountries.map((country) => country.name.common);

        setData((prevData) => ({
          ...prevData,
          series: series,
          options: {
            ...prevData.options,
            labels: labels,
            plotOptions: {
              ...prevData.options.plotOptions,
              radialBar: {
                ...prevData.options.plotOptions.radialBar,
                dataLabels: {
                  ...prevData.options.plotOptions.radialBar.dataLabels,
                  total: {
                    ...prevData.options.plotOptions.radialBar.dataLabels.total,
                    formatter: function (w) {
                      return series.reduce((a, b) => a + b, 0);
                    },
                  },
                },
              },
            },
          },
        }));
      });
  }, []);

  return (
    <div className="h-[520px]">
      <div>
        <h1 className="text-3xl mb-[50px] ">Radialbar chart</h1>
      </div>
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="radialBar"
        height={400}
      />
    </div>
  );
}

export default Radialbar;
