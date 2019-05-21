    (function () {
      var borough_li = document.getElementById('borough_li');
      var airbnb_li = document.getElementById('airbnb_li');
      var housing_li = document.getElementById('housing_li');

      var borough_info = document.getElementById('bor_ma');
      var airbnb_info = document.getElementById('airbnb_ma');
      var buffer_info = document.getElementById('buffer_ma');

      /// Map layers
      var borough_map = document.getElementById('borough_layer');
      var nbhd_map = document.getElementById('nbhd_layer');

    
      //// Legends
      var legend_airbnb = document.getElementById('legend_airbnb');
      var legend_borough = document.getElementById('legend_borough');
      var legend_housing = document.getElementById('legend_housing');
    
      var borough_h2 = borough_li.getElementsByTagName('h2')[0];
      var airbnb_h2 = airbnb_li.getElementsByTagName('h2')[0];
      var housing_h2 = housing_li.getElementsByTagName('h2')[0];
    
      
////  Borough Layer    
      borough_li.addEventListener('click', function () {
        legend_airbnb.style.display = 'none';
        airbnb_h2.style.color = '#1a2a3a';
        legend_housing.style.display = 'none';
        housing_h2.style.color = '#1a2a3a';
        legend_borough.style.display = 'block';
        borough_h2.style.color = 'steelblue';
        borough_info.style.display = 'block'
        buffer_info.style.display = 'none';
        airbnb_info.style.display = 'none';
        // map layer
        ////// Airbnb Clustering
        map.setLayoutProperty("cluster-count", 'visibility', 'none');
        map.setLayoutProperty("unclustered-point", 'visibility', 'none');
        map.setLayoutProperty("clusters", 'visibility', 'none');
        /// Borough nbhd
        map.setLayoutProperty('borough_layer', 'visibility', 'visible');
        map.setLayoutProperty('nbhd_layer', 'visibility', 'visible');
        map.setLayoutProperty('ndhd_outline', 'visibility', 'visible');
        /// buffer Analysis
        map.setLayoutProperty('hospitals', 'visibility', 'none');
        map.setLayoutProperty('libraries', 'visibility', 'none');
        map.setLayoutProperty('nearest-hospital', 'visibility', 'none');
      });
    
//// Layr of Airbnb
      airbnb_li.addEventListener('click', function () {
        legend_borough.style.display = 'none';
        borough_h2.style.color = '#1a2a3a';
        legend_housing.style.display = 'none';
        housing_h2.style.color = '#1a2a3a';
        legend_airbnb.style.display = 'block';
        airbnb_h2.style.color = 'steelblue';
        borough_info.style.display = 'none';
        airbnb_info.style.display = 'block';
        buffer_info.style.display = 'none';
        /// map layer
        /// Borough nbhd
        map.setLayoutProperty('borough_layer', 'visibility', 'none');
        map.setLayoutProperty('nbhd_layer', 'visibility', 'none');
        map.setLayoutProperty('ndhd_outline', 'visibility', 'none');
        ////// Airbnb Clustering
        map.setLayoutProperty("cluster-count", 'visibility', 'visible');
        map.setLayoutProperty("unclustered-point", 'visibility', 'visible');
        map.setLayoutProperty("clusters", 'visibility', 'visible');
        /// buffer Analysis
        map.setLayoutProperty('hospitals', 'visibility', 'none');
        map.setLayoutProperty('libraries', 'visibility', 'none');
        map.setLayoutProperty('nearest-hospital', 'visibility', 'none');

      });

//// Layr of Buffer
      housing_li.addEventListener('click', function () {
        legend_airbnb.style.display = 'none';
        airbnb_h2.style.color = '#1a2a3a';
        legend_borough.style.display = 'none';
        borough_h2.style.color = '#1a2a3a';
        legend_housing.style.display = 'block';
        housing_h2.style.color = 'steelblue';
        borough_info.style.display = 'none';
        airbnb_info.style.display = 'none';
        buffer_info.style.display = 'block';
/// map
        /// Borough nbhd
        map.setLayoutProperty('borough_layer', 'visibility', 'none');
        map.setLayoutProperty('nbhd_layer', 'visibility', 'none');
        map.setLayoutProperty('ndhd_outline', 'visibility', 'none');
        ////// Airbnb Clustering
        map.setLayoutProperty("cluster-count", 'visibility', 'none');
        map.setLayoutProperty("unclustered-point", 'visibility', 'none');
        map.setLayoutProperty("clusters", 'visibility', 'none');
        /// buffer Analysis
        map.setLayoutProperty('hospitals', 'visibility', 'visible');
        map.setLayoutProperty('libraries', 'visibility', 'visible');
        map.setLayoutProperty('nearest-hospital', 'visibility', 'visible');
      });
    })();