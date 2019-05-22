		AmCharts.makeChart("minnights",
				{
					"type": "pie",
					"angle": 11.7,
					"balloonText": "<b>R-square, K : </b>[[description]]",
					"depth3D": 15,
					"labelText": "[[title]] : [[value]] ([[percents]]%)",
					"descriptionField": "column-2",
					"titleField": "category",
					"valueField": "column-1",
					"theme": "light",
					"allLabels": [],
					"balloon": {
						"animationDuration": 0
					},
					"legend": {
						"enabled": true,
						"align": "center",
						"markerType": "circle"
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "Over 28 minimum night",
							"column-1": "4907",
							"column-2": " 26.64%, 1545",
							"column-3": "192.62"
						},
						{
							"category": "Less 28 minimum night",
							"column-1": "45811",
							"column-2": " 21.1%, 180",
							"column-3": "216.76"
						},
						
					]
				}
			);