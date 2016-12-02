var request = require('request');
var terraformer = require('terraformer');
var agsParser = require('terraformer-arcgis-parser');

console.log('Initializing...');

var reqUrl = "https://wildfire.cr.usgs.gov/arcgis/rest/services/geomac_dyn/MapServer/1";

var reqParams = {
  returnGeometry: true,
  where: "1=1",
  outSr: 4326,
  outFields: "*",
  inSr: 4326,
  geometry: {
    xmin: -118.5205078125,
    ymin: 36.20882309283712,
    xmax: -118.47656249999999,
    ymax: 36.24427318493909,
    spatialReference: {wkid: 4326}
  },
  geometryType: "esriGeometryEnvelope",
  spatialRel: "esriSpatialRelIntersects",
  geometryPrecision: 5,
  maxAllowableOffset: 0.00003537181106027683,
  f: "json"
};

request({ url: reqUrl, qs: reqParams }, function(err, resp, body) {
  if (!err && resp.statusCode == 200) {
    //console.log('response body...', body);
    if (body.features.length > 0) {
      console.log('Features...', body.features)
    } else {
      console.log('No features found');
      process.exit();
    }
  } else {
    console.log('Failed to query map service')
    process.exit();
  }
});
