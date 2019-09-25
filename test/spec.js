import { expect } from 'chai';
import  When from '../src/when';

describe("Webmaps-T 'when' object", function() {

  describe("Single-string timestamp", function() {

    it("parses a single timestamp from an ISO string", function() {

      // TODO
      const today = new When("2019-09-25");

      expect(1).to.equal(1);
    });

    it("handles BC dates propery", function() {

    });

  });

  describe("Single-string period", function() {
    
    it("parses a single timestamp from an ISO string", function() {

    });

    it("handles BC dates propery", function() {

    });
    
  });

});