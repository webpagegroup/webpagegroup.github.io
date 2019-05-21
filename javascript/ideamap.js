Highcharts.chart('ideamap', {
  chart: {
    type: 'tilemap',
    marginTop: 15,
    height: '65%'
  },

  title: {
    text: 'Idea map'
  },

  subtitle: {
    text: 'Hover over tiles for details'
  },

  colors: [
    '#fed',
    '#ffddc0',
    '#ecb',
    '#dba',
    '#c99',
    '#b88',
    '#aa7577',
    '#9f6a66',
    '#ffddc0',
  ],

  xAxis: {
    visible: false
  },

  yAxis: {
    visible: false
  },

  legend: {
    enabled: false
  },

  tooltip: {
    headerFormat: '',
    backgroundColor: 'rgba(247,247,247,0.95)',
    pointFormat: '<span style="color: {point.color}">●</span>' +
      '<span style="font-size: 13px; font-weight: bold"> {point.name}' +
      '</span><br>{point.desc}',
    style: {
      width: 170
    },
    padding: 10,
    hideDelay: 1000000
  },

  plotOptions: {
    series: {
      keys: ['x', 'y', 'name', 'desc'],
      tileShape: 'diamond',
      dataLabels: {
        enabled: true,
        format: '{point.name}',
        color: '#000000',
        style: {
          textOutline: false
        }
      }
    }
  },

  series: [{
    name: 'Main idea',
    pointPadding: 10,
    data: [
      [5, 3, 'Market Stability',
        'Will the Airbnb development influence housing market stability?']
    ],
    color: '#7eb'
  }, {
    name: 'Steps',
    colorByPoint: true, // Pick new color for each point from colors array
    data: [
      [3, 3, 'Distribution',
        'The concentration of Airbnb provision has led to negative externality in local neighbourhood, which result in the reduction of property value'],
      [4, 3, 'Market Health',
        'Describe where to move next in a short term time perspective.'],
      [5, 4, 'Investment',
        'Airbnb existing in the boundary of local laws on housing market and l and commercial uses buildings, which is harmful for the housing market health.'],
      [6, 3, 'Planning',
        'Breaking some local regulations on residentiaf the project.'],
      [7, 3, 'Utility',
        'The utilization of vacancy houses can reduce the vacancy rate in New York City..'],
      
      [6, 2, 'Facility',
        'The upgrade of local facilities result in the rise of property value.'],
      [5, 2, 'Income',
        'It is an opportunity for local residents to earn extra income in a flexible and high-return rate approach. With the growth of income level, the housing affordability can be relieved.'],
      [4, 2, ' Tourism',
        'Raising the demand on local products and services']
    ]
  }]
}, function (chart) {
  chart.tooltip.refresh(chart.series[0].points[0]); // Show tooltip of the first point on load
});