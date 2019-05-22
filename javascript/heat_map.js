Highcharts.chart('heat_map', {

  chart: {
    type: 'heatmap',
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1
  },


  title: {
    text: 'Correlation Between Factors'
  },

  xAxis: {
    categories: ['Housing Price', 'Airbnb Density', 'Stay Nights', 'Type', 'Borough',  ]
  },

  yAxis: {
    categories: ['Housing Price', 'Airbnb Density', 'Stay Nights', 'Type', 'Borough', ],
    title: null
  },

  colorAxis: {
    min: 0,
    minColor: '#FFFFFF',
    maxColor: Highcharts.getOptions().colors[0]
  },

  legend: {
    align: 'right',
    layout: 'vertical',
    margin: 0,
    verticalAlign: 'top',
    y: 25,
    symbolHeight: 280
  },

  tooltip: {
    formatter: function () {
      return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> <br><b>' +
        this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
    }
  },

  series: [{
    name: 'Sales per employee',
    borderWidth: 1,
    data: [[0, 0, 1], [0, 1, 0.11], [0, 2, 0.25], [0, 3, 0.24], [0, 4, 0.56], [1, 0, 0.11], [1, 1, 1], [1, 2, 0.37], [1, 3, 0.39], [1, 4, 0.49],
     [2, 0, 0.13], [2, 1, 0.37], [2, 2, 1], [2, 3, 0.23], [2, 4, 0.52], [3, 0, 0.24], [3, 1, 0.39], [3, 2, 0.23], [3, 3, 1], [3, 4, 0.13], [4, 0, 0.56], 
    [4, 1, 0.49], [4, 2, 0.52], [4, 3, 0.13], [4, 4, 1] ],
    dataLabels: {
      enabled: true,
      color: '#000000'
    }
  }]

});