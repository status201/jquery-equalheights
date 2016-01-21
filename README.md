# jquery-equalheights
Equal heights jQuery Plugin by Gijs Oliemans, Status201 [Web Development](http://status201.nl)

## What does it do?
Little jQuery plugin to "vertically align elements" by stretching their height to match the tallest.
Only elements that live exactly at the same height in the document will be maximised to the same height.
This way 2 rows can vertically align nicely while having different heights.

## Install
Download either the [production version](https://github.com/status201/jquery-equalheights/blob/master/jquery.equalheights.min.js) or the [development version](https://github.com/status201/jquery-equalheights/blob/master/jquery.equalheights.js) of jquery-equalheights.

In your web page:
```html
<!-- include jQuery -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
<!-- include jQuery Equal Heights -->
<script src="http://path/to/your/copy/of/jquery.equalheights.min.js"></script>
<script>
$( document ).ready(function() {
    $('.elements-with-different-heights').equalHeights();
});
</script>
```

## Bower
To install jquery-equalheights via Bower:
```
bower install jquery-equal-heights
```

## Options
| Option        | Possible values | Default |
| :------------ |:---------------:| -------:|
| onLoad        | true / false    | true    |
| onResize      | true / false    | true    |

## Examples
```javascript
$( document ).ready(function() {

    // make all list items with class category the same height
    $('li.category').equalHeights();
  
    // make different elements the same height
    $('p.intro, img.thumbnail').equalHeights();
  
    // only resize once now (not on window.resize and window.load) 
    $('.nav button').equalHeights({
        onResize: false,
        onLoad: false
    });
});
```

## More info
More info at: http://dev201.nl/equal-height-jquery-plugin/
