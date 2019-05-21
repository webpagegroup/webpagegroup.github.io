		AmCharts.makeChart("Kchart",
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
							"id": "Expected K",
							"title": "Higher Confidence Interval",
							"valueField": "E"
						},
						{
							"id": "AmGraph-4",
							"title": "Observed K",
							"valueField": "column-4"
						},
						{
							"id": "AmGraph-9",
							"title": "Lower Confidence Interval",
							"valueField": "column-5"
						},
						{
							"id": "AmGraph-10",
							"title": "Expected K(in Random distribution)",
							"valueField": "column-6"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "L(d)",
							"title": "Axis title"
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
							"text": "L(d) Versus Distances(Ripley'K Analysis) "
						}
					],
					"dataProvider": [
						{
							"category": "3",
							"column-4": "3.3",
							"column-5": "2.9",
							"column-6": 12,
							"E": "3"
						},
						{
							"category": "5",
							"column-4": "6.1",
							"column-5": "5.6",
							"column-6": 16,
							"E": "6"
						},
						{
							"category": "7",
							"column-4": "7.2",
							"column-5": "6.9",
							"column-6": "23",
							"E": "7"
						},
						{
							"category": "9",
							"column-4": "9.1",
							"column-5": "8.9",
							"column-6": "26",
							"E": "9"
						},
						{
							"category": "11",
							"column-4": "12.1",
							"column-5": "11.7",
							"column-6": "33",
							"E": "12"
						},
						{
							"category": "13",
							"column-4": "13.2",
							"column-5": "12.1",
							"column-6": "35",
							"E": "13"
						},
						{
							"category": "15",
							"column-4": "15.5",
							"column-5": "14.3",
							"column-6": "36",
							"E": "15"
						},
						{
							"category": "17",
							"column-4": "17.3",
							"column-5": 17,
							"column-6": "36.2",
							"E": "17"
						},
						{
							"category": "19",
							"column-4": "19.2",
							"column-5": "18.8",
							"column-6": "36.5",
							"E": "19"
						}
					]
				}
			);
