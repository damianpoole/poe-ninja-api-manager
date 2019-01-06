/*globals jest*/
const Helpers = require("./helpers");

describe("Helper class", () => {
    describe("isSameObject", () => {
        it("Should return true exact same object", () => {
            const object = {
                property: "test"
            };

            expect(Helpers.isSameObject(object, object)).toEqual(true);
        });

        it("Should return true for two objects with the same properties", () => {
            const object1 = {
                property: "test"
            };
            const object2 = {
                property: "test"
            };

            expect(Helpers.isSameObject(object1, object2)).toEqual(true);
        });

        it("Should return false for two objects with different properties", () => {
            const object1 = {
                property: "foo"
            };
            const object2 = {
                property: "bar"
            };

            expect(Helpers.isSameObject(object1, object2)).toEqual(false);
        });
    });

    describe("sumObjectValues", () => {
        it("Should correctly sum up the values of an object", () => {
            const object = {
                prop1: 10,
                prop2: 10,
                prop3: 100
            };

            expect(Helpers.sumObjectValues(object)).toEqual(120);
        });
    });

    describe("buildApiUrl", () => {
        it("Should return a string for the desired api call", () => {
            const expectedResult = "https://poe.ninja/api/data/foooverview?league=baz&type=bar";

            expect(Helpers.buildApiUrl("foo", "bar", "baz"))
                .toEqual(expectedResult)
        });
    });

    describe("getOverviewByType", () => {
        const apis = [{
            overview: "hello",
            type: "test"
        }];

        it("Should return unknown for a type that doesn't exist", () => {
            const result = Helpers.getOverviewByType("foo", apis);

            expect(result).toEqual("unknown");
        });

        it("Should return the correct overview for the passed type", () => {
            const result = Helpers.getOverviewByType("test", apis);

            expect(result).toEqual("hello");
        });

        it("Should return the first result for duplicated types", () => {
            const apis = [{
                overview: "hello",
                type: "test"
            }, {
                overview: "goodbye",
                type: "test"
            }];

            const result = Helpers.getOverviewByType("test", apis);

            expect(result).toEqual("hello");
        });
    });

    describe("addApiTypeToMatches", () => {
        it("Should correctly add the passed type to each item in the matches", () => {
            const matches = [{}, {}];

            const matchesWithType = Helpers.addApiTypeToMatches("foo", matches);

            expect(matchesWithType[0].apiType).toEqual("foo");
            expect(matchesWithType[1].apiType).toEqual("foo");
        });

        it("Should not mutate the passed matches", () => {
            const matches = [{}, {}];

            Helpers.addApiTypeToMatches("foo", matches);

            expect(matches).toEqual([{}, {}]);
        });
    });

    describe("hasCurrencyDetailsData", () => {
        it("Should return true if the passed object has currency details", () => {
            const obj = {
                currencyDetails: [{}]
            };

            expect(Helpers.hasCurrencyDetailsData(obj)).toEqual(true);
        });

        it("Should return false if the object doesn't have currency details", () => {
            const obj = {};

            expect(Helpers.hasCurrencyDetailsData(obj)).toEqual(false);
        });

        it("Should return false if the currencyDetails is empty", () => {
            const obj = {
                currencyDetails: []
            };

            expect(Helpers.hasCurrencyDetailsData(obj)).toEqual(false);
        });
    });
});
