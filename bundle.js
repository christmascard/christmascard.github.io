/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assert.ts":
/*!***********************!*\
  !*** ./src/assert.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}


/***/ }),

/***/ "./src/color.ts":
/*!**********************!*\
  !*** ./src/color.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Color = /** @class */ (function () {
    function Color(hex) {
        var _this = this;
        this.getHex = function () { return _this.hex; };
        this.hex = hex;
    }
    return Color;
}());
/* harmony default export */ __webpack_exports__["default"] = (Color);


/***/ }),

/***/ "./src/coordinate.ts":
/*!***************************!*\
  !*** ./src/coordinate.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Coordinate = /** @class */ (function () {
    function Coordinate(x, y) {
        var _this = this;
        this.add = function (offset) {
            return new Coordinate(_this.x + offset.x, _this.y + offset.y);
        };
        this.subtract = function (other) {
            return new Coordinate(_this.x - other.x, _this.y - other.y);
        };
        this.getX = function () { return _this.x; };
        this.getY = function () { return _this.y; };
        this.x = x;
        this.y = y;
    }
    return Coordinate;
}());
/* harmony default export */ __webpack_exports__["default"] = (Coordinate);


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./src/color.ts");
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordinate */ "./src/coordinate.ts");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ "./src/grid.ts");
/* harmony import */ var _inventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory */ "./src/inventory.ts");
/* harmony import */ var _piece_specification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./piece_specification */ "./src/piece_specification.ts");





var Game = /** @class */ (function () {
    function Game(grid, inventory, inventorySize) {
        var _this = this;
        this.withPlacedItem = function (coordinate, item) {
            var newGrid = _this.grid.withPiece(coordinate, item.getPieceSpecification());
            var inventoryWithoutItem = _this.inventory.withoutItem(item);
            var newInventory = inventoryWithoutItem.isEmpty()
                ? Game.generateInventory(newGrid, _this.inventorySize)
                : inventoryWithoutItem;
            return new Game(newGrid, newInventory, _this.inventorySize);
        };
        this.getGrid = function () { return _this.grid; };
        this.getInventory = function () { return _this.inventory; };
        this.grid = grid;
        this.inventory = inventory;
        this.inventorySize = inventorySize;
    }
    Game.pieceSpecifications = function () {
        var colorType1 = "red";
        var colorType2 = "green";
        var colorType3 = "blue";
        var colorType4 = "indigo";
        var colorType5 = "violet";
        var colorType6 = "orange";
        var colorType7 = "white";
        var colorType8 = "pink";
        return [
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType1), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0), new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1), new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0)
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType1), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0), new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1), new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1)
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType1), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0), new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0), new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1)
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType1), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1), new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0), new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1)
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType2), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0), new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0), new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1)
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType3), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 2),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 2),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 2),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType4), [new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0)]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType5), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType5), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 1),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType5), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 0),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType5), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 2),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType5), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 2),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 2),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType5), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 2),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 2),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType6), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType6), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType6), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 2),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType6), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 2),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType7), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 0),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType7), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 2),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType8), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 1),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType8), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](2, 0),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType8), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 2),
            ]),
            new _piece_specification__WEBPACK_IMPORTED_MODULE_4__["default"](new _color__WEBPACK_IMPORTED_MODULE_0__["default"](colorType8), [
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 0),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](1, 1),
                new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](0, 2),
            ]),
        ];
    };
    Game.create = function (gridXDimension, gridYDimension, inventorySize) {
        var grid = _grid__WEBPACK_IMPORTED_MODULE_2__["default"].withDimensions(gridXDimension, gridYDimension);
        var inventory = Game.generateInventory(grid, inventorySize);
        return new Game(grid, inventory, inventorySize);
    };
    Game.generateInventory = function (grid, inventorySize) {
        var chosenPieceSpecifications = [];
        for (var i = 0; i < inventorySize; i++) {
            var randomIndex = Math.floor(Math.random() * Game.pieceSpecifications().length);
            chosenPieceSpecifications.push(Game.pieceSpecifications()[randomIndex]);
        }
        return _inventory__WEBPACK_IMPORTED_MODULE_3__["default"].withPieceSpecifications(chosenPieceSpecifications);
    };
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/game_display.ts":
/*!*****************************!*\
  !*** ./src/game_display.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid_display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid_display */ "./src/grid_display.ts");
/* harmony import */ var _inventory_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory_display */ "./src/inventory_display.ts");
/* harmony import */ var _piece_specification_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./piece_specification_display */ "./src/piece_specification_display.ts");



var GameDisplay = /** @class */ (function () {
    function GameDisplay(gridOffset, inventoryOffset, inventoryWidth, xRectDimension, yRectDimension, drawRectangle, drawBaseImage) {
        var _this = this;
        this.draw = function (game) {
            _this.drawBaseImage();
            var gridXDimension = _this.gridDisplay.getXDimension(game.getGrid());
            var gridYDimension = _this.gridDisplay.getYDimension(game.getGrid());
            _this.gridDisplay.draw(game.getGrid());
            _this.inventoryDisplay.draw(game.getInventory());
        };
        this.getInventoryDisplay = function () { return _this.inventoryDisplay; };
        this.getGridDisplay = function () { return _this.gridDisplay; };
        this.createPieceSpecificationDisplay = function (offset, pieceSpecification) {
            return new _piece_specification_display__WEBPACK_IMPORTED_MODULE_2__["default"](pieceSpecification, offset, _this.xRectDimension, _this.yRectDimension, _this.drawRectangle);
        };
        this.xRectDimension = xRectDimension;
        this.yRectDimension = yRectDimension;
        this.drawRectangle = drawRectangle;
        this.drawBaseImage = drawBaseImage;
        this.gridDisplay = new _grid_display__WEBPACK_IMPORTED_MODULE_0__["default"](gridOffset, this.xRectDimension, this.yRectDimension, this.drawRectangle);
        this.inventoryDisplay = new _inventory_display__WEBPACK_IMPORTED_MODULE_1__["default"](inventoryOffset, this.xRectDimension, this.yRectDimension, inventoryWidth, this.drawRectangle);
    }
    return GameDisplay;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameDisplay);


/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "./src/assert.ts");

var Grid = /** @class */ (function () {
    function Grid(colors) {
        var _this = this;
        this.getColors = function () { return _this.colors; };
        this.colorAt = function (coord) { return _this.colors[coord.getX()][coord.getY()]; };
        this.inBounds = function (coord) {
            return coord.getX() >= 0 && coord.getX() < _this.colors.length &&
                coord.getY() >= 0 && coord.getY() < _this.colors[0].length;
        };
        this.pieceFits = function (coord, pieceSpecification) {
            var pieceRelativeCoords = pieceSpecification.getRelativeCoords();
            return pieceRelativeCoords.every(function (pieceRelativeCoord) {
                var absoluteCoord = coord.add(pieceRelativeCoord);
                return _this.inBounds(absoluteCoord) &&
                    _this.colorAt(absoluteCoord) === undefined;
            });
        };
        this.cloneColors = function () {
            var newColors = [];
            for (var i = 0; i < _this.colors.length; i++) {
                newColors[i] = [];
                for (var j = 0; j < _this.colors[0].length; j++) {
                    newColors[i][j] = _this.colors[i][j];
                }
            }
            return newColors;
        };
        this.withPiece = function (coord, pieceSpecification) {
            Object(_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(_this.pieceFits(coord, pieceSpecification));
            var newColors = _this.cloneColors();
            pieceSpecification.getRelativeCoords().forEach(function (relativeCoord) {
                var absoluteCoord = coord.add(relativeCoord);
                newColors[absoluteCoord.getX()][absoluteCoord.getY()] =
                    pieceSpecification.getColor();
            });
            return new Grid(newColors);
        };
        this.getXDimension = function () { return _this.colors.length; };
        this.getYDimension = function () { return _this.colors[0].length; };
        this.colors = colors;
    }
    Grid.withDimensions = function (xDimension, yDimension) {
        Object(_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(xDimension > 0 && yDimension > 0);
        var colors = [];
        for (var i = 0; i < xDimension; i++) {
            colors[i] = [];
            for (var j = 0; j < yDimension; j++) {
                colors[i][j] = undefined;
            }
        }
        return new Grid(colors);
    };
    return Grid;
}());
/* harmony default export */ __webpack_exports__["default"] = (Grid);


/***/ }),

/***/ "./src/grid_display.ts":
/*!*****************************!*\
  !*** ./src/grid_display.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./src/color.ts");
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordinate */ "./src/coordinate.ts");


var GridDisplay = /** @class */ (function () {
    function GridDisplay(offset, xRectDimension, yRectDimension, drawRectangle) {
        var _this = this;
        this.emptyColor = new _color__WEBPACK_IMPORTED_MODULE_0__["default"]("#BB2528");
        this.draw = function (grid) {
            var colors = grid.getColors();
            for (var i = 0; i < colors.length; i++) {
                for (var j = 0; j < colors[0].length; j++) {
                    var color = colors[i][j];
                    var startX = i * _this.xRectDimension;
                    var startY = j * _this.yRectDimension;
                    var startCoordWithOffset = (new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](startX, startY)).add(_this.offset);
                    if (color !== undefined) {
                        // this.drawRectangle(color, startCoordWithOffset,
                        //                   this.xRectDimension, this.yRectDimension);
                    }
                    else {
                        _this.drawRectangle(_this.emptyColor, startCoordWithOffset, _this.xRectDimension, _this.yRectDimension);
                    }
                }
            }
        };
        this.toGridCoord = function (coord) {
            var relativeCoord = coord.subtract(_this.offset);
            var gridX = Math.round(relativeCoord.getX() / _this.xRectDimension);
            var gridY = Math.round(relativeCoord.getY() / _this.yRectDimension);
            return new _coordinate__WEBPACK_IMPORTED_MODULE_1__["default"](gridX, gridY);
        };
        this.getXDimension = function (grid) { return _this.xRectDimension * grid.getXDimension(); };
        this.getYDimension = function (grid) { return _this.xRectDimension * grid.getXDimension(); };
        this.offset = offset;
        this.xRectDimension = xRectDimension;
        this.yRectDimension = yRectDimension;
        this.drawRectangle = drawRectangle;
    }
    return GridDisplay;
}());
/* harmony default export */ __webpack_exports__["default"] = (GridDisplay);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ "./src/coordinate.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.ts");
/* harmony import */ var _game_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_display */ "./src/game_display.ts");
/* harmony import */ var _interaction_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interaction_handler */ "./src/interaction_handler.ts");




var startGameButton = document.getElementById("start-game");
startGameButton.addEventListener("click", startGame);
function startGame() {
    document.getElementById("card").outerHTML = "";
    function preventBehavior(e) { e.preventDefault(); }
    ;
    document.addEventListener("touchmove", preventBehavior, { passive: false });
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    var context = canvas.getContext("2d");
    var image = document.getElementById("source");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log("starting game");
    var borderWidth = 12;
    var drawRectangle = function (color, startCoord, xRectDimension, yRectDimension) {
        context.fillStyle = "#F8B229";
        context.fillRect(startCoord.getX(), startCoord.getY(), xRectDimension + borderWidth, yRectDimension + borderWidth);
        context.fillStyle = color.getHex();
        context.fillRect(startCoord.getX() + borderWidth, startCoord.getY() + borderWidth, xRectDimension - borderWidth, yRectDimension - borderWidth);
    };
    var margin = canvas.width / 10;
    var gridXOffset = margin;
    var gridYOffset = margin;
    var gridXDimension = 12;
    var gridYDimension = 12;
    var xRectDimension = (canvas.width - borderWidth - (2 * margin)) / gridXDimension;
    var yRectDimension = xRectDimension;
    var inventorySize = 3;
    var drawBaseImage = function () {
        context.fillStyle = "#165B33";
        context.fillRect(0, 0, canvas.width, canvas.height);
        var borderStartX = gridXOffset;
        var borderStartY = gridYOffset;
        var borderEndX = xRectDimension * gridXDimension + borderWidth;
        var borderEndY = yRectDimension * gridYDimension + borderWidth;
        context.fillStyle = "#F8B229";
        context.fillRect(borderStartX, borderStartY, borderEndX, borderEndY);
        var imageStartX = gridXOffset + borderWidth;
        var imageStartY = gridYOffset + borderWidth;
        var imageEndX = xRectDimension * gridXDimension - borderWidth;
        var imageEndY = yRectDimension * gridYDimension - borderWidth;
        var words = ["WHAT", "DECORATIONS", "ARE", "ON", "THE", "TREE", "?"];
        var textSpace = 20;
        var textSize = (imageEndY - imageStartY) / words.length - textSpace;
        context.font = "bold " + textSize + "px Mountains of Christmas";
        context.fillStyle = "white";
        context.textAlign = "center";
        var textOffsetX = (imageStartX + imageEndX) / 2 + 2 * borderWidth;
        var textOffsetY = imageStartY + 150;
        context.drawImage(image, imageStartX, imageStartY, imageEndX, imageEndY);
        for (var i = 0; i < words.length; i++) {
            context.fillText(words[i], textOffsetX, textOffsetY + ((textSize + textSpace) * i));
        }
    };
    var game = _game__WEBPACK_IMPORTED_MODULE_1__["default"].create(gridXDimension, gridYDimension, inventorySize);
    var gameDisplay = new _game_display__WEBPACK_IMPORTED_MODULE_2__["default"](new _coordinate__WEBPACK_IMPORTED_MODULE_0__["default"](gridXOffset, gridYOffset), new _coordinate__WEBPACK_IMPORTED_MODULE_0__["default"](gridXOffset, gridYDimension * yRectDimension + margin +
        borderWidth + margin), gridXDimension * xRectDimension, xRectDimension, yRectDimension, drawRectangle, drawBaseImage);
    function clearDisplay() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    var interactionHandler = new _interaction_handler__WEBPACK_IMPORTED_MODULE_3__["default"](game, gameDisplay, clearDisplay);
    var eventToCoordinate = function (e) {
        var x = e.changedTouches
            ? e.changedTouches[0].pageX
            : e.pageX;
        var y = e.changedTouches
            ? e.changedTouches[0].pageY
            : e.pageY;
        return new _coordinate__WEBPACK_IMPORTED_MODULE_0__["default"](x, y);
    };
    var convert = function (f) {
        return function (e) { return f(eventToCoordinate(e)); };
    };
    canvas.addEventListener("mousedown", convert(interactionHandler.handlePress));
    canvas.addEventListener("mousemove", convert(interactionHandler.handleDrag));
    canvas.addEventListener("mouseup", convert(interactionHandler.handleRelease));
    canvas.addEventListener("mouseout", convert(interactionHandler.handleCancel));
    canvas.addEventListener("touchstart", convert(interactionHandler.handlePress));
    canvas.addEventListener("touchmove", convert(interactionHandler.handleDrag));
    canvas.addEventListener("touchend", convert(interactionHandler.handleRelease));
    canvas.addEventListener("touchcancel", convert(interactionHandler.handleCancel));
}


/***/ }),

/***/ "./src/interaction_handler.ts":
/*!************************************!*\
  !*** ./src/interaction_handler.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var InteractionHandler = /** @class */ (function () {
    function InteractionHandler(game, gameDisplay, clearDisplay) {
        var _this = this;
        this.selectedItem = undefined;
        this.handlePress = function (coord) {
            var maybeItemWithOffset = _this.gameDisplay.getInventoryDisplay().itemAtWithOffset(coord, _this.game.getInventory());
            if (maybeItemWithOffset !== undefined) {
                var item = maybeItemWithOffset[0];
                _this.gameDisplay.getInventoryDisplay().selectItem(item);
                var pieceOffset = maybeItemWithOffset[1];
                _this.selectedItem = new SelectedItem(coord, pieceOffset, item);
                console.log(_this.selectedItem);
            }
        };
        this.handleDrag = function (coord) {
            if (_this.selectedItem !== undefined) {
                _this.clearDisplay();
                _this.gameDisplay.draw(_this.game);
                var pieceSpecificationDisplay = _this.gameDisplay.createPieceSpecificationDisplay(_this.selectedItem.newPieceCoord(coord), _this.selectedItem.getItem().getPieceSpecification());
                pieceSpecificationDisplay.draw();
            }
        };
        this.resetDisplay = function () {
            _this.selectedItem = undefined;
            _this.gameDisplay.getInventoryDisplay().removeSelection();
            _this.clearDisplay();
            _this.gameDisplay.draw(_this.game);
        };
        this.handleRelease = function (coord) {
            if (_this.selectedItem !== undefined) {
                var item = _this.selectedItem.getItem();
                var pieceCoord = _this.selectedItem.newPieceCoord(coord);
                var gridCoord = _this.gameDisplay.getGridDisplay().toGridCoord(pieceCoord);
                if (_this.game.getGrid().pieceFits(gridCoord, item.getPieceSpecification())) {
                    _this.game = _this.game.withPlacedItem(gridCoord, item);
                }
                _this.resetDisplay();
            }
        };
        this.handleCancel = function (coord) { _this.resetDisplay(); };
        this.game = game;
        this.gameDisplay = gameDisplay;
        this.gameDisplay.draw(game);
        this.clearDisplay = clearDisplay;
    }
    return InteractionHandler;
}());
/* harmony default export */ __webpack_exports__["default"] = (InteractionHandler);
var SelectedItem = /** @class */ (function () {
    function SelectedItem(selectionCoord, pieceCoord, item) {
        var _this = this;
        this.getSelectionCoord = function () { return _this.selectionCoord; };
        this.getPieceCoord = function () { return _this.pieceCoord; };
        this.newPieceCoord = function (coord) {
            var selectionOffset = coord.subtract(_this.selectionCoord);
            return _this.pieceCoord.add(selectionOffset).add(selectionOffset).add(selectionOffset);
        };
        this.getItem = function () { return _this.item; };
        this.selectionCoord = selectionCoord;
        this.pieceCoord = pieceCoord;
        this.item = item;
    }
    return SelectedItem;
}());


/***/ }),

/***/ "./src/inventory.ts":
/*!**************************!*\
  !*** ./src/inventory.ts ***!
  \**************************/
/*! exports provided: default, Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Inventory = /** @class */ (function () {
    function Inventory(items) {
        var _this = this;
        this.getItems = function () { return _this.items; };
        this.withoutItem = function (item) {
            var newItems = _this.items.map(function (i) { return i === item ? undefined : i; });
            return new Inventory(newItems);
        };
        this.isEmpty = function () { return _this.items.every(function (maybeItem) { return maybeItem === undefined; }); };
        this.items = items;
    }
    Inventory.withPieceSpecifications = function (members) {
        return new Inventory(members.map(function (member) { return new Item(member); }));
    };
    return Inventory;
}());
/* harmony default export */ __webpack_exports__["default"] = (Inventory);
var Item = /** @class */ (function () {
    function Item(pieceSpecification) {
        var _this = this;
        this.getPieceSpecification = function () { return _this.pieceSpecification; };
        this.pieceSpecification = pieceSpecification;
    }
    return Item;
}());



/***/ }),

/***/ "./src/inventory_display.ts":
/*!**********************************!*\
  !*** ./src/inventory_display.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ "./src/coordinate.ts");
/* harmony import */ var _piece_specification_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece_specification_display */ "./src/piece_specification_display.ts");


var InventoryDisplay = /** @class */ (function () {
    function InventoryDisplay(offset, xRectDimension, yRectDimension, width, drawRectangle) {
        var _this = this;
        this.selectedItem = undefined;
        this.createPieceSpecificationDisplays = function (inventory) {
            var items = inventory.getItems();
            var displays = [];
            for (var i = 0; i < items.length; i++) {
                var maybeItem = items[i];
                if (maybeItem !== undefined && maybeItem !== _this.selectedItem) {
                    var xMargin = _this.xRectDimension / 2;
                    var yMargin = _this.yRectDimension / 2;
                    var startX = (i * _this.width / items.length) + xMargin;
                    var startY = yMargin;
                    var startCoord = new _coordinate__WEBPACK_IMPORTED_MODULE_0__["default"](startX, startY);
                    var pieceSpecificationDisplay = new _piece_specification_display__WEBPACK_IMPORTED_MODULE_1__["default"](maybeItem.getPieceSpecification(), startCoord.add(_this.offset), _this.xRectDimension, _this.yRectDimension, _this.drawRectangle);
                    displays[i] = pieceSpecificationDisplay;
                }
            }
            return displays;
        };
        this.draw = function (inventory) {
            var displays = _this.createPieceSpecificationDisplays(inventory);
            displays.forEach(function (maybeDisplay) {
                if (maybeDisplay !== undefined) {
                    maybeDisplay.draw();
                }
            });
        };
        this.itemAtWithOffset = function (coord, inventory) {
            var displays = _this.createPieceSpecificationDisplays(inventory);
            for (var i = 0; i < displays.length; i++) {
                var maybeDisplay = displays[i];
                if (maybeDisplay !== undefined && maybeDisplay.contains(coord)) {
                    return [inventory.getItems()[i], displays[i].getOffset()];
                }
            }
            return undefined;
        };
        this.selectItem = function (item) { _this.selectedItem = item; };
        this.removeSelection = function () { _this.selectedItem = undefined; };
        this.offset = offset;
        this.xRectDimension = xRectDimension;
        this.yRectDimension = yRectDimension;
        this.width = width;
        this.drawRectangle = drawRectangle;
    }
    return InventoryDisplay;
}());
/* harmony default export */ __webpack_exports__["default"] = (InventoryDisplay);


/***/ }),

/***/ "./src/piece_specification.ts":
/*!************************************!*\
  !*** ./src/piece_specification.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PieceSpecification = /** @class */ (function () {
    function PieceSpecification(color, relativeCoords) {
        var _this = this;
        this.getColor = function () { return _this.color; };
        this.getRelativeCoords = function () { return _this.relativeCoords; };
        this.color = color;
        this.relativeCoords = relativeCoords;
    }
    return PieceSpecification;
}());
/* harmony default export */ __webpack_exports__["default"] = (PieceSpecification);


/***/ }),

/***/ "./src/piece_specification_display.ts":
/*!********************************************!*\
  !*** ./src/piece_specification_display.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ "./src/coordinate.ts");

var PieceSpecificationDisplay = /** @class */ (function () {
    function PieceSpecificationDisplay(pieceSpecification, offset, xRectDimension, yRectDimension, drawRectangle) {
        var _this = this;
        this.draw = function () {
            _this.pieceSpecification.getRelativeCoords().forEach(function (relativeCoord) {
                var startX = relativeCoord.getX() * _this.xRectDimension;
                var startY = relativeCoord.getY() * _this.yRectDimension;
                var startCoord = new _coordinate__WEBPACK_IMPORTED_MODULE_0__["default"](startX, startY);
                _this.drawRectangle(_this.pieceSpecification.getColor(), startCoord.add(_this.offset), _this.xRectDimension, _this.yRectDimension);
            });
        };
        this.contains = function (coord) {
            return _this.pieceSpecification.getRelativeCoords().some(function (relativeCoord) {
                var xMargin = 20;
                var yMargin = 20;
                var startX = relativeCoord.getX() * _this.xRectDimension;
                var startY = relativeCoord.getY() * _this.yRectDimension;
                var startCoordWithOffset = (new _coordinate__WEBPACK_IMPORTED_MODULE_0__["default"](startX, startY)).add(_this.offset);
                var inX = coord.getX() >= startCoordWithOffset.getX() - xMargin &&
                    coord.getX() < startCoordWithOffset.getX() +
                        _this.xRectDimension + xMargin;
                var inY = coord.getY() >= startCoordWithOffset.getY() - yMargin &&
                    coord.getY() < startCoordWithOffset.getY() +
                        _this.yRectDimension + yMargin;
                return inX && inY;
            });
        };
        this.getPieceSpecification = function () { return _this.pieceSpecification; };
        this.getOffset = function () { return _this.offset; };
        this.xRectDimension = xRectDimension;
        this.yRectDimension = yRectDimension;
        this.drawRectangle = drawRectangle;
        this.pieceSpecification = pieceSpecification;
        this.offset = offset;
    }
    return PieceSpecificationDisplay;
}());
/* harmony default export */ __webpack_exports__["default"] = (PieceSpecificationDisplay);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2VydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb3JkaW5hdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfZGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZF9kaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3Rpb25faGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW52ZW50b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnZlbnRvcnlfZGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2Vfc3BlY2lmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2Vfc3BlY2lmaWNhdGlvbl9kaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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ckIsQ0FBQztZQUV6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckIsQ0FBQztZQUN6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckIsQ0FBQztZQUN6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckIsQ0FBQztZQUN6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckIsQ0FBQztTQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVFLFdBQU0sR0FDVCxVQUFDLGNBQXNCLEVBQUUsY0FBc0IsRUFDOUMsYUFBcUI7UUFDcEIsSUFBTSxJQUFJLEdBQUcsNkNBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2pFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDOUQsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFVSxzQkFBaUIsR0FDNUIsVUFBQyxJQUFVLEVBQUUsYUFBcUI7UUFDaEMsSUFBTSx5QkFBeUIsR0FBRyxFQUFFLENBQUM7UUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFNLFdBQVcsR0FDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsRSx5QkFBeUIsQ0FBQyxJQUFJLENBQzFCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLGtEQUFTLENBQUMsdUJBQXVCLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBd0JQLFdBQUM7Q0FBQTtBQXpOb0IsbUVBQUk7Ozs7Ozs7Ozs7Ozs7QUNIekI7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDVTtBQUVtQjtBQUV0RTtJQVlFLHFCQUFZLFVBQXNCLEVBQUUsZUFBMkIsRUFDbkQsY0FBc0IsRUFBRSxjQUFzQixFQUM5QyxjQUFzQixFQUN0QixhQUUrQyxFQUMvQyxhQUF5QjtRQU5yQyxpQkFpQkM7UUFFRCxTQUFJLEdBQ0EsVUFBQyxJQUFVO1lBQ1QsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQU0sY0FBYyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLElBQU0sY0FBYyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVMLHdCQUFtQixHQUFHLGNBQVEsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRTdELG1CQUFjLEdBQUcsY0FBUSxPQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBRW5ELG9DQUErQixHQUMzQixVQUFDLE1BQWtCLEVBQUUsa0JBQXNDO1lBQ3pELE9BQU8sSUFBSSxvRUFBeUIsQ0FDaEMsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxjQUFjLEVBQy9DLEtBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUE5QkgsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHFEQUFXLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQy9CLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLDBEQUFnQixDQUN4QyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUN6RCxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFxQkgsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQzFERDtBQUFBO0FBQThCO0FBSzlCO0lBZUUsY0FBb0IsTUFBc0I7UUFBMUMsaUJBQXFFO1FBRXJFLGNBQVMsR0FBRyxjQUFRLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFakMsWUFBTyxHQUNYLFVBQUMsS0FBaUIsSUFBTyxPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlFLGFBQVEsR0FDSixVQUFDLEtBQWlCO1lBQ2hCLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUN0RCxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNuRSxDQUFDO1FBRUwsY0FBUyxHQUNMLFVBQUMsS0FBaUIsRUFBRSxrQkFBc0M7WUFDeEQsSUFBTSxtQkFBbUIsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ25FLE9BQU8sbUJBQW1CLENBQUMsS0FBSyxDQUFDLDRCQUFrQjtnQkFDakQsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNwRCxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO29CQUM1QixLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLFNBQVMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRyxnQkFBVyxHQUNmO1lBQ0UsSUFBTSxTQUFTLEdBQW1CLEVBQUUsQ0FBQztZQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25ELFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDdEQsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JDO2FBQ0Y7WUFDRCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBRUwsY0FBUyxHQUNMLFVBQUMsS0FBaUIsRUFBRSxrQkFBc0M7WUFDeEQsdURBQU0sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBTSxTQUFTLEdBQUcsS0FBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBYTtnQkFDMUQsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDL0MsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDakQsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFFTCxrQkFBYSxHQUFHLGNBQVEsT0FBTyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFcEQsa0JBQWEsR0FBRyxjQUFRLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBakRULElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQUMsQ0FBQztJQVo5RCxtQkFBYyxHQUFyQixVQUFzQixVQUFrQixFQUFFLFVBQWtCO1FBQzFELHVEQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDMUI7U0FDRjtRQUNELE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQW9ESCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN0RUQ7QUFBQTtBQUFBO0FBQTRCO0FBQ1U7QUFHdEM7SUFRRSxxQkFBWSxNQUFrQixFQUFFLGNBQXNCLEVBQzFDLGNBQXNCLEVBQ3RCLGFBRStDO1FBSjNELGlCQVNDO1FBYk8sZUFBVSxHQUFHLElBQUksOENBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQWUxQyxTQUFJLEdBQ0EsVUFBQyxJQUFVO1lBQ1QsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDekMsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzQixJQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQztvQkFDdkMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7b0JBQ3ZDLElBQU0sb0JBQW9CLEdBQ3RCLENBQUMsSUFBSSxtREFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTt3QkFDdkIsa0RBQWtEO3dCQUNsRCwrREFBK0Q7cUJBQ2hFO3lCQUFNO3dCQUNMLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFDckMsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQzlEO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDO1FBRUwsZ0JBQVcsR0FDUCxVQUFDLEtBQWlCO1lBQ2hCLElBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDckUsT0FBTyxJQUFJLG1EQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFTCxrQkFBYSxHQUNULFVBQUMsSUFBVSxJQUFPLE9BQU8sS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTFFLGtCQUFhLEdBQ1QsVUFBQyxJQUFVLElBQU8sT0FBTyxLQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUF2Q3hFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFvQ0gsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3hERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ1o7QUFDZTtBQUVjO0FBSXZELElBQU0sZUFBZSxHQUNqQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBc0IsQ0FBQztBQUMvRCxlQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRXJELFNBQVMsU0FBUztJQUNoQixRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFHL0MsU0FBUyxlQUFlLENBQUMsQ0FBYSxJQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBRWhFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLEVBQUMsT0FBTyxFQUFHLEtBQUssRUFBQyxDQUFDLENBQUM7SUFFM0UsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXNCLENBQUM7SUFDckUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBcUIsQ0FBQztJQUVwRSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDakMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0lBRW5DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0IsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLElBQU0sYUFBYSxHQUNmLFVBQUMsS0FBWSxFQUFFLFVBQXNCLEVBQUUsY0FBc0IsRUFDNUQsY0FBc0I7UUFDckIsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDOUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxFQUNwQyxjQUFjLEdBQUcsV0FBVyxFQUM1QixjQUFjLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFFL0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkMsT0FBTyxDQUFDLFFBQVEsQ0FDWixVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsV0FBVyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxXQUFXLEVBQ2hFLGNBQWMsR0FBRyxXQUFXLEVBQUUsY0FBYyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVqQyxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUM7SUFDM0IsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBRTNCLElBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMxQixJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFFMUIsSUFBTSxjQUFjLEdBQ2hCLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7SUFDakUsSUFBTSxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBRXRDLElBQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztJQUV4QixJQUFNLGFBQWEsR0FDZjtRQUNFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFNLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDakMsSUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ2pDLElBQU0sVUFBVSxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsV0FBVyxDQUFDO1FBQ2pFLElBQU0sVUFBVSxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsV0FBVyxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckUsSUFBTSxXQUFXLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUM5QyxJQUFNLFdBQVcsR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzlDLElBQU0sU0FBUyxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsV0FBVyxDQUFDO1FBQ2hFLElBQU0sU0FBUyxHQUFHLGNBQWMsR0FBRyxjQUFjLEdBQUcsV0FBVyxDQUFDO1FBQ2hFLElBQU0sS0FBSyxHQUNQLENBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFFLENBQUM7UUFDL0QsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQU0sUUFBUSxHQUFHLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsVUFBUSxRQUFRLDhCQUEyQixDQUFDO1FBQzNELE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzdCLElBQU0sV0FBVyxHQUFHLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQ3BFLElBQU0sV0FBVyxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQzFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFDckIsV0FBVyxHQUFHLENBQUMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFTCxJQUFNLElBQUksR0FBRyw2Q0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRXhFLElBQU0sV0FBVyxHQUFHLElBQUkscURBQVcsQ0FDL0IsSUFBSSxtREFBVSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsRUFDeEMsSUFBSSxtREFBVSxDQUFDLFdBQVcsRUFBRSxjQUFjLEdBQUcsY0FBYyxHQUFHLE1BQU07UUFDcEMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxFQUNyRCxjQUFjLEdBQUcsY0FBYyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQy9ELGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUVsQyxTQUFTLFlBQVk7UUFDbkIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFNLGtCQUFrQixHQUNwQixJQUFJLDREQUFrQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFNUQsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLENBQXdCO1FBQ2pELElBQU0sQ0FBQyxHQUFJLENBQWdCLENBQUMsY0FBYztZQUM1QixDQUFDLENBQUUsQ0FBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUMzQyxDQUFDLENBQUUsQ0FBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDeEMsSUFBTSxDQUFDLEdBQUksQ0FBZ0IsQ0FBQyxjQUFjO1lBQzVCLENBQUMsQ0FBRSxDQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQzNDLENBQUMsQ0FBRSxDQUFnQixDQUFDLEtBQUssQ0FBQztRQUN4QyxPQUFPLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0lBRUYsSUFBTSxPQUFPLEdBQUcsVUFBQyxDQUE4QjtRQUM3QyxPQUFPLFVBQUMsQ0FBd0IsSUFBSyxRQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBdkIsQ0FBdUI7SUFDOUQsQ0FBQyxDQUFDO0lBRUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzdFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUU5RSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUNaLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDN0UsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFDVixPQUFPLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNuRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUNiLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN6SEQ7QUFBQTtJQU9FLDRCQUFZLElBQVUsRUFBRSxXQUF3QixFQUFFLFlBQXdCO1FBQTFFLGlCQUtDO1FBWE8saUJBQVksR0FBMkIsU0FBUyxDQUFDO1FBYXpELGdCQUFXLEdBQ1AsVUFBQyxLQUFpQjtZQUNoQixJQUFNLG1CQUFtQixHQUNyQixLQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUMsZ0JBQWdCLENBQ25ELEtBQUssRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDekMsSUFBSSxtQkFBbUIsS0FBSyxTQUFTLEVBQUU7Z0JBQ3JDLElBQU0sSUFBSSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4RCxJQUFNLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNoQztRQUNILENBQUM7UUFFTCxlQUFVLEdBQ04sVUFBQyxLQUFpQjtZQUNoQixJQUFJLEtBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO2dCQUNuQyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsSUFBTSx5QkFBeUIsR0FDM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQywrQkFBK0IsQ0FDNUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQ3RDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO2dCQUM3RCx5QkFBeUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQztRQUNILENBQUM7UUFFRyxpQkFBWSxHQUNoQjtZQUNFLEtBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN6RCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFFTCxrQkFBYSxHQUNULFVBQUMsS0FBaUI7WUFDaEIsSUFBSSxLQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtnQkFDbkMsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDekMsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFELElBQU0sU0FBUyxHQUNYLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDVCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxFQUFFO29CQUMvRCxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDdkQ7Z0JBQ0QsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQztRQUVMLGlCQUFZLEdBQUcsVUFBQyxLQUFpQixJQUFPLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUF4RDVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFxREgseUJBQUM7QUFBRCxDQUFDOztBQUVEO0lBS0Usc0JBQVksY0FBMEIsRUFBRSxVQUFzQixFQUFFLElBQVU7UUFBMUUsaUJBSUM7UUFFRCxzQkFBaUIsR0FBRyxjQUFNLFlBQUksQ0FBQyxjQUFjLEVBQW5CLENBQW1CLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxjQUFNLFlBQUksQ0FBQyxVQUFVLEVBQWYsQ0FBZSxDQUFDO1FBRXRDLGtCQUFhLEdBQUcsVUFBQyxLQUFpQjtZQUNoQyxJQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUM7WUFDM0QsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7UUFFRCxZQUFPLEdBQUcsY0FBTSxZQUFJLENBQUMsSUFBSSxFQUFULENBQVMsQ0FBQztRQWJ4QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBV0gsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUZEO0FBQUE7QUFBQTtJQVFFLG1CQUFvQixLQUE0QjtRQUFoRCxpQkFBeUU7UUFFekUsYUFBUSxHQUFHLGNBQVEsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV2QyxnQkFBVyxHQUNQLFVBQUMsSUFBVTtZQUNULElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVMLFlBQU8sR0FDSCxjQUFRLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsbUJBQVMsSUFBSSxnQkFBUyxLQUFLLFNBQVMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQVh4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUFDLENBQUM7SUFKbEUsaUNBQXVCLEdBQTlCLFVBQStCLE9BQTZCO1FBQzFELE9BQU8sSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBTSxJQUFJLFdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBY0gsZ0JBQUM7QUFBRCxDQUFDOztBQUVEO0lBR0UsY0FBWSxrQkFBc0M7UUFBbEQsaUJBRUM7UUFFRCwwQkFBcUIsR0FBRyxjQUFRLE9BQU8sS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUgvRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7SUFDL0MsQ0FBQztJQUdILFdBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2pDRDtBQUFBO0FBQUE7QUFBc0M7QUFHZ0M7QUFFdEU7SUFVRSwwQkFBWSxNQUFrQixFQUFFLGNBQXNCLEVBQzFDLGNBQXNCLEVBQUUsS0FBYSxFQUNyQyxhQUUrQztRQUozRCxpQkFVQztRQVpPLGlCQUFZLEdBQW1CLFNBQVMsQ0FBQztRQWNqRCxxQ0FBZ0MsR0FDNUIsVUFBQyxTQUFvQjtZQUNuQixJQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkMsSUFBTSxRQUFRLEdBQStDLEVBQUUsQ0FBQztZQUNoRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLFNBQVMsS0FBSyxTQUFTLElBQUksU0FBUyxLQUFLLEtBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQzlELElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO29CQUN4QyxJQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztvQkFDeEMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO29CQUN6RCxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQU0sVUFBVSxHQUFHLElBQUksbURBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ2xELElBQU0seUJBQXlCLEdBQUcsSUFBSSxvRUFBeUIsQ0FDM0QsU0FBUyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQzlELEtBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2xFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyx5QkFBeUIsQ0FBQztpQkFDekM7YUFDRjtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7UUFFTCxTQUFJLEdBQ0EsVUFBQyxTQUFvQjtZQUNuQixJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsZ0NBQWdDLENBQUMsU0FBUyxDQUFDO1lBQ2pFLFFBQVEsQ0FBQyxPQUFPLENBQUMsc0JBQVk7Z0JBQzNCLElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtvQkFDOUIsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNyQjtZQUNILENBQUMsQ0FBQztRQUNKLENBQUM7UUFFTCxxQkFBZ0IsR0FFWixVQUFDLEtBQWlCLEVBQUUsU0FBb0I7WUFDdEMsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLGdDQUFnQyxDQUFDLFNBQVMsQ0FBQztZQUNqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDOUQsT0FBTyxDQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUUsQ0FBQztpQkFDN0Q7YUFDRjtZQUNELE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFFTCxlQUFVLEdBQUcsVUFBQyxJQUFVLElBQU8sS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTFELG9CQUFlLEdBQUcsY0FBUSxLQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFyRHhELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFpREgsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3hFRDtBQUFBO0lBR0UsNEJBQVksS0FBWSxFQUFFLGNBQTRCO1FBQXRELGlCQUdDO1FBRUQsYUFBUSxHQUFHLGNBQVEsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV2QyxzQkFBaUIsR0FBRyxjQUFRLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFOdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdkMsQ0FBQztJQUtILHlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQXNDO0FBR3RDO0lBUUUsbUNBQVksa0JBQXNDLEVBQUUsTUFBa0IsRUFDMUQsY0FBc0IsRUFBRSxjQUFzQixFQUM5QyxhQUUrQztRQUozRCxpQkFVQztRQUVELFNBQUksR0FDQTtZQUNFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBYTtnQkFDL0QsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQzFELElBQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO2dCQUMxRCxJQUFNLFVBQVUsR0FBRyxJQUFJLG1EQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNsRCxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsRUFDbEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSSxDQUFDLGNBQWMsRUFDaEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVMLGFBQVEsR0FDSixVQUFDLEtBQWlCO1lBQ2hCLE9BQU8sS0FBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNuRCx1QkFBYTtnQkFDWCxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7Z0JBQ25CLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsSUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUM7Z0JBQzFELElBQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO2dCQUMxRCxJQUFNLG9CQUFvQixHQUN0QixDQUFDLElBQUksbURBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RCxJQUFNLEdBQUcsR0FDTCxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksb0JBQW9CLENBQUMsSUFBSSxFQUFFLEdBQUcsT0FBTztvQkFDckQsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLG9CQUFvQixDQUFDLElBQUksRUFBRTt3QkFDdkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7Z0JBQ3JELElBQU0sR0FBRyxHQUNMLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxPQUFPO29CQUNyRCxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxFQUFFO3dCQUN2QixLQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztnQkFDckQsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ3BCLENBQUMsQ0FBQztRQUNSLENBQUM7UUFFTCwwQkFBcUIsR0FBRyxjQUFRLE9BQU8sS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUVqRSxjQUFTLEdBQUcsY0FBUSxPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBM0N2QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQXVDSCxnQ0FBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlPzogc3RyaW5nKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvciB7XG4gIHByaXZhdGUgaGV4OiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKGhleDogc3RyaW5nKSB7IHRoaXMuaGV4ID0gaGV4OyB9XG5cbiAgZ2V0SGV4ID0gKCkgPT4geyByZXR1cm4gdGhpcy5oZXg7IH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb3JkaW5hdGUge1xuICBwcml2YXRlIHg6IG51bWJlcjtcbiAgcHJpdmF0ZSB5OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBhZGQgPVxuICAgICAgKG9mZnNldDogQ29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IENvb3JkaW5hdGUodGhpcy54ICsgb2Zmc2V0LngsIHRoaXMueSArIG9mZnNldC55KVxuICAgICAgfVxuXG4gIHN1YnRyYWN0ID1cbiAgICAgIChvdGhlcjogQ29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IENvb3JkaW5hdGUodGhpcy54IC0gb3RoZXIueCwgdGhpcy55IC0gb3RoZXIueSk7XG4gICAgICB9XG5cbiAgZ2V0WCA9ICgpID0+IHsgcmV0dXJuIHRoaXMueDsgfVxuXG4gIGdldFkgPSAoKSA9PiB7IHJldHVybiB0aGlzLnk7IH1cbn1cbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vY29vcmRpbmF0ZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xuaW1wb3J0IEludmVudG9yeSwge0l0ZW19IGZyb20gXCIuL2ludmVudG9yeVwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbiBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBwcml2YXRlIGdyaWQ6IEdyaWQ7XG4gIHByaXZhdGUgaW52ZW50b3J5OiBJbnZlbnRvcnk7XG4gIHByaXZhdGUgaW52ZW50b3J5U2l6ZTogbnVtYmVyO1xuXG4gIHByaXZhdGUgc3RhdGljIHBpZWNlU3BlY2lmaWNhdGlvbnMgPVxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb2xvclR5cGUxID0gXCJyZWRcIjtcbiAgICAgICAgY29uc3QgY29sb3JUeXBlMiA9IFwiZ3JlZW5cIjtcbiAgICAgICAgY29uc3QgY29sb3JUeXBlMyA9IFwiYmx1ZVwiO1xuICAgICAgICBjb25zdCBjb2xvclR5cGU0ID0gXCJpbmRpZ29cIjtcbiAgICAgICAgY29uc3QgY29sb3JUeXBlNSA9IFwidmlvbGV0XCI7XG4gICAgICAgIGNvbnN0IGNvbG9yVHlwZTYgPSBcIm9yYW5nZVwiO1xuICAgICAgICBjb25zdCBjb2xvclR5cGU3ID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjb25zdCBjb2xvclR5cGU4ID0gXCJwaW5rXCI7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKFxuICAgICAgICAgICAgICBuZXcgQ29sb3IoY29sb3JUeXBlMSksXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSwgbmV3IENvb3JkaW5hdGUoMCwgMSksIG5ldyBDb29yZGluYXRlKDEsIDApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24oXG4gICAgICAgICAgICAgIG5ldyBDb2xvcihjb2xvclR5cGUxKSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLCBuZXcgQ29vcmRpbmF0ZSgwLCAxKSwgbmV3IENvb3JkaW5hdGUoMSwgMSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihcbiAgICAgICAgICAgICAgbmV3IENvbG9yKGNvbG9yVHlwZTEpLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksIG5ldyBDb29yZGluYXRlKDEsIDApLCBuZXcgQ29vcmRpbmF0ZSgxLCAxKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKFxuICAgICAgICAgICAgICBuZXcgQ29sb3IoY29sb3JUeXBlMSksXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSwgbmV3IENvb3JkaW5hdGUoMSwgMCksIG5ldyBDb29yZGluYXRlKDEsIDEpXG4gICAgICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLCBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksIG5ldyBDb29yZGluYXRlKDEsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcblxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcblxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyBuZXcgQ29vcmRpbmF0ZSgwLCAwKSBdKSxcblxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG5cbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU3KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG5cbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgXTtcbiAgICAgIH1cblxuICBzdGF0aWMgY3JlYXRlID1cbiAgICAgIChncmlkWERpbWVuc2lvbjogbnVtYmVyLCBncmlkWURpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgIGludmVudG9yeVNpemU6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBncmlkID0gR3JpZC53aXRoRGltZW5zaW9ucyhncmlkWERpbWVuc2lvbiwgZ3JpZFlEaW1lbnNpb24pO1xuICAgICAgICBjb25zdCBpbnZlbnRvcnkgPSBHYW1lLmdlbmVyYXRlSW52ZW50b3J5KGdyaWQsIGludmVudG9yeVNpemUpO1xuICAgICAgICByZXR1cm4gbmV3IEdhbWUoZ3JpZCwgaW52ZW50b3J5LCBpbnZlbnRvcnlTaXplKTtcbiAgICAgIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZUludmVudG9yeSA9XG4gICAgICAoZ3JpZDogR3JpZCwgaW52ZW50b3J5U2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNob3NlblBpZWNlU3BlY2lmaWNhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnZlbnRvcnlTaXplOyBpKyspIHtcbiAgICAgICAgICBjb25zdCByYW5kb21JbmRleCA9XG4gICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEdhbWUucGllY2VTcGVjaWZpY2F0aW9ucygpLmxlbmd0aCk7XG4gICAgICAgICAgY2hvc2VuUGllY2VTcGVjaWZpY2F0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICBHYW1lLnBpZWNlU3BlY2lmaWNhdGlvbnMoKVtyYW5kb21JbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBJbnZlbnRvcnkud2l0aFBpZWNlU3BlY2lmaWNhdGlvbnMoY2hvc2VuUGllY2VTcGVjaWZpY2F0aW9ucyk7XG4gICAgICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihncmlkOiBHcmlkLCBpbnZlbnRvcnk6IEludmVudG9yeSwgaW52ZW50b3J5U2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5ncmlkID0gZ3JpZDtcbiAgICB0aGlzLmludmVudG9yeSA9IGludmVudG9yeTtcbiAgICB0aGlzLmludmVudG9yeVNpemUgPSBpbnZlbnRvcnlTaXplO1xuICB9XG5cbiAgd2l0aFBsYWNlZEl0ZW0gPVxuICAgICAgKGNvb3JkaW5hdGU6IENvb3JkaW5hdGUsIGl0ZW06IEl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3R3JpZCA9XG4gICAgICAgICAgICB0aGlzLmdyaWQud2l0aFBpZWNlKGNvb3JkaW5hdGUsIGl0ZW0uZ2V0UGllY2VTcGVjaWZpY2F0aW9uKCkpO1xuICAgICAgICBjb25zdCBpbnZlbnRvcnlXaXRob3V0SXRlbSA9IHRoaXMuaW52ZW50b3J5LndpdGhvdXRJdGVtKGl0ZW0pO1xuICAgICAgICBjb25zdCBuZXdJbnZlbnRvcnkgPVxuICAgICAgICAgICAgaW52ZW50b3J5V2l0aG91dEl0ZW0uaXNFbXB0eSgpXG4gICAgICAgICAgICAgICAgPyBHYW1lLmdlbmVyYXRlSW52ZW50b3J5KG5ld0dyaWQsIHRoaXMuaW52ZW50b3J5U2l6ZSlcbiAgICAgICAgICAgICAgICA6IGludmVudG9yeVdpdGhvdXRJdGVtO1xuXG4gICAgICAgIHJldHVybiBuZXcgR2FtZShuZXdHcmlkLCBuZXdJbnZlbnRvcnksIHRoaXMuaW52ZW50b3J5U2l6ZSk7XG4gICAgICB9XG5cbiAgZ2V0R3JpZCA9ICgpID0+IHsgcmV0dXJuIHRoaXMuZ3JpZDsgfVxuXG4gIGdldEludmVudG9yeSA9ICgpID0+IHsgcmV0dXJuIHRoaXMuaW52ZW50b3J5OyB9XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBHcmlkRGlzcGxheSBmcm9tIFwiLi9ncmlkX2Rpc3BsYXlcIjtcbmltcG9ydCBJbnZlbnRvcnlEaXNwbGF5IGZyb20gXCIuL2ludmVudG9yeV9kaXNwbGF5XCI7XG5pbXBvcnQgUGllY2VTcGVjaWZpY2F0aW9uIGZyb20gXCIuL3BpZWNlX3NwZWNpZmljYXRpb25cIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5IGZyb20gXCIuL3BpZWNlX3NwZWNpZmljYXRpb25fZGlzcGxheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRGlzcGxheSB7XG4gIHByaXZhdGUgeFJlY3REaW1lbnNpb246IG51bWJlcjtcbiAgcHJpdmF0ZSB5UmVjdERpbWVuc2lvbjogbnVtYmVyO1xuICBwcml2YXRlIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHZvaWQ7XG5cbiAgcHJpdmF0ZSBkcmF3QmFzZUltYWdlOiAoKSA9PiB2b2lkO1xuXG4gIHByaXZhdGUgZ3JpZERpc3BsYXk6IEdyaWREaXNwbGF5O1xuICBwcml2YXRlIGludmVudG9yeURpc3BsYXk6IEludmVudG9yeURpc3BsYXk7XG5cbiAgY29uc3RydWN0b3IoZ3JpZE9mZnNldDogQ29vcmRpbmF0ZSwgaW52ZW50b3J5T2Zmc2V0OiBDb29yZGluYXRlLFxuICAgICAgICAgICAgICBpbnZlbnRvcnlXaWR0aDogbnVtYmVyLCB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICBkcmF3UmVjdGFuZ2xlOiAoY29sb3I6IENvbG9yLCBzdGFydENvb3JkOiBDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHZvaWQsXG4gICAgICAgICAgICAgIGRyYXdCYXNlSW1hZ2U6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLnhSZWN0RGltZW5zaW9uID0geFJlY3REaW1lbnNpb247XG4gICAgdGhpcy55UmVjdERpbWVuc2lvbiA9IHlSZWN0RGltZW5zaW9uO1xuICAgIHRoaXMuZHJhd1JlY3RhbmdsZSA9IGRyYXdSZWN0YW5nbGU7XG4gICAgdGhpcy5kcmF3QmFzZUltYWdlID0gZHJhd0Jhc2VJbWFnZTtcbiAgICB0aGlzLmdyaWREaXNwbGF5ID0gbmV3IEdyaWREaXNwbGF5KGdyaWRPZmZzZXQsIHRoaXMueFJlY3REaW1lbnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnlSZWN0RGltZW5zaW9uLCB0aGlzLmRyYXdSZWN0YW5nbGUpO1xuXG4gICAgdGhpcy5pbnZlbnRvcnlEaXNwbGF5ID0gbmV3IEludmVudG9yeURpc3BsYXkoXG4gICAgICAgIGludmVudG9yeU9mZnNldCwgdGhpcy54UmVjdERpbWVuc2lvbiwgdGhpcy55UmVjdERpbWVuc2lvbixcbiAgICAgICAgaW52ZW50b3J5V2lkdGgsIHRoaXMuZHJhd1JlY3RhbmdsZSk7XG4gIH1cblxuICBkcmF3ID1cbiAgICAgIChnYW1lOiBHYW1lKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhd0Jhc2VJbWFnZSgpO1xuICAgICAgICBjb25zdCBncmlkWERpbWVuc2lvbiA9IHRoaXMuZ3JpZERpc3BsYXkuZ2V0WERpbWVuc2lvbihnYW1lLmdldEdyaWQoKSk7XG4gICAgICAgIGNvbnN0IGdyaWRZRGltZW5zaW9uID0gdGhpcy5ncmlkRGlzcGxheS5nZXRZRGltZW5zaW9uKGdhbWUuZ2V0R3JpZCgpKTtcbiAgICAgICAgdGhpcy5ncmlkRGlzcGxheS5kcmF3KGdhbWUuZ2V0R3JpZCgpKTtcbiAgICAgICAgdGhpcy5pbnZlbnRvcnlEaXNwbGF5LmRyYXcoZ2FtZS5nZXRJbnZlbnRvcnkoKSk7XG4gICAgICB9XG5cbiAgZ2V0SW52ZW50b3J5RGlzcGxheSA9ICgpID0+IHsgcmV0dXJuIHRoaXMuaW52ZW50b3J5RGlzcGxheTsgfVxuXG4gIGdldEdyaWREaXNwbGF5ID0gKCkgPT4geyByZXR1cm4gdGhpcy5ncmlkRGlzcGxheTsgfVxuXG4gIGNyZWF0ZVBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXkgPVxuICAgICAgKG9mZnNldDogQ29vcmRpbmF0ZSwgcGllY2VTcGVjaWZpY2F0aW9uOiBQaWVjZVNwZWNpZmljYXRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5KFxuICAgICAgICAgICAgcGllY2VTcGVjaWZpY2F0aW9uLCBvZmZzZXQsIHRoaXMueFJlY3REaW1lbnNpb24sXG4gICAgICAgICAgICB0aGlzLnlSZWN0RGltZW5zaW9uLCB0aGlzLmRyYXdSZWN0YW5nbGUpO1xuICAgICAgfVxufVxuIiwiaW1wb3J0IGFzc2VydCBmcm9tIFwiLi9hc3NlcnRcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vY29vcmRpbmF0ZVwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbiBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICBwcml2YXRlIGNvbG9yczogTWF5YmVDb2xvcltdW107XG5cbiAgc3RhdGljIHdpdGhEaW1lbnNpb25zKHhEaW1lbnNpb246IG51bWJlciwgeURpbWVuc2lvbjogbnVtYmVyKSB7XG4gICAgYXNzZXJ0KHhEaW1lbnNpb24gPiAwICYmIHlEaW1lbnNpb24gPiAwKTtcbiAgICBjb25zdCBjb2xvcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgeERpbWVuc2lvbjsgaSsrKSB7XG4gICAgICBjb2xvcnNbaV0gPSBbXTtcbiAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB5RGltZW5zaW9uOyBqKyspIHtcbiAgICAgICAgY29sb3JzW2ldW2pdID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEdyaWQoY29sb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoY29sb3JzOiBNYXliZUNvbG9yW11bXSkgeyB0aGlzLmNvbG9ycyA9IGNvbG9yczsgfVxuXG4gIGdldENvbG9ycyA9ICgpID0+IHsgcmV0dXJuIHRoaXMuY29sb3JzOyB9XG5cbiAgcHJpdmF0ZSBjb2xvckF0ID1cbiAgICAgIChjb29yZDogQ29vcmRpbmF0ZSkgPT4geyByZXR1cm4gdGhpcy5jb2xvcnNbY29vcmQuZ2V0WCgpXVtjb29yZC5nZXRZKCldOyB9XG5cbiAgaW5Cb3VuZHMgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBjb29yZC5nZXRYKCkgPj0gMCAmJiBjb29yZC5nZXRYKCkgPCB0aGlzLmNvbG9ycy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgIGNvb3JkLmdldFkoKSA+PSAwICYmIGNvb3JkLmdldFkoKSA8IHRoaXMuY29sb3JzWzBdLmxlbmd0aDtcbiAgICAgIH1cblxuICBwaWVjZUZpdHMgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlLCBwaWVjZVNwZWNpZmljYXRpb246IFBpZWNlU3BlY2lmaWNhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBwaWVjZVJlbGF0aXZlQ29vcmRzID0gcGllY2VTcGVjaWZpY2F0aW9uLmdldFJlbGF0aXZlQ29vcmRzKCk7XG4gICAgICAgIHJldHVybiBwaWVjZVJlbGF0aXZlQ29vcmRzLmV2ZXJ5KHBpZWNlUmVsYXRpdmVDb29yZCA9PiB7XG4gICAgICAgICAgY29uc3QgYWJzb2x1dGVDb29yZCA9IGNvb3JkLmFkZChwaWVjZVJlbGF0aXZlQ29vcmQpO1xuICAgICAgICAgIHJldHVybiB0aGlzLmluQm91bmRzKGFic29sdXRlQ29vcmQpICYmXG4gICAgICAgICAgICAgICAgIHRoaXMuY29sb3JBdChhYnNvbHV0ZUNvb3JkKSA9PT0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICBwcml2YXRlIGNsb25lQ29sb3JzID1cbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Q29sb3JzOiBNYXliZUNvbG9yW11bXSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5jb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBuZXdDb2xvcnNbaV0gPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5jb2xvcnNbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG5ld0NvbG9yc1tpXVtqXSA9IHRoaXMuY29sb3JzW2ldW2pdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3Q29sb3JzO1xuICAgICAgfVxuXG4gIHdpdGhQaWVjZSA9XG4gICAgICAoY29vcmQ6IENvb3JkaW5hdGUsIHBpZWNlU3BlY2lmaWNhdGlvbjogUGllY2VTcGVjaWZpY2F0aW9uKSA9PiB7XG4gICAgICAgIGFzc2VydCh0aGlzLnBpZWNlRml0cyhjb29yZCwgcGllY2VTcGVjaWZpY2F0aW9uKSk7XG4gICAgICAgIGNvbnN0IG5ld0NvbG9ycyA9IHRoaXMuY2xvbmVDb2xvcnMoKVxuICAgICAgICBwaWVjZVNwZWNpZmljYXRpb24uZ2V0UmVsYXRpdmVDb29yZHMoKS5mb3JFYWNoKHJlbGF0aXZlQ29vcmQgPT4ge1xuICAgICAgICAgIGNvbnN0IGFic29sdXRlQ29vcmQgPSBjb29yZC5hZGQocmVsYXRpdmVDb29yZCk7XG4gICAgICAgICAgbmV3Q29sb3JzW2Fic29sdXRlQ29vcmQuZ2V0WCgpXVthYnNvbHV0ZUNvb3JkLmdldFkoKV0gPVxuICAgICAgICAgICAgICBwaWVjZVNwZWNpZmljYXRpb24uZ2V0Q29sb3IoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgR3JpZChuZXdDb2xvcnMpO1xuICAgICAgfVxuXG4gIGdldFhEaW1lbnNpb24gPSAoKSA9PiB7IHJldHVybiB0aGlzLmNvbG9ycy5sZW5ndGg7IH1cblxuICBnZXRZRGltZW5zaW9uID0gKCkgPT4geyByZXR1cm4gdGhpcy5jb2xvcnNbMF0ubGVuZ3RoOyB9XG59XG5cbmV4cG9ydCB0eXBlIE1heWJlQ29sb3IgPSBDb2xvcnx1bmRlZmluZWRcbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vY29vcmRpbmF0ZVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkRGlzcGxheSB7XG4gIHByaXZhdGUgb2Zmc2V0OiBDb29yZGluYXRlO1xuICBwcml2YXRlIHhSZWN0RGltZW5zaW9uOiBudW1iZXI7XG4gIHByaXZhdGUgeVJlY3REaW1lbnNpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBlbXB0eUNvbG9yID0gbmV3IENvbG9yKFwiI0JCMjUyOFwiKTtcbiAgcHJpdmF0ZSBkcmF3UmVjdGFuZ2xlOiAoY29sb3I6IENvbG9yLCBzdGFydENvb3JkOiBDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyKSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcihvZmZzZXQ6IENvb3JkaW5hdGUsIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb246IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMueFJlY3REaW1lbnNpb24gPSB4UmVjdERpbWVuc2lvbjtcbiAgICB0aGlzLnlSZWN0RGltZW5zaW9uID0geVJlY3REaW1lbnNpb247XG4gICAgdGhpcy5kcmF3UmVjdGFuZ2xlID0gZHJhd1JlY3RhbmdsZTtcbiAgfVxuXG4gIGRyYXcgPVxuICAgICAgKGdyaWQ6IEdyaWQpID0+IHtcbiAgICAgICAgY29uc3QgY29sb3JzID0gZ3JpZC5nZXRDb2xvcnMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbG9yc1swXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBjb2xvcnNbaV1bal07XG4gICAgICAgICAgICBjb25zdCBzdGFydFggPSBpICogdGhpcy54UmVjdERpbWVuc2lvbjtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IGogKiB0aGlzLnlSZWN0RGltZW5zaW9uO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRDb29yZFdpdGhPZmZzZXQgPVxuICAgICAgICAgICAgICAgIChuZXcgQ29vcmRpbmF0ZShzdGFydFgsIHN0YXJ0WSkpLmFkZCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICBpZiAoY29sb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAvLyB0aGlzLmRyYXdSZWN0YW5nbGUoY29sb3IsIHN0YXJ0Q29vcmRXaXRoT2Zmc2V0LFxuICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICB0aGlzLnhSZWN0RGltZW5zaW9uLCB0aGlzLnlSZWN0RGltZW5zaW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZSh0aGlzLmVtcHR5Q29sb3IsIHN0YXJ0Q29vcmRXaXRoT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54UmVjdERpbWVuc2lvbiwgdGhpcy55UmVjdERpbWVuc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgdG9HcmlkQ29vcmQgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlQ29vcmQgPSBjb29yZC5zdWJ0cmFjdCh0aGlzLm9mZnNldCk7XG4gICAgICAgIGNvbnN0IGdyaWRYID0gTWF0aC5yb3VuZChyZWxhdGl2ZUNvb3JkLmdldFgoKSAvIHRoaXMueFJlY3REaW1lbnNpb24pO1xuICAgICAgICBjb25zdCBncmlkWSA9IE1hdGgucm91bmQocmVsYXRpdmVDb29yZC5nZXRZKCkgLyB0aGlzLnlSZWN0RGltZW5zaW9uKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb29yZGluYXRlKGdyaWRYLCBncmlkWSk7XG4gICAgICB9XG5cbiAgZ2V0WERpbWVuc2lvbiA9XG4gICAgICAoZ3JpZDogR3JpZCkgPT4geyByZXR1cm4gdGhpcy54UmVjdERpbWVuc2lvbiAqIGdyaWQuZ2V0WERpbWVuc2lvbigpOyB9XG5cbiAgZ2V0WURpbWVuc2lvbiA9XG4gICAgICAoZ3JpZDogR3JpZCkgPT4geyByZXR1cm4gdGhpcy54UmVjdERpbWVuc2lvbiAqIGdyaWQuZ2V0WERpbWVuc2lvbigpOyB9XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCBHYW1lRGlzcGxheSBmcm9tIFwiLi9nYW1lX2Rpc3BsYXlcIjtcbmltcG9ydCBHcmlkIGZyb20gXCIuL2dyaWRcIjtcbmltcG9ydCBJbnRlcmFjdGlvbkhhbmRsZXIgZnJvbSBcIi4vaW50ZXJhY3Rpb25faGFuZGxlclwiO1xuaW1wb3J0IEludmVudG9yeSBmcm9tIFwiLi9pbnZlbnRvcnlcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuXG5jb25zdCBzdGFydEdhbWVCdXR0b24gPVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnQtZ2FtZVwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbnN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRcIikub3V0ZXJIVE1MID0gXCJcIjtcblxuXG4gIGZ1bmN0aW9uIHByZXZlbnRCZWhhdmlvcihlOiBUb3VjaEV2ZW50KSB7IGUucHJldmVudERlZmF1bHQoKTsgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHByZXZlbnRCZWhhdmlvciwge3Bhc3NpdmUgOiBmYWxzZX0pO1xuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3VyY2VcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcblxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICBjb25zb2xlLmxvZyhcInN0YXJ0aW5nIGdhbWVcIik7XG4gIGNvbnN0IGJvcmRlcldpZHRoID0gMTI7XG4gIGNvbnN0IGRyYXdSZWN0YW5nbGUgPVxuICAgICAgKGNvbG9yOiBDb2xvciwgc3RhcnRDb29yZDogQ29vcmRpbmF0ZSwgeFJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjRjhCMjI5XCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3Qoc3RhcnRDb29yZC5nZXRYKCksIHN0YXJ0Q29vcmQuZ2V0WSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uICsgYm9yZGVyV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb24gKyBib3JkZXJXaWR0aCk7XG5cbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvci5nZXRIZXgoKTtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgICAgICAgIHN0YXJ0Q29vcmQuZ2V0WCgpICsgYm9yZGVyV2lkdGgsIHN0YXJ0Q29vcmQuZ2V0WSgpICsgYm9yZGVyV2lkdGgsXG4gICAgICAgICAgICB4UmVjdERpbWVuc2lvbiAtIGJvcmRlcldpZHRoLCB5UmVjdERpbWVuc2lvbiAtIGJvcmRlcldpZHRoKTtcbiAgICAgIH1cblxuICBjb25zdCBtYXJnaW4gPSBjYW52YXMud2lkdGggLyAxMDtcblxuICBjb25zdCBncmlkWE9mZnNldCA9IG1hcmdpbjtcbiAgY29uc3QgZ3JpZFlPZmZzZXQgPSBtYXJnaW47XG5cbiAgY29uc3QgZ3JpZFhEaW1lbnNpb24gPSAxMjtcbiAgY29uc3QgZ3JpZFlEaW1lbnNpb24gPSAxMjtcblxuICBjb25zdCB4UmVjdERpbWVuc2lvbiA9XG4gICAgICAoY2FudmFzLndpZHRoIC0gYm9yZGVyV2lkdGggLSAoMiAqIG1hcmdpbikpIC8gZ3JpZFhEaW1lbnNpb247XG4gIGNvbnN0IHlSZWN0RGltZW5zaW9uID0geFJlY3REaW1lbnNpb247XG5cbiAgY29uc3QgaW52ZW50b3J5U2l6ZSA9IDM7XG5cbiAgY29uc3QgZHJhd0Jhc2VJbWFnZSA9XG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjMTY1QjMzXCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgYm9yZGVyU3RhcnRYID0gZ3JpZFhPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJvcmRlclN0YXJ0WSA9IGdyaWRZT2Zmc2V0O1xuICAgICAgICBjb25zdCBib3JkZXJFbmRYID0geFJlY3REaW1lbnNpb24gKiBncmlkWERpbWVuc2lvbiArIGJvcmRlcldpZHRoO1xuICAgICAgICBjb25zdCBib3JkZXJFbmRZID0geVJlY3REaW1lbnNpb24gKiBncmlkWURpbWVuc2lvbiArIGJvcmRlcldpZHRoO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiI0Y4QjIyOVwiO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGJvcmRlclN0YXJ0WCwgYm9yZGVyU3RhcnRZLCBib3JkZXJFbmRYLCBib3JkZXJFbmRZKTtcbiAgICAgICAgY29uc3QgaW1hZ2VTdGFydFggPSBncmlkWE9mZnNldCArIGJvcmRlcldpZHRoO1xuICAgICAgICBjb25zdCBpbWFnZVN0YXJ0WSA9IGdyaWRZT2Zmc2V0ICsgYm9yZGVyV2lkdGg7XG4gICAgICAgIGNvbnN0IGltYWdlRW5kWCA9IHhSZWN0RGltZW5zaW9uICogZ3JpZFhEaW1lbnNpb24gLSBib3JkZXJXaWR0aDtcbiAgICAgICAgY29uc3QgaW1hZ2VFbmRZID0geVJlY3REaW1lbnNpb24gKiBncmlkWURpbWVuc2lvbiAtIGJvcmRlcldpZHRoO1xuICAgICAgICBjb25zdCB3b3JkcyA9XG4gICAgICAgICAgICBbIFwiV0hBVFwiLCBcIkRFQ09SQVRJT05TXCIsIFwiQVJFXCIsIFwiT05cIiwgXCJUSEVcIiwgXCJUUkVFXCIsIFwiP1wiIF07XG4gICAgICAgIGNvbnN0IHRleHRTcGFjZSA9IDIwO1xuICAgICAgICBjb25zdCB0ZXh0U2l6ZSA9IChpbWFnZUVuZFkgLSBpbWFnZVN0YXJ0WSkgLyB3b3Jkcy5sZW5ndGggLSB0ZXh0U3BhY2U7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGBib2xkICR7dGV4dFNpemV9cHggTW91bnRhaW5zIG9mIENocmlzdG1hc2A7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGNvbnN0IHRleHRPZmZzZXRYID0gKGltYWdlU3RhcnRYICsgaW1hZ2VFbmRYKSAvIDIgKyAyICogYm9yZGVyV2lkdGg7XG4gICAgICAgIGNvbnN0IHRleHRPZmZzZXRZID0gaW1hZ2VTdGFydFkgKyAxNTA7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBpbWFnZVN0YXJ0WCwgaW1hZ2VTdGFydFksIGltYWdlRW5kWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VFbmRZKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQod29yZHNbaV0sIHRleHRPZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE9mZnNldFkgKyAoKHRleHRTaXplICsgdGV4dFNwYWNlKSAqIGkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gIGNvbnN0IGdhbWUgPSBHYW1lLmNyZWF0ZShncmlkWERpbWVuc2lvbiwgZ3JpZFlEaW1lbnNpb24sIGludmVudG9yeVNpemUpO1xuXG4gIGNvbnN0IGdhbWVEaXNwbGF5ID0gbmV3IEdhbWVEaXNwbGF5KFxuICAgICAgbmV3IENvb3JkaW5hdGUoZ3JpZFhPZmZzZXQsIGdyaWRZT2Zmc2V0KSxcbiAgICAgIG5ldyBDb29yZGluYXRlKGdyaWRYT2Zmc2V0LCBncmlkWURpbWVuc2lvbiAqIHlSZWN0RGltZW5zaW9uICsgbWFyZ2luICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGggKyBtYXJnaW4pLFxuICAgICAgZ3JpZFhEaW1lbnNpb24gKiB4UmVjdERpbWVuc2lvbiwgeFJlY3REaW1lbnNpb24sIHlSZWN0RGltZW5zaW9uLFxuICAgICAgZHJhd1JlY3RhbmdsZSwgZHJhd0Jhc2VJbWFnZSk7XG5cbiAgZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBjb25zdCBpbnRlcmFjdGlvbkhhbmRsZXIgPVxuICAgICAgbmV3IEludGVyYWN0aW9uSGFuZGxlcihnYW1lLCBnYW1lRGlzcGxheSwgY2xlYXJEaXNwbGF5KTtcblxuICBjb25zdCBldmVudFRvQ29vcmRpbmF0ZSA9IChlOiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQpID0+IHtcbiAgICBjb25zdCB4ID0gKGUgYXMgVG91Y2hFdmVudCkuY2hhbmdlZFRvdWNoZXNcbiAgICAgICAgICAgICAgICAgID8gKGUgYXMgVG91Y2hFdmVudCkuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVhcbiAgICAgICAgICAgICAgICAgIDogKGUgYXMgTW91c2VFdmVudCkucGFnZVg7XG4gICAgY29uc3QgeSA9IChlIGFzIFRvdWNoRXZlbnQpLmNoYW5nZWRUb3VjaGVzXG4gICAgICAgICAgICAgICAgICA/IChlIGFzIFRvdWNoRXZlbnQpLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgICAgICAgICAgICAgICA6IChlIGFzIE1vdXNlRXZlbnQpLnBhZ2VZO1xuICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZSh4LCB5KTtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0ID0gKGY6IChjb29yZDogQ29vcmRpbmF0ZSkgPT4gdm9pZCkgPT4ge1xuICAgIHJldHVybiAoZTogTW91c2VFdmVudHxUb3VjaEV2ZW50KSA9PiBmKGV2ZW50VG9Db29yZGluYXRlKGUpKVxuICB9O1xuXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNvbnZlcnQoaW50ZXJhY3Rpb25IYW5kbGVyLmhhbmRsZVByZXNzKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGNvbnZlcnQoaW50ZXJhY3Rpb25IYW5kbGVyLmhhbmRsZURyYWcpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGNvbnZlcnQoaW50ZXJhY3Rpb25IYW5kbGVyLmhhbmRsZVJlbGVhc2UpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBjb252ZXJ0KGludGVyYWN0aW9uSGFuZGxlci5oYW5kbGVDYW5jZWwpKTtcblxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydChpbnRlcmFjdGlvbkhhbmRsZXIuaGFuZGxlUHJlc3MpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY29udmVydChpbnRlcmFjdGlvbkhhbmRsZXIuaGFuZGxlRHJhZykpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnQoaW50ZXJhY3Rpb25IYW5kbGVyLmhhbmRsZVJlbGVhc2UpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0KGludGVyYWN0aW9uSGFuZGxlci5oYW5kbGVDYW5jZWwpKTtcbn1cbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vY29vcmRpbmF0ZVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IEdhbWVEaXNwbGF5IGZyb20gXCIuL2dhbWVfZGlzcGxheVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xuaW1wb3J0IEdyaWREaXNwbGF5IGZyb20gXCIuL2dyaWRfZGlzcGxheVwiO1xuaW1wb3J0IEludmVudG9yeSwge0l0ZW19IGZyb20gXCIuL2ludmVudG9yeVwiO1xuaW1wb3J0IEludmVudG9yeURpc3BsYXkgZnJvbSBcIi4vaW52ZW50b3J5X2Rpc3BsYXlcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXkgZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvbl9kaXNwbGF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgc2VsZWN0ZWRJdGVtOiBTZWxlY3RlZEl0ZW18dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgZ2FtZTogR2FtZTtcbiAgcHJpdmF0ZSBnYW1lRGlzcGxheTogR2FtZURpc3BsYXk7XG4gIHByaXZhdGUgY2xlYXJEaXNwbGF5OiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIGdhbWVEaXNwbGF5OiBHYW1lRGlzcGxheSwgY2xlYXJEaXNwbGF5OiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmdhbWVEaXNwbGF5ID0gZ2FtZURpc3BsYXk7XG4gICAgdGhpcy5nYW1lRGlzcGxheS5kcmF3KGdhbWUpO1xuICAgIHRoaXMuY2xlYXJEaXNwbGF5ID0gY2xlYXJEaXNwbGF5O1xuICB9XG5cbiAgaGFuZGxlUHJlc3MgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1heWJlSXRlbVdpdGhPZmZzZXQgPVxuICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nZXRJbnZlbnRvcnlEaXNwbGF5KCkuaXRlbUF0V2l0aE9mZnNldChcbiAgICAgICAgICAgICAgICBjb29yZCwgdGhpcy5nYW1lLmdldEludmVudG9yeSgpKTtcbiAgICAgICAgaWYgKG1heWJlSXRlbVdpdGhPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBtYXliZUl0ZW1XaXRoT2Zmc2V0WzBdO1xuICAgICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZ2V0SW52ZW50b3J5RGlzcGxheSgpLnNlbGVjdEl0ZW0oaXRlbSk7XG4gICAgICAgICAgY29uc3QgcGllY2VPZmZzZXQgPSBtYXliZUl0ZW1XaXRoT2Zmc2V0WzFdO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbmV3IFNlbGVjdGVkSXRlbShjb29yZCwgcGllY2VPZmZzZXQsIGl0ZW0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gIGhhbmRsZURyYWcgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5jbGVhckRpc3BsYXkoKTtcbiAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmRyYXcodGhpcy5nYW1lKTtcbiAgICAgICAgICBjb25zdCBwaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5ID1cbiAgICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5jcmVhdGVQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5KFxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0ubmV3UGllY2VDb29yZChjb29yZCksXG4gICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5nZXRJdGVtKCkuZ2V0UGllY2VTcGVjaWZpY2F0aW9uKCkpO1xuICAgICAgICAgIHBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXkuZHJhdygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgcHJpdmF0ZSByZXNldERpc3BsYXkgPVxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nZXRJbnZlbnRvcnlEaXNwbGF5KCkucmVtb3ZlU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZHJhdyh0aGlzLmdhbWUpO1xuICAgICAgfVxuXG4gIGhhbmRsZVJlbGVhc2UgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtLmdldEl0ZW0oKTtcbiAgICAgICAgICBjb25zdCBwaWVjZUNvb3JkID0gdGhpcy5zZWxlY3RlZEl0ZW0ubmV3UGllY2VDb29yZChjb29yZCk7XG4gICAgICAgICAgY29uc3QgZ3JpZENvb3JkID1cbiAgICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nZXRHcmlkRGlzcGxheSgpLnRvR3JpZENvb3JkKHBpZWNlQ29vcmQpO1xuICAgICAgICAgIGlmICh0aGlzLmdhbWUuZ2V0R3JpZCgpLnBpZWNlRml0cyhncmlkQ29vcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0UGllY2VTcGVjaWZpY2F0aW9uKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUgPSB0aGlzLmdhbWUud2l0aFBsYWNlZEl0ZW0oZ3JpZENvb3JkLCBpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNldERpc3BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gIGhhbmRsZUNhbmNlbCA9IChjb29yZDogQ29vcmRpbmF0ZSkgPT4geyB0aGlzLnJlc2V0RGlzcGxheSgpOyB9XG59XG5cbmNsYXNzIFNlbGVjdGVkSXRlbSB7XG4gIHByaXZhdGUgc2VsZWN0aW9uQ29vcmQ6IENvb3JkaW5hdGU7XG4gIHByaXZhdGUgcGllY2VDb29yZDogQ29vcmRpbmF0ZTtcbiAgcHJpdmF0ZSBpdGVtOiBJdGVtO1xuXG4gIGNvbnN0cnVjdG9yKHNlbGVjdGlvbkNvb3JkOiBDb29yZGluYXRlLCBwaWVjZUNvb3JkOiBDb29yZGluYXRlLCBpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25Db29yZCA9IHNlbGVjdGlvbkNvb3JkO1xuICAgIHRoaXMucGllY2VDb29yZCA9IHBpZWNlQ29vcmQ7XG4gICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbkNvb3JkID0gKCkgPT4gdGhpcy5zZWxlY3Rpb25Db29yZDtcbiAgZ2V0UGllY2VDb29yZCA9ICgpID0+IHRoaXMucGllY2VDb29yZDtcblxuICBuZXdQaWVjZUNvb3JkID0gKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0aW9uT2Zmc2V0ID0gY29vcmQuc3VidHJhY3QodGhpcy5zZWxlY3Rpb25Db29yZClcbiAgICByZXR1cm4gdGhpcy5waWVjZUNvb3JkLmFkZChzZWxlY3Rpb25PZmZzZXQpLmFkZChzZWxlY3Rpb25PZmZzZXQpLmFkZChzZWxlY3Rpb25PZmZzZXQpO1xuICB9IFxuXG4gIGdldEl0ZW0gPSAoKSA9PiB0aGlzLml0ZW07XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZlbnRvcnkge1xuICBwcml2YXRlIHNpemU6IG51bWJlcjtcbiAgcHJpdmF0ZSBpdGVtczogQXJyYXk8SXRlbXx1bmRlZmluZWQ+O1xuXG4gIHN0YXRpYyB3aXRoUGllY2VTcGVjaWZpY2F0aW9ucyhtZW1iZXJzOiBQaWVjZVNwZWNpZmljYXRpb25bXSkge1xuICAgIHJldHVybiBuZXcgSW52ZW50b3J5KG1lbWJlcnMubWFwKG1lbWJlciA9PiBuZXcgSXRlbShtZW1iZXIpKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGl0ZW1zOiBBcnJheTxJdGVtfHVuZGVmaW5lZD4pIHsgdGhpcy5pdGVtcyA9IGl0ZW1zOyB9XG5cbiAgZ2V0SXRlbXMgPSAoKSA9PiB7IHJldHVybiB0aGlzLml0ZW1zOyB9XG5cbiAgd2l0aG91dEl0ZW0gPVxuICAgICAgKGl0ZW06IEl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSB0aGlzLml0ZW1zLm1hcChpID0+IGkgPT09IGl0ZW0gPyB1bmRlZmluZWQgOiBpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnZlbnRvcnkobmV3SXRlbXMpO1xuICAgICAgfVxuXG4gIGlzRW1wdHkgPVxuICAgICAgKCkgPT4geyByZXR1cm4gdGhpcy5pdGVtcy5ldmVyeShtYXliZUl0ZW0gPT4gbWF5YmVJdGVtID09PSB1bmRlZmluZWQpOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBJdGVtIHtcbiAgcHJpdmF0ZSBwaWVjZVNwZWNpZmljYXRpb246IFBpZWNlU3BlY2lmaWNhdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwaWVjZVNwZWNpZmljYXRpb246IFBpZWNlU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMucGllY2VTcGVjaWZpY2F0aW9uID0gcGllY2VTcGVjaWZpY2F0aW9uO1xuICB9XG5cbiAgZ2V0UGllY2VTcGVjaWZpY2F0aW9uID0gKCkgPT4geyByZXR1cm4gdGhpcy5waWVjZVNwZWNpZmljYXRpb247IH1cbn1cbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vY29vcmRpbmF0ZVwiO1xuaW1wb3J0IEludmVudG9yeSwge0l0ZW19IGZyb20gXCIuL2ludmVudG9yeVwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbiBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uXCI7XG5pbXBvcnQgUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheSBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uX2Rpc3BsYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5RGlzcGxheSB7XG4gIHByaXZhdGUgb2Zmc2V0OiBDb29yZGluYXRlO1xuICBwcml2YXRlIHhSZWN0RGltZW5zaW9uOiBudW1iZXI7XG4gIHByaXZhdGUgeVJlY3REaW1lbnNpb246IG51bWJlcjtcbiAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuICBwcml2YXRlIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHZvaWQ7XG4gIHByaXZhdGUgc2VsZWN0ZWRJdGVtOiBJdGVtfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihvZmZzZXQ6IENvb3JkaW5hdGUsIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsXG4gICAgICAgICAgICAgIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb246IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMueFJlY3REaW1lbnNpb24gPSB4UmVjdERpbWVuc2lvbjtcbiAgICB0aGlzLnlSZWN0RGltZW5zaW9uID0geVJlY3REaW1lbnNpb247XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZHJhd1JlY3RhbmdsZSA9IGRyYXdSZWN0YW5nbGU7XG4gIH1cblxuICBjcmVhdGVQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5cyA9XG4gICAgICAoaW52ZW50b3J5OiBJbnZlbnRvcnkpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpbnZlbnRvcnkuZ2V0SXRlbXMoKTtcbiAgICAgICAgY29uc3QgZGlzcGxheXM6IEFycmF5PFBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXl8dW5kZWZpbmVkPiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWF5YmVJdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgaWYgKG1heWJlSXRlbSAhPT0gdW5kZWZpbmVkICYmIG1heWJlSXRlbSAhPT0gdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHhNYXJnaW4gPSB0aGlzLnhSZWN0RGltZW5zaW9uIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IHlNYXJnaW4gPSB0aGlzLnlSZWN0RGltZW5zaW9uIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9IChpICogdGhpcy53aWR0aCAvIGl0ZW1zLmxlbmd0aCkgKyB4TWFyZ2luO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRZID0geU1hcmdpbjtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0Q29vcmQgPSBuZXcgQ29vcmRpbmF0ZShzdGFydFgsIHN0YXJ0WSk7XG4gICAgICAgICAgICBjb25zdCBwaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5ID0gbmV3IFBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXkoXG4gICAgICAgICAgICAgICAgbWF5YmVJdGVtLmdldFBpZWNlU3BlY2lmaWNhdGlvbigpLCBzdGFydENvb3JkLmFkZCh0aGlzLm9mZnNldCksXG4gICAgICAgICAgICAgICAgdGhpcy54UmVjdERpbWVuc2lvbiwgdGhpcy55UmVjdERpbWVuc2lvbiwgdGhpcy5kcmF3UmVjdGFuZ2xlKTtcbiAgICAgICAgICAgIGRpc3BsYXlzW2ldID0gcGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc3BsYXlzO1xuICAgICAgfVxuXG4gIGRyYXcgPVxuICAgICAgKGludmVudG9yeTogSW52ZW50b3J5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlzID0gdGhpcy5jcmVhdGVQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5cyhpbnZlbnRvcnkpXG4gICAgICAgIGRpc3BsYXlzLmZvckVhY2gobWF5YmVEaXNwbGF5ID0+IHtcbiAgICAgICAgICBpZiAobWF5YmVEaXNwbGF5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1heWJlRGlzcGxheS5kcmF3KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gIGl0ZW1BdFdpdGhPZmZzZXQ6IChjb29yZDogQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeTogSW52ZW50b3J5KSA9PiBbSXRlbSwgQ29vcmRpbmF0ZV0gfCB1bmRlZmluZWQgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlLCBpbnZlbnRvcnk6IEludmVudG9yeSkgPT4ge1xuICAgICAgICBjb25zdCBkaXNwbGF5cyA9IHRoaXMuY3JlYXRlUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheXMoaW52ZW50b3J5KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWF5YmVEaXNwbGF5ID0gZGlzcGxheXNbaV07XG4gICAgICAgICAgaWYgKG1heWJlRGlzcGxheSAhPT0gdW5kZWZpbmVkICYmIG1heWJlRGlzcGxheS5jb250YWlucyhjb29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbIGludmVudG9yeS5nZXRJdGVtcygpW2ldLCBkaXNwbGF5c1tpXS5nZXRPZmZzZXQoKSBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gIHNlbGVjdEl0ZW0gPSAoaXRlbTogSXRlbSkgPT4geyB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cblxuICByZW1vdmVTZWxlY3Rpb24gPSAoKSA9PiB7IHRoaXMuc2VsZWN0ZWRJdGVtID0gdW5kZWZpbmVkOyB9XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllY2VTcGVjaWZpY2F0aW9uIHtcbiAgcHJpdmF0ZSBjb2xvcjogQ29sb3I7XG4gIHByaXZhdGUgcmVsYXRpdmVDb29yZHM6IENvb3JkaW5hdGVbXVxuICBjb25zdHJ1Y3Rvcihjb2xvcjogQ29sb3IsIHJlbGF0aXZlQ29vcmRzOiBDb29yZGluYXRlW10pIHtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5yZWxhdGl2ZUNvb3JkcyA9IHJlbGF0aXZlQ29vcmRzO1xuICB9XG5cbiAgZ2V0Q29sb3IgPSAoKSA9PiB7IHJldHVybiB0aGlzLmNvbG9yOyB9XG5cbiAgZ2V0UmVsYXRpdmVDb29yZHMgPSAoKSA9PiB7IHJldHVybiB0aGlzLnJlbGF0aXZlQ29vcmRzOyB9XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5IHtcbiAgcHJpdmF0ZSBwaWVjZVNwZWNpZmljYXRpb246IFBpZWNlU3BlY2lmaWNhdGlvbjtcbiAgcHJpdmF0ZSBvZmZzZXQ6IENvb3JkaW5hdGU7XG4gIHByaXZhdGUgeFJlY3REaW1lbnNpb246IG51bWJlcjtcbiAgcHJpdmF0ZSB5UmVjdERpbWVuc2lvbjogbnVtYmVyO1xuICBwcml2YXRlIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKHBpZWNlU3BlY2lmaWNhdGlvbjogUGllY2VTcGVjaWZpY2F0aW9uLCBvZmZzZXQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsIHlSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb246IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHRoaXMueFJlY3REaW1lbnNpb24gPSB4UmVjdERpbWVuc2lvbjtcbiAgICB0aGlzLnlSZWN0RGltZW5zaW9uID0geVJlY3REaW1lbnNpb247XG4gICAgdGhpcy5kcmF3UmVjdGFuZ2xlID0gZHJhd1JlY3RhbmdsZTtcbiAgICB0aGlzLnBpZWNlU3BlY2lmaWNhdGlvbiA9IHBpZWNlU3BlY2lmaWNhdGlvbjtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgfVxuXG4gIGRyYXcgPVxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnBpZWNlU3BlY2lmaWNhdGlvbi5nZXRSZWxhdGl2ZUNvb3JkcygpLmZvckVhY2gocmVsYXRpdmVDb29yZCA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRYID0gcmVsYXRpdmVDb29yZC5nZXRYKCkgKiB0aGlzLnhSZWN0RGltZW5zaW9uO1xuICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IHJlbGF0aXZlQ29vcmQuZ2V0WSgpICogdGhpcy55UmVjdERpbWVuc2lvbjtcbiAgICAgICAgICBjb25zdCBzdGFydENvb3JkID0gbmV3IENvb3JkaW5hdGUoc3RhcnRYLCBzdGFydFkpO1xuICAgICAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZSh0aGlzLnBpZWNlU3BlY2lmaWNhdGlvbi5nZXRDb2xvcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkLmFkZCh0aGlzLm9mZnNldCksIHRoaXMueFJlY3REaW1lbnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueVJlY3REaW1lbnNpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICBjb250YWlucyA9XG4gICAgICAoY29vcmQ6IENvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGllY2VTcGVjaWZpY2F0aW9uLmdldFJlbGF0aXZlQ29vcmRzKCkuc29tZShcbiAgICAgICAgICAgIHJlbGF0aXZlQ29vcmQgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB4TWFyZ2luID0gMjA7XG4gICAgICAgICAgICAgIGNvbnN0IHlNYXJnaW4gPSAyMDtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhcnRYID0gcmVsYXRpdmVDb29yZC5nZXRYKCkgKiB0aGlzLnhSZWN0RGltZW5zaW9uO1xuICAgICAgICAgICAgICBjb25zdCBzdGFydFkgPSByZWxhdGl2ZUNvb3JkLmdldFkoKSAqIHRoaXMueVJlY3REaW1lbnNpb247XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0Q29vcmRXaXRoT2Zmc2V0ID1cbiAgICAgICAgICAgICAgICAgIChuZXcgQ29vcmRpbmF0ZShzdGFydFgsIHN0YXJ0WSkpLmFkZCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICAgIGNvbnN0IGluWCA9XG4gICAgICAgICAgICAgICAgICBjb29yZC5nZXRYKCkgPj0gc3RhcnRDb29yZFdpdGhPZmZzZXQuZ2V0WCgpIC0geE1hcmdpbiAmJlxuICAgICAgICAgICAgICAgICAgY29vcmQuZ2V0WCgpIDwgc3RhcnRDb29yZFdpdGhPZmZzZXQuZ2V0WCgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnhSZWN0RGltZW5zaW9uICsgeE1hcmdpbjtcbiAgICAgICAgICAgICAgY29uc3QgaW5ZID1cbiAgICAgICAgICAgICAgICAgIGNvb3JkLmdldFkoKSA+PSBzdGFydENvb3JkV2l0aE9mZnNldC5nZXRZKCkgLSB5TWFyZ2luICYmXG4gICAgICAgICAgICAgICAgICBjb29yZC5nZXRZKCkgPCBzdGFydENvb3JkV2l0aE9mZnNldC5nZXRZKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueVJlY3REaW1lbnNpb24gKyB5TWFyZ2luO1xuICAgICAgICAgICAgICByZXR1cm4gaW5YICYmIGluWTtcbiAgICAgICAgICAgIH0pXG4gICAgICB9XG5cbiAgZ2V0UGllY2VTcGVjaWZpY2F0aW9uID0gKCkgPT4geyByZXR1cm4gdGhpcy5waWVjZVNwZWNpZmljYXRpb247IH1cblxuICBnZXRPZmZzZXQgPSAoKSA9PiB7IHJldHVybiB0aGlzLm9mZnNldDsgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==