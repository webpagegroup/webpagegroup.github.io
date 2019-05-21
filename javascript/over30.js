Highcharts.chart('over30', {
  xAxis: {
    min: 0,
    max: 20
  },
  yAxis: {
    min: 0
  },
  title: {
    text: 'Scatter plot with regression line'
  },
  series: [{
    type: 'line',
    name: 'Regression Line',
    data: [[0, 5], [16, 16]],
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
    data: [5, 4, 2.8, 3.5, 6, 4.2,10,11,12,11,13,14,13,11,12],
    marker: {
      radius: 4
    }
  }]
});