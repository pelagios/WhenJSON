import { expect } from 'chai';
import  When from '../src/when';

describe("GeoJSON-T Test file", function() {

  describe("The test file", function() {

    it("is parsed correctly", function() {
      const features = require('../data/100features.json').features;
      features.map(f => {
        const when = new When(f.when);
        // console.log(when);
      });
    });

  });

});