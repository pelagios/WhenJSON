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

```javascript
var data = { 
  timespans: [
    { end: { in: 1680 }, start: { in: 300 }},
    { end: { in: 1800 }, start: { in: 1720 }}
  ]
};

var when = new When(data);

console.log(when.start);     // 300
console.log(when.end);       // 1800
console.log(when.intervals); // [[300, 1680], [1720, 1800]]
```

## TODOs

Lots of them...

- Actually support the full range of the `when` spec
- Return Date objects rather than year numbers. __Warning:__ JS Date is 
  notoriously bad at handling BC dates. May need to go with [js-joda](https://js-joda.github.io/js-joda/)
  perhaps?
- Resolvable periods? (Would be an async operation, and should probably be available as a bulk option
  only, for WhenCollections?)
- ...