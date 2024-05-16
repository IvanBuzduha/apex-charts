function getChartColorsArray(e) {
  if (null !== document.getElementById(e)) {
    var t = document.getElementById(e).getAttribute("data-colors");

    if (t)
      return (t = JSON.parse(t)).map(function (e) {
        var t = e.replace(" ", "");

        if (-1 === t.indexOf(",")) {
          var r = getComputedStyle(document.documentElement).getPropertyValue(
            t
          );

          return r || t;
        }

        var o = e.split(",");

        return 2 != o.length
          ? t
          : "rgba(" +
              getComputedStyle(document.documentElement).getPropertyValue(
                o[0]
              ) +
              "," +
              o[1] +
              ")";
      });

    console.warn("data-colors Attribute not found on:", e);
  }
}

var options, chart;

donutChartColors = getChartColorsArray("donut_chart");

donutChartColors &&
  ((options = {
    chart: {
      height: 155,

      type: "donut",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "90%",
        },
      },
    },

    series: [15, 15, 35, 35],

    labels: [
      "Bitcoin Deposit",
      "Ethereum Deposit",
      "Bonus Deposit",
      "Main Deposit",
    ],

    colors: donutChartColors,

    dataLabels: {
      enabled: false, // Убираем data labels
    },

    stroke: {
      show: false,

      width: 5,

      colors: ["#666"],
    },

    legend: {
      show: 0,

      position: "bottom",

      horizontalAlign: "center",

      verticalAlign: "middle",

      floating: 0,

      fontSize: "14px",

      offsetX: 0,
    },

    responsive: [
      {
        breakpoint: 100,

        options: {
          chart: {
            height: 240,
          },

          legend: {
            show: !1,
          },
        },
      },
    ],

    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  }),
  (chart = new ApexCharts(
    document.querySelector("#donut_chart"),
    options
  )).render());

var lineChartdashedColors = getChartColorsArray("line_chart_dashed");

lineChartdashedColors &&
  ((options = {
    chart: {
      height: 220,
      type: "area",
      zoom: {
        enabled: false,
      },
    },
    toolbar: {
      show: false,
    },
    grid: {
      show: true,
      strokeDashArray: 10,
      position: "back",
      padding: {
        left: 30,
        right: 20,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: lineChartdashedColors,
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 0.4,
        stops: [0, 90, 30],
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [4, 4, 4],
      curve: "straight",
      dashArray: [0, 0, 0],
    },

    legend: {
      show: 0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: 0,
      fontSize: "14px",
      offsetX: 0,
    },

    series: [
      {
        name: "USDT",
        data: [
          45000, 52000, 38000, 24000, 33000, 26000, 21000, 20000, 6000, 8000,
          15000, 10000,
        ],
      },
      {
        name: "Ethereum",
        data: [
          36000, 42000, 60000, 42000, 13000, 18000, 29000, 37000, 36000, 51000,
          32000, 35000,
        ],
      },
      {
        name: "Bitcoin",
        data: [
          89000, 56000, 74000, 98000, 72000, 38000, 64000, 46000, 84000, 58000,
          46000, 49000,
        ],
      },
    ],
    // markers: {
    //   size: 0,
    //   hover: {
    //     sizeOffset: 6,
    //   },
    // },

    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (val) {
          return val + " USDT";
        },
      },
    },
  }),
  (chart = new ApexCharts(
    document.querySelector("#line_chart_dashed"),
    options
  )).render());

var columnChartColors = getChartColorsArray("column_chart");
columnChartColors &&
  ((options = {
    chart: {
      height: 251,
      type: "bar",
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        vertical: true,
        // columnWidth: "45%",
        // endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    legend: {
      show: false,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: 0,
      fontSize: "14px",
      offsetX: 0,
    },
    series: [
      {
        name: "USDT",
        data: [46, 57, 59, 54, 62, 58, 64, 60, 66],
      },
      {
        name: "BTC",
        data: [74, 83, 102, 97, 86, 106, 93, 114, 94],
      },
      {
        name: "ETH",
        data: [37, 42, 38, 26, 47, 50, 54, 55, 43],
      },
    ],
    colors: columnChartColors,
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        opacityFrom: 1,
        opacityTo: 0.1,
        stops: [0, 90, 30],
      },
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      position: "top",

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    // yaxis: {
    //   title: {
    //     text: "$ (USDT)",
    //     style: {
    //       fontWeight: "500",
    //     },
    //   },
    // },
    grid: {
      show: true,
      strokeDashArray: 10,
      position: "back",
      padding: {
        left: 20,
        right: 20,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: { show: true },
      },
    },

    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      // y: {
      //   formatter: function (val) {
      //     return val + " USDT";
      //   },
      // },
    },
  }),
  (chart = new ApexCharts(
    document.querySelector("#column_chart"),
    options
  )).render());
