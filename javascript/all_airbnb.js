
			
			
			AmCharts.makeChart("allairbnb",
				{
					"type": "serial",
					"categoryField": "category",
					"startDuration": 1,
					"categoryAxis": {
						"gridPosition": "start"
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "Year: [[category]] Number:[[value]]",
							"bullet": "round",
							"id": "AmGraph-1",
							"title": "Airbnb number",
							"valueField": "All airbnb"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"title": "Quantity"
						}
					],
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"useGraphSettings": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Airbnb change from 2015-2019"
						}
					],
					"dataProvider": [
						{
							"category": "2015",
							"All airbnb": "15977"
						},
						{
							"category": "2016",
							"All airbnb": "19662"
						},
						{
							"category": "2017",
							"All airbnb": "20167"
						},
						{
							"category": "2018",
							"All airbnb": "24156"
						},
						{
							"category": "2019",
							"All airbnb": "26061"
						}
					]
				}
			);