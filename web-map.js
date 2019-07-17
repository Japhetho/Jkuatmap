//OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
/*specifying the extent of the map*/
var extents = new OpenLayers.Bounds(4108943, -114927, 4131492, -126851); 

/*loading various controls to the map*/
var control, controls = [];

   var map = new OpenLayers.Map("map" /*this map is the div id in the html code*/, {
        controls: [
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.ArgParser(),
            //new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('dropdown-content')}),
            new OpenLayers.Control.MousePosition(),
            //new OpenLayers.Control.ScaleLine(),
            new OpenLayers.Control.PanZoomBar(),
             //new OpenLayers.Control.Zoom(),
            new OpenLayers.Control.KeyboardDefaults()
        ],
        maxExtent: extents,
        minExtent: "auto"
        //restrictedExtent: extents /*one cannot pan outside the specified extent*/
    },
        {projection: new OpenLayers.Projection("EPSG:900913")}, /*specifying the projection*/
    

        {units: 'm'},
        {allOverlays: true} /*all other data added will overlay on the basemap*/
        );

var OSM = new OpenLayers.Layer.OSM("OpenStreetMap");  /*loading the OSM basemap*/


/*loading the overlays from GeoServer.jkuat_map is the workspace name. Loading the layer as a WMS*/

var buildings = new OpenLayers.Layer.WMS (
        "Jkuat Buildings",
        "http://localhost:8080/geoserver/jkuat_map/wms",
        {layers:"jkuat_map:buildings",transparent: true, format: "image/gif"},
        {visibility: true},
        {'displayInLayerSwitcher':true}
);

var colleges = new OpenLayers.Layer.WMS (
        "Jkuat Colleges",
        "http://localhost:8080/geoserver/jkuat_map/wms",
        {layers:"jkuat_map:colleges",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);
var farms = new OpenLayers.Layer.WMS (
        "Jkuat Farms",
        "http://localhost:8080/geoserver/jkuat_map/wms",
        {layers:"jkuat_map:farms",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);
var gates = new OpenLayers.Layer.WMS (
        "Jkuat Gates",
        "http://localhost:8080/geoserver/jkuat_map/wms",
        {layers:"jkuat_map:gates",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);
var newbuildings = new OpenLayers.Layer.WMS (
        "Jkuat New Buildings",
        "http://localhost:8080/geoserver/jkuat_map/wms",
        {layers:"jkuat_map:newbuildings",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);
var parkinglot = new OpenLayers.Layer.WMS (
        "Jkuat Parking lots",
        "http://localhost:8080/geoserver/jkuat_map/wms",
        {layers:"jkuat_map:parkinglot",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);
var pitches = new OpenLayers.Layer.WMS (
        "Jkuat Pitches",
        "http://localhost:8080/geoserver/jkuat_map/wms",
        {layers:"jkuat_map:pitches",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);
var streets = new OpenLayers.Layer.WMS (
        "Jkuat Streets",
        "http://localhost:8080/geoserver/jkuat_map/wms",
        {layers:"jkuat_map:streets",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);
var vegetation = new OpenLayers.Layer.WMS (
        "Jkuat Vegetation",
        "http://localhost:8080/geoserver/jkuat_map/wms",
        {layers:"jkuat_map:vegetation",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



/*adding the data to the map object*/ 

map.addLayers([OSM,buildings,colleges,farms,]);

/*specifying the center of the map and a zoom level of 13*/

map.setCenter(new OpenLayers.LonLat(4121040,-122093),13);
