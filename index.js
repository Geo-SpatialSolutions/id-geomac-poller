var request = require('request');
var terraformer = require('terraformer');
var agsParser = require('terraformer-arcgis-parser');

var endpoint = "";

var params = {
  returnGeometry: true,
  where: "1=1",
  outSr: 4326
  outFields: "*",
  inSr: 4326,
  geometry: {"xmin":-118.5205078125,"ymin":36.20882309283712,"xmax":-118.47656249999999,"ymax":36.24427318493909,"spatialReference":{"wkid":4326}},
  geometryType: "esriGeometryEnvelope",
  spatialRel: "esriSpatialRelIntersects",
  geometryPrecision: 5,
  maxAllowableOffset: 0.00003537181106027683
  f:json
};

