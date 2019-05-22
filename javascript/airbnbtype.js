  
////// Type of Airbnb
                AmCharts.makeChart("airbnbtype",
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
                                "category": "Entire home",
                                "column-1": "26059",
                                "column-2": " 35.24%, 192.62",
                                "column-3": "192.62"
                            },
                            {
                                "category": "Private room",
                                "column-1": "22575",
                                "column-2": " 19.5%, 216.76",
                                "column-3": "216.76"
                            },
                            {
                                "category": "Shared room",
                                "column-1": "1109",
                                "column-2": "11.34%, 2815",
                                "column-3": "2815"
                            }
                        ]
                    }
                );