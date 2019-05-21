/// airbnb number
AmCharts.makeChart("airbnbnum",
{
  "type": "serial",
  "categoryField": "category",
  "startDuration": 1,
  "theme": "light",
  "categoryAxis": {
    "gridPosition": "start"
  },
  "trendLines": [],
  "graphs": [
    {
      "balloonText": "open:[[open]] close:[[close]]",
      "closeField": "close",
      "fillAlphas": 1,
      "id": "AmGraph-1",
      "openField": "",
      "title": "graph 1",
      "type": "column",
      "valueField": "Not set"
    }
  ],
  "guides": [],
  "valueAxes": [
    {
      "id": "ValueAxis-1",
      "stackType": "regular",
      "title": "Axis title"
    }
  ],
  "allLabels": [],
  "balloon": {},
  "titles": [
    {
      "id": "Title-1",
      "size": 15,
      "text": "Chart Title"
    }
  ],
  "dataProvider": [
    {
      "category": "Bronx",
      "close": "7.6"
    },
    {
      "category": "Brooklyn",
      "close": "35"
    },
    {
      "category": "Manhattan",
      "close": "31"
    },
    {
      "category": "Queens",
      "close": "28"
    },
    {
      "category": "Staten Island",
      "close": "8.1"
    }
  ]
}
);