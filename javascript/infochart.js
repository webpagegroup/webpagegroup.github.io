// Create the chart
Highcharts.chart('Airbnb_info_chart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Airbnb Listed Statistics'
    },
    subtitle: {
      text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Airbnb Listed Statistics'
      }
  
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        data: [
          {
            name: "Manhattan",
            y: 31.05,
            drilldown: "Manhattan"
          },
          {
            name: "Brooklyn",
            y: 24.74,
            drilldown: "Brooklyn"
          },
          {
            name: "Queens",
            y: 28.42,
            drilldown: "Queens"
          },
          {
            name: "Bronx",
            y: 7.65,
            drilldown: "Bronx"
          },
          {
            name: "Staten Island",
            y: 8.12,
            drilldown: "Staten Island"
          },
         
        ]
      }
    ],
    drilldown: {
      series: [
        {
          name: "Manhattan",
          id: "Manhattan",
          data: [
            [
              "Clinton",
              3.59
            ],
            [
              "Hudson Yards",
              3.0
            ],
            [
              "East Village",
              2.87
            ],
            [
              "West Village",
              2.65
            ],
            [
              "Upper West Side",
              2.47
            ],
            [
              "SoHo",
              2.29
            ],
            [
              "Midtown South",
              2.1
            ],
            [
              "Turtle Bay",
              1.92
            ]
          
          ]
        },
        {
          name: "Brooklyn",
          id: "Brooklyn",
          data: [
            [
              "North Side-South Side",
              4.76
            ],
            [
              "Bushwick South",
              3.55
            ],
            [
              "Stuyvesant Heights",
              2.94
            ],
            [
              "Crown Heights North",
              2.93
            ],
            [
              "Bedford",
              2.83
            ],
            [
              "Bedford",
              2.49
            ],
          ]
        },
        {
          name: "Queens",
          id: "Queens",
          data: [
            [
              "Astoria",
              1.60
            ],
            [
              "Hunters Point",
              1.14
            ],
            [
              "Ridgewood",
              0.88
            ],
            [
              "Steinway",
              0.66
            ]
          ]
        },
        {
          name: "Bronx",
          id: "Bronx",
          data: [
            [
              "Mott Haven",
              2.51
            ],
            [
              "West Concourse",
              1.25
            ],
            [
              "Williamsbridge",
              1.1
            ],
            [
              "Concourse Village",
              1.02
            ],
            [
              "Allerton",
              0.93
            ],
            [
              "Morrisania",
              0.92
            ]
          ]
        },
        {
          name: "Staten Island",
          id: "Staten Island",
          data: [
            [
              "West New Brighton",
              1.21
            ],
            [
              "Rosebank",
              0.68
            ],
            [
              "Silver Lake",
              0.58
            ],
            [
              "Ft. Wadsworth",
              0.42
            ],
            [
              "South Beach",
              0.32
            ]
          ]
        },
        
          ]
        }
    
  });