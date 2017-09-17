"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: "Iron-man", alias: "Tony Stark" },
            { id: 12, name: "Hulk", alias: "Bruce Banner" },
            { id: 13, name: "Captain America", alias: "Steve Rogers" },
            { id: 14, name: "Thor", alias: "Tony Stark" },
            { id: 15, name: "Black Widow", alias: "Natasha Romanov" },
            { id: 16, name: "Hawkeye", alias: "Clint Barton" },
            { id: 17, name: "Falcon", alias: "Samuel Wilson" },
            { id: 18, name: "Ant-man", alias: "Scott Lang" }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=data.service.js.map