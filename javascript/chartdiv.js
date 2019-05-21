AmCharts.makeChart("typepie",
				{
					"type": "pie",
					"angle": 12,
					"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
					"depth3D": 15,
					"titleField": "category",
					"valueField": "column-1",
					"theme": "light",
					"allLabels": [],
					"balloon": {},
					"legend": {
						"enabled": true,
						"align": "center",
						"markerType": "circle"
					},
					"titles": [],
					"dataProvider": [
						{
							"category": "Non-Regulated",
							"column-1": "936850"
						},
						{
							"category": "Rent-Controlled",
							"column-1": "21751"
						},
						{
							"category": "Condo",
							"column-1": "115844"
						},
						{
							"category": "Coop",
							"column-1": "330000"
						},
						{
							"category": "Conventional Homes",
							"column-1": "600000"
						},
						{
							"category": "Others",
							"column-1": "500000"
						},
						{
							"category": "Stablized Pre",
							"column-1": "690000"
						}
					]
				}
			);