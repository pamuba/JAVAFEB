"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log("Triangle is drawn(external module)");
    };
    return Triangle;
}());
exports.Triangle = Triangle;
