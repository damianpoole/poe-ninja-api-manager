class Helpers {
  /*
  * Sums up all the values of an object
  */
  static sumObjectValues(obj) {
    return Object.keys(obj).reduce((acc, val) => {
      return acc += parseFloat(obj[val]);
    }, 0);
  }

  /*
  * Compares to objects and returns true if they have the exact same content
  * This function name might be technically incorrect ;)
  */
  static isSameObject(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  /*
  * Builds the URL for an API call
  */
  static buildApiUrl(overview, type, league) {
    return `https://poe.ninja/api/data/${overview}overview?league=${league}&type=${type}`;
  }

  /*
  * Returns true if the object has the property and is not empty
  */
  static hasPropertyWithData(obj, prop) {
    if (typeof obj !== "undefined" && obj.hasOwnProperty(prop) && Object.keys(obj[prop]).length !== 0) {
      return true;
    }

    return false;
  }

  /*
  * Returns true if the object has the property, can be empty
  */
  static hasProperty(obj, prop) {
    if (typeof obj !== "undefined" && obj.hasOwnProperty(prop)) {
      return true;
    }

    return false;
  }

  /*
  * Returns the overview that corresponds to the item API type
  */
  static getOverviewByType(type, apis) {
    const api = apis.filter(api => api.type === type);

    return api.length !== 0 ? api[0].overview : "unknown";
  }

  /*
  * Returns true if an API object is valid. For poe.ninja APIs, this is true if the object has the `lines` key
  */
  static isValidNinjaApi(obj) {
    return Helpers.hasProperty(obj, "lines");
  }

  /*
  * Returns true if an API object contains currency details
  */
  static hasCurrencyDetailsData(obj) {
    return Helpers.hasPropertyWithData(obj, "currencyDetails");
  }

  /*
  * Adds the API type to matches and returns the adjusted matches array
  */
  static addApiTypeToMatches(type, matches) {
    matches = matches || [];

    for (var i = 0; i < matches.length; i++) {
      matches[i]["apiType"] = type;
    }

    return matches;
  }
}

module.exports = Helpers;
