window.addEventListener('load', function () {

  ////////////////
  // APPEARANCE //
  ////////////////

  var excludeFields = [
    // style exclusion
    "fill", "fill-opacity",
    "marker-color", "marker-size", "marker-symbol",
    "stroke", "stroke-width", "stroke-opacity",
    // title and image exclusion
    "image", "title"
  ]

  function buildHtml(props) {
    html = "<div class='map_feature'>";

    // add a title if one exists
    if (props["title"]) {
      html += "<strong>" + props["title"] + "</strong>";
    }

    html += "<ul>";
    // iterate through all the properties and display
    // those which are not style or title related
    for (var key in props) {
      if (excludeFields.includes(key)) { continue; }
      html += "<li><strong>" + key + ":</strong> " + props[key] + "</li>";
    }

    html += "</ul>";

    if (props["image"]) {
      html += buildImage(props["image"]);
    }

    html += "</div>";
    return html;
  }

  function buildImage(image) {
    var url = image;
    // the image might be flickr embed code or a URL, so prepare for both
    if (image.startsWith("<a data-flickr-embed")) {
      console.log("in this code");
      // pull out the real URL from the flickr embed code
      url = flickrUrl(image)
    }
    return '<img src="'+url+'">';
  }

  // turns geojson properties into something the map can understand
  // map attributes on the left, geojson properties on the right
  function drawOptions(props) {
    return {
      radius: 6,
      color: props["stroke"],
      width: props["stroke-width"],
      opacity: props["stroke-opacity"],
      fillColor: props["fill"] || props["marker-color"],
      fillOpacity: props["fill-opacity"]
    }
  }

  // flickr's embed code has a bunch of extra code we don't want,
  // since we only need the URL to the actual image. Use a regular
  // expression to parse out the URL or return nothing if it didn't work
  function flickrUrl(image) {
    var capture = image.match(/<img src=\"(?<url>[^\s]*)\" /);
    return (capture) ? capture.groups["url"] : ""
  }

  // for each feature (point, line, polygon) in the geojson,
  // build some HTML with the properties and add it as a popup
  function onEachFeature(feature, layer) {
    var html = buildHtml(feature.properties);
    layer.bindPopup(html);
  }

  // for each point (not lines / polygons), make a circle marker
  // styled with the properties defined in the geojson
  function pointToLayer(feature, latlng) {
    return L.circleMarker(latlng, drawOptions(feature.properties));
  }

  // style all the lines / polygons using properties in the geojson
  function style(feature) {
    return drawOptions(feature.properties);
  }

  //////////////////////
  // BASIC MAP SETUP  //
  //  (do not change) //
  //////////////////////

  // Create a base layer (uses open street maps)
  var baseLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attributionControl: false
  });

  // Create the actual map and start it zoomed in on Lincoln
  var map = L.map("map", {
      center: new L.LatLng(40.8, -96.7),
      zoom: 11,
      layers: [baseLayer]
  });

  // Adds an attribution for the map base layer
  L.control.attribution({
    position: 'bottomleft',
    prefix: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'

  }).addTo(map);

  // read in geojson data
  // alter this code if you are switching to ajax
  var geojson = L.geoJSON(json, {
    onEachFeature: onEachFeature,
    pointToLayer: pointToLayer,
    style: style
  });

  geojson.addTo(map);

  // zoom the map to fit whatever items are being displayed
  map.fitBounds(geojson.getBounds());

})
