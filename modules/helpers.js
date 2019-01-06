class Helpers {
  /**
   * Sums up all the values of an object
   * @param {Object} obj The object to sum up
   * @return {Number} The summed up result
   */
  static sumObjectValues(obj) {
    return Object.keys(obj).reduce((acc, val) => {
      return acc += parseFloat(obj[val]);
    }, 0);
  }

  /**
   * Compares to objects and returns true if they have the exact same content
   * @param {Object} obj1 The first object to use in the comparison
   * @param {Object} obj2 The second object to use in the comparison
   * @return {Boolean} Wether the two objects contents match
   */
  static isSameObject(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  /**
   * Builds the URL for an API call
   * @param {String} overview
   * @param {String} type
   * @param {String} league
   * @return {String}
   */
  static buildApiUrl(overview, type, league) {
    return `https://poe.ninja/api/data/${overview}overview?league=${league}&type=${type}`;
  }

  /**
   * Returns the overview that corresponds to the item API type
   * @param {String} type The type to find the overview by
   * @param {Object[]} apis The API's to search through
   * @return {String} The resulting overview
   */
  static getOverviewByType(type, apis) {
    const api = apis.filter(api => api.type === type);

    return api.length !== 0 ? api[0].overview : "unknown";
  }

  /**
   * Returns true if an API object is valid. For poe.ninja APIs, this is true if the object has the `lines` key
   * @param {Object} obj The object to check for it being  valid POE Ninja response.
   * @return {Boolean}
   */
  static isValidNinjaApi(obj) {
    const hasProperty = (obj, prop) => typeof obj !== "undefined" && obj.hasOwnProperty(prop);

    return hasProperty(obj, "lines");
  }

  /**
   * Returns true if an API object contains currency details
   * @param {Object} obj The object to check
   * @return {Boolean}
   */
  static hasCurrencyDetailsData(obj) {
    const hasPropertyWithData = (obj, prop) => typeof obj !== "undefined" && obj.hasOwnProperty(prop) && Object.keys(obj[prop]).length !== 0;

    return hasPropertyWithData(obj, "currencyDetails");
  }

  /**
   * Adds the API type to matches and returns a new array of matches
   * @param {String} type The type to add to each match
   * @param {Object[]} matches Array of each match
   * @return {Object[]}
   */
  static addApiTypeToMatches(type, matches) {
    return matches.map(({ ...x }) => {
      x.apiType = type;
      return x;
    });
  }
}

module.exports = Helpers;
