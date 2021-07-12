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
        "stroke": "#555555",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#555555",
        "fill-opacity": 0.5,
        "image": "https://1.bp.blogspot.com/-WbftUEch0t0/X2DQmPdyksI/AAAAAAAAAIs/JHH1hwcqN0IVWsR8KCYabom1fqoweHBFACLcBGAsYHQ/w1684-h1069-p-k-no-nu/hearts.jpg",
        "title": "Nebraska State Capitol",
        "description": "Some description about something that happened at the capitol"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.70105934143066,
              40.806971850092815
            ],
            [
              -96.69826984405518,
              40.806971850092815
            ],
            [
              -96.69826984405518,
              40.809131953785965
            ],
            [
              -96.70105934143066,
              40.809131953785965
            ],
            [
              -96.70105934143066,
              40.806971850092815
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#ee05ff",
        "marker-size": "medium",
        "marker-symbol": "",
        "ingredients": "rhubarb, strawberries, egg, milk, butter, so much sugar",
        "thanks": "thanks to Linnea for giving me a pie",
        "title": "Starting Point",
        "image": "https://s3.amazonaws.com/omeka-net/53984/archive/square_thumbnails/e5847940c8baa5e9e50ad71ee468ba0e.jpg?AWSAccessKeyId=AKIAI3ATG3OSQLO5HGKA&Expires=1600905600&Signature=PapYafLVt%2BGfMiI%2F06Ibpay%2FXPk%3D"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.70299053192137,
          40.81015513625622
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ff5100",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "title": "Path to the library",
        "image": "https://1.bp.blogspot.com/-WbftUEch0t0/X2DQmPdyksI/AAAAAAAAAIs/JHH1hwcqN0IVWsR8KCYabom1fqoweHBFACLcBGAsYHQ/w1684-h1069-p-k-no-nu/hearts.jpg"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.69979333877563,
            40.80922127986828
          ],
          [
            -96.69986844062804,
            40.811389430620544
          ],
          [
            -96.6997504234314,
            40.811405671182825
          ],
          [
            -96.6996967792511,
            40.81468618325975
          ],
          [
            -96.69984698295592,
            40.8146943031379
          ],
          [
            -96.69984698295592,
            40.816837916207085
          ],
          [
            -96.70262575149535,
            40.81687851427114
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#d4ff00",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#0060ff",
        "fill-opacity": 0.2,
        "title": "Love Library",
        "image": "<a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/189753833@N07/50237618773/in/album-72157715528007683/\" title=\"yawn_connie\"><img src=\"https://live.staticflickr.com/65535/50237618773_c9052299b5_w.jpg\" width=\"300\" height=\"400\" alt=\"yawn_connie\"></a><script async src=\"//embedr.flickr.com/assets/client-code.js\" charset=\"utf-8\"></script>",
        "random": "Some other random field"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.70274376869202,
              40.817040906278805
            ],
            [
              -96.70216441154479,
              40.81700030831414
            ],
            [
              -96.70187473297119,
              40.817235776163265
            ],
            [
              -96.70193910598755,
              40.81753619944697
            ],
            [
              -96.70217514038086,
              40.81769858984467
            ],
            [
              -96.70218586921692,
              40.818104564099706
            ],
            [
              -96.70297980308533,
              40.81808832517719
            ],
            [
              -96.70300126075745,
              40.817609275175144
            ],
            [
              -96.70323729515076,
              40.81742252593206
            ],
            [
              -96.70299053192137,
              40.81704902586876
            ],
            [
              -96.70274376869202,
              40.817040906278805
            ]
          ]
        ]
      }
    }
  ]
}
