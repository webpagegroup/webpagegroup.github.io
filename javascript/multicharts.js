    var chart = new CanvasJS.Chart("chartContainer1",
    {
        animationEnabled: true,
        subtitles: [{
            text: "All Type of Airbnb",
            titleFontColor: "#4F81BC",
        }],
        axisX: {
            interval: 10,
        },
        data: [
        {
            type: "line",
            color: "rgba(255,12,32,.3)",
            dataPoints: [
                { x: new Date(2015, 0), y: 27392 },
                { x: new Date(2016, 0), y: 36183 },
                { x: new Date(2017, 0), y: 40883 },
                { x: new Date(2018, 0), y: 48620 },
                { x: new Date(2019, 0), y: 49748},
          
            ]
        },
        ]
    });
chart.render();

var chart = new CanvasJS.Chart("chartContainer2",
    {  animationEnabled: true,
        subtitles: [{
           text: "Entire Home"
       }],
   axisX: {
       interval: 10,
   },
   data: [
   {
       type: "line",
       color: "rgb(66, 134, 244,.5)",
       dataPoints: [
           { x: new Date(2015, 0), y: 15977 },
           { x: new Date(2016, 0), y: 19662 },
           { x: new Date(2017, 0), y: 20167 },
           { x: new Date(2018, 0), y: 24156 },
           { x: new Date(2019, 0), y: 26061},
     
       ]
   },
   ]
        
    });
chart.render();

var chart = new CanvasJS.Chart("chartContainer3",
    {
      
        animationEnabled: true,
        subtitles: [{
            text: "Private Room"
        }],
        axisX: {
            interval: 10,
        },
        data: [
        {
            type: "line",
            color: "rgb(66, 134, 244,.5)",
            dataPoints: [
                { x: new Date(2015, 0), y: 10586 },
                { x: new Date(2016, 0), y: 15404 },
                { x: new Date(2017, 0), y: 19570 },
                { x: new Date(2018, 0), y: 23238 },
                { x: new Date(2019, 0), y: 22578},
          
            ]
        },
        ]
    });
chart.render();

var chart = new CanvasJS.Chart("chartContainer4",
    {
            
        animationEnabled: true,
        subtitles: [{
           text: "Shared Room"
       }],
   axisX: {
       interval: 10,
   },
   data: [
   {
       type: "line",
       color: "rgb(66, 134, 244,.5)",
       dataPoints: [
           { x: new Date(2015, 0), y: 829 },
           { x: new Date(2016, 0), y: 1117 },
           { x: new Date(2017, 0), y: 1146 },
           { x: new Date(2018, 0), y: 1226 },
           { x: new Date(2019, 0), y: 1109},
     
       ]
   },
   ]
    });
chart.render();