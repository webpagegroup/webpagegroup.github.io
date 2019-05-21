Highcharts.chart('typedensity', {

  title: {
    text: 'Average housing price & type of entrie home density Regression'
  },

  subtitle: {
   
  }, 
  xAxis: {
    title: {
      enabled: true,
      text: 'Airbnb Density'
    },
    labels: {
        formatter: function () {
        return this.value / 10 ;
      }
    }
  },

  yAxis: {
    title: {
      text: 'Prices in 1,000 USD'
    },
 
    
 
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1
    }
  },

  series: [{
    name: 'Entrie Home',
    data: [3.6, 6, 7.6, 10.3, 13, 13.7, 16]
  }, {
    name: 'Share Space',
    data: [8, 13, 16, 19, 22, 25, 27]
  }, {
    name: 'Private Room',
    data: [6, 6.7, 8.9, 10.6, 12.3, 14.7,15.2]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});