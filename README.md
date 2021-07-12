# GeoJSON Demo

This code was written for ENGL 477/877 to demonstrate a spatial visualization
using [Leaflet](https://leafletjs.com/) and [GitHub Pages](https://pages.github.com/).

This repository includes several files and directories which you will be changing:

- `geojson.js` - you will paste your map info into this file (see directions below)
- `index.html` - change information in this file to add your title, name, and more

You do not need to change these files but you can if you want to try some things out:

- `map.css` - this CSS file controls how your website looks
- `map.js` - JavaScript that controls the behavior of the map

You should not change any of these files:

- `leaflet/*` - the leaflet javascript library, do not alter these files

## How to Use This Code

These steps repeat information from the video tutorial on Canvas and
are here for your convenience.

### 1. Fork the repository!

On the upper right of this webpage, there is a button which says "Fork." Click
that button and (if asked) select your username as the destination.

Now you have your own copy of the code ready to go!

### 2. Edit `index.html`

Click on the filename `index.html`. On the upper right there is a pencil icon.
Click the pencil icon to edit the file. When you are done, click "commit."

You may (but do not have to) change
the code in this file with your own information. For example:

```javascript
  <!-- CHANGE: Title, author, and description -->
  <!-- You can see the <title> in your browser tab -->
  <title>GeoJSON Demo</title>
  <meta name="author" content="Change this to your name">
```
You may change the above code to something like:

```javascript
  <!-- CHANGE: Title, author, and description -->
  <!-- You can see the <title> in your browser tab -->
  <title>Lincoln, NE Tour</title>
  <meta name="author" content="Jessica D">
```

### 3. Add your GeoJSON

Open `geojson.js` the same way you opened `index.html`. Select everything
below line 8 and delete it. Paste in your own geoJSON, then add this just before
the geoJSON begins:

```
var json =
```

Your code should look like:

```
var json = {
  "type": "FeatureCollection",
  "features": [
  ....(etc)
```

See [the explanation](#more-about-geojson-as-js) at the end for more information
about why we are adding the geoJSON this way, if you are curious!


### 4. Set up your website!

Go back to your repository's landing page (https://github.com/your_username/geojson_demo).
Towards the top of the page, there are some links like "Code," "Issues," etc. Click
"Settings" and scroll down to GitHub Pages. Select "main" for your branch and
hit save.

Open up a new tab and go to `http://your_username.github.io/geojson_demo`. Hopefully
you will see your map!!

### More About Geojson as JS

You might be wondering why we are saving the geoJSON
as a `.js` (javascript) file rather than a `.json` (json) file.

When you're running this code in a place like GitHub, it really doesn't matter
if the data is being stored as `.json` or in a JavaScript variable. But if you
were to download this code and try to run it locally, you would find that your
map wouldn't work!

Your web browser is pretty good at reading JavaScript files on your computer,
but most browsers are unhappy when asked to access local JSON. There are some ways
around this, like serving files to imitate being on the web,
but for the purposes of this demo I didn't want you to have to do anything
fancy to run your code locally, should that be something you were interested in.

Unfortunately, that does mean a little bit more work for you, since you have to make
sure that you add the `var json =` before your code in order to see your map!

In JavaScript, you can assign data like your geoJSON to something called a variable.
You can then refer to that variable elsewhere in code, so it's a good way to
store info that you are going to want later. In this case, we're assigning
the geoJSON to a variable called `json` with `var json = `, which means that
later on, the code generating the map can say "make a map using the data
stored in `json`."
