Highcharts.chart('below30', {
  xAxis: {
    min: 0,
    max: 12
  },
  yAxis: {
    min: 0
  },
  title: {
    text: 'Average Housing Price & Below 28 Nights Stays Regression'
  },
  series: [{
    type: 'line',
    name: 'Regression Line',
    data: [[0, 30], [12, 160]],
    marker: {
      enabled: false
    },
    states: {
      hover: {
        lineWidth: 0
      }
    },
    enableMouseTracking: false
  }, {
    type: 'scatter',
    name: 'Observations',
    data: [25, 27, 34, 56, 60, 72,120,132,97,102,105,89],
    marker: {
      radius: 4
    }
  }]
});