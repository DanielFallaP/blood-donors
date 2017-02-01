function initPatientMap(){
	var map;
      require([
		"esri/dijit/Search",
		"esri/dijit/LocateButton",
        "esri/map",
        "esri/layers/FeatureLayer",
        "esri/dijit/PopupTemplate",
        "esri/request",
        "esri/geometry/Point",
        "esri/graphic",
        "dojo/on",
        "dojo/_base/array",
        "dojo/domReady!"
      ], function(
		Search,
		LocateButton,
        Map,
        FeatureLayer,
        PopupTemplate,
        esriRequest,
        Point,
        Graphic,
        on,
        array
      ) {

        var featureLayer;

        map = new Map("map", {
          basemap: "streets",
          center: [-46.807, 32.553],
          zoom: 3
        });
		
		var search = new Search({
            map: map
         }, "search");
         search.startup();
         
         var geoLocate = new LocateButton({
           map: map
         }, "LocateButton");
         geoLocate.startup();

        //hide the popup if its outside the map's extent
        map.on("mouse-drag", function(evt) {
          if (map.infoWindow.isShowing) {
            var loc = map.infoWindow.getSelectedFeature().geometry;
            if (!map.extent.contains(loc)) {
              map.infoWindow.hide();
            }
          }
        });

        //create a feature collection for the flickr photos
        var featureCollection = {
          "layerDefinition": null,
          "featureSet": {
            "features": [],
            "geometryType": "esriGeometryPoint"
          }
        };
        featureCollection.layerDefinition = {
          "geometryType": "esriGeometryPoint",
          "objectIdField": "ObjectID",
          "drawingInfo": {
            "renderer": {
              "type": "simple",
              "symbol": {
                "type": "esriPMS",
                "url": "images/flickr.png",
                "contentType": "image/png",
                "width": 15,
                "height": 15
              }
            }
          },
          "fields": [{
            "name": "ObjectID",
            "alias": "ObjectID",
            "type": "esriFieldTypeOID"
          }, {
            "name": "description",
            "alias": "Description",
            "type": "esriFieldTypeString"
          }, {
            "name": "title",
            "alias": "Title",
            "type": "esriFieldTypeString"
          }]
        };

        //define a popup template
        var popupTemplate = new PopupTemplate({
          title: "{title}",
          description: "{description}"
        });

        //create a feature layer based on the feature collection
        featureLayer = new FeatureLayer(featureCollection, {
          id: 'flickrLayer',
          infoTemplate: popupTemplate
        });

        //associate the features with the popup on click
        featureLayer.on("click", function(evt) {
          map.infoWindow.setFeatures([evt.graphic]);
        });

        map.on("layers-add-result", function() {
			var features = [];
        
			var item = {"title":"290 (1) United Counties (NBC)","link":"https://www.flickr.com/photos/69947186@N08/32210811530/","media":{"m":"https://farm1.staticflickr.com/555/32210811530_4e88be447c_m.jpg"},"date_taken":"1985-03-12T14:54:13-08:00","description":" <p><a href=\"https://www.flickr.com/people/69947186@N08/\">DeanM66A</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/69947186@N08/32210811530/\" title=\"290 (1) United Counties (NBC)\"><img src=\"https://farm1.staticflickr.com/555/32210811530_4e88be447c_m.jpg\" width=\"240\" height=\"160\" alt=\"290 (1) United Counties (NBC)\" /></a></p> <p>Bristol RE 290 (WBD 290H) is seen at the re-vamped (and long-closed) Kettering bus station in the days when the town only had one bus station. 290 is painted in bus livery despite having coach seats.</p>","published":"2017-01-31T13:51:31Z","author":"nobody@flickr.com (\"DeanM66A\")","author_id":"69947186@N08","tags":"290 wbd290h unitedcounties bristol re ecw kettering busstation","latitude":"52.396579","longitude":"-0.728702"};
		
			  var attr = {};
			  attr["description"] = item.description;
			  attr["title"] = item.title ? item.title : "Flickr Photo";

			  var geometry = new Point(item);

			  var graphic = new Graphic(geometry);
			  graphic.setAttributes(attr);
			  features.push(graphic);
			//features.push(feature);

			featureLayer.applyEdits(features, null, null);
        });
		
        //add the feature layer that contains the flickr photos to the map
        map.addLayers([featureLayer]);
		
		var mapExtentChange = map.on("extent-change", changeHandler);

		function changeHandler(evt){
		  var extent = evt.extent,
			  zoomed = evt.levelChange;
		  // ... Do something ...

		  // in some cases, you may want to disconnect the event listener
		  
		}
    });
}

function initDonorMap(){
	var map;
      require([
		"esri/dijit/Search",
		"esri/dijit/LocateButton",
        "esri/map",
        "esri/layers/FeatureLayer",
        "esri/dijit/PopupTemplate",
        "esri/request",
        "esri/geometry/Point",
        "esri/graphic",
        "dojo/on",
        "dojo/_base/array",
        "dojo/domReady!"
      ], function(
		Search,
		LocateButton,
        Map,
        FeatureLayer,
        PopupTemplate,
        esriRequest,
        Point,
        Graphic,
        on,
        array
      ) {

        var featureLayer;

        map = new Map("map", {
          basemap: "streets",
          center: [-46.807, 32.553],
          zoom: 3
        });
		
		var search = new Search({
            map: map
         }, "search");
         search.startup();
         
         var geoLocate = new LocateButton({
           map: map
         }, "LocateButton");
         geoLocate.startup();

       
    });
}