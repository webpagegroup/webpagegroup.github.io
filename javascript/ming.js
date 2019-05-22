	AmCharts.makeChart("ming",
				{
					"type": "serial",
					"categoryField": "category",
					"rotate": true,
					"angle": 30,
					"depth3D": 30,
					"startDuration": 1,
					"categoryAxis": {
						"gridPosition": "start"
					},
					"trendLines": [],
					"graphs": [
						{
							"balloonText": "[[title]]: [[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-1",
							"title": "Middle income",
							"type": "column",
							"valueField": "Middle income"
						},
						{
							"balloonText": "[[title]]: [[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-2",
							"title": "Moderate income",
							"type": "column",
							"valueField": "Moderate income"
						},
						{
							"balloonText": "[[title]]: [[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-3",
							"title": "Low income",
							"type": "column",
							"valueField": "Low income"
						},
						{
							"balloonText": "[[title]] : [[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-4",
							"title": "Very low income",
							"type": "column",
							"valueField": "Very low income"
						},
						{
							"balloonText": "[[title]]: [[value]]",
							"fillAlphas": 1,
							"id": "AmGraph-5",
							"title": "Extremely low income",
							"type": "column",
							"valueField": "Extremely low income"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"stackType": "regular",
							"title": ""
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
							"text": "Share of Housing Units by Income Band, New York City 2017 (percentage)"
						}
					],
					"dataProvider": [
						{
							"category": "",
							"Middle income": "14",
							"Moderate income": "6",
							"Low income": "52",
							"Extremely low income": "14",
							"Very low income": "13"
						}
					]
				}
			);