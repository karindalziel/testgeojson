// 1. erase everything below this line and paste in your geojson
// 2. add the following before your pasted content, so that the map
//    will understand how to find your geojson. See README.md for more info
//
//    var json =
//
//    See example below:

var json = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        "marker-size": "medium",
        "marker-symbol": "",
        "title": "test title zzz",
        "description": "test description zzz"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.9453125,
          63.23362741232569
        ]
      }
    }
  ]
}
