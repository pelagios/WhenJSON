# WhenJSON

A utility library to support working with the GeoJSON-T 'when' objects.

__Work in progress__

## Hacking

Run `npm test` to run the tests.

## Building

Run `npm run build` to build a minified distribution.

## Using

Include the script file into the head of your HTML page:

```html
<script type="text/javascript" src="when.min.js"></script>
```

Create When objects from your data like so:

```json
var data = { 
  timespans: [
    { end: { in: 1680 }, start: { in: 300 }}
  ]
};

var when = new When(data);
```