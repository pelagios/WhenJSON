export default class When {

  constructor(strOrObj) {
    if (strOrObj instanceof String || strOrObj.start || strOrObj.end ) {
      this._parseShorthand(strOrObj);
    } else if (strOrObj.timespans) { // TODO extend
      this._parseFullObject(strOrObj);      
    } else {
      // throw new Error(`Invalid when object: ${strOrObj}`)
    }
  }

  _parseShorthand(strOrObj) {
    // TODO
  }

  _parseFullObject(obj) {
    // TODO
  }

  get start() {
    
  }

  get end() {

  }

  get groups() {

  }

}