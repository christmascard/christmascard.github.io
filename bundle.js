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
    function preventBehavior(e) { e.preventDefault(); }
    ;
    document.addEventListener("touchmove", preventBehavior, { passive: false });
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var image = document.getElementById("source");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.getElementById("card").outerHTML = "";
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
            return _this.pieceCoord.add(selectionOffset).add(selectionOffset);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2VydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb3JkaW5hdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfZGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZF9kaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3Rpb25faGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW52ZW50b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnZlbnRvcnlfZGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2Vfc3BlY2lmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2Vfc3BlY2lmaWNhdGlvbl9kaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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ckIsQ0FBQztZQUV6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckIsQ0FBQztZQUN6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckIsQ0FBQztZQUN6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckIsQ0FBQztZQUN6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FB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Y0FBYyxHQUFHLE9BQU8sQ0FBQztnQkFDckQsSUFBTSxHQUFHLEdBQ0wsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLG9CQUFvQixDQUFDLElBQUksRUFBRSxHQUFHLE9BQU87b0JBQ3JELEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7d0JBQ3ZCLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO2dCQUNyRCxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUM7WUFDcEIsQ0FBQyxDQUFDO1FBQ1IsQ0FBQztRQUVMLDBCQUFxQixHQUFHLGNBQVEsT0FBTyxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRWpFLGNBQVMsR0FBRyxjQUFRLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUEzQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBdUNILGdDQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2VydChjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U/OiBzdHJpbmcpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yIHtcbiAgcHJpdmF0ZSBoZXg6IHN0cmluZztcbiAgY29uc3RydWN0b3IoaGV4OiBzdHJpbmcpIHsgdGhpcy5oZXggPSBoZXg7IH1cblxuICBnZXRIZXggPSAoKSA9PiB7IHJldHVybiB0aGlzLmhleDsgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29vcmRpbmF0ZSB7XG4gIHByaXZhdGUgeDogbnVtYmVyO1xuICBwcml2YXRlIHk6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGFkZCA9XG4gICAgICAob2Zmc2V0OiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZSh0aGlzLnggKyBvZmZzZXQueCwgdGhpcy55ICsgb2Zmc2V0LnkpXG4gICAgICB9XG5cbiAgc3VidHJhY3QgPVxuICAgICAgKG90aGVyOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZSh0aGlzLnggLSBvdGhlci54LCB0aGlzLnkgLSBvdGhlci55KTtcbiAgICAgIH1cblxuICBnZXRYID0gKCkgPT4geyByZXR1cm4gdGhpcy54OyB9XG5cbiAgZ2V0WSA9ICgpID0+IHsgcmV0dXJuIHRoaXMueTsgfVxufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9jb29yZGluYXRlXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCI7XG5pbXBvcnQgSW52ZW50b3J5LCB7SXRlbX0gZnJvbSBcIi4vaW52ZW50b3J5XCI7XG5pbXBvcnQgUGllY2VTcGVjaWZpY2F0aW9uIGZyb20gXCIuL3BpZWNlX3NwZWNpZmljYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIHByaXZhdGUgZ3JpZDogR3JpZDtcbiAgcHJpdmF0ZSBpbnZlbnRvcnk6IEludmVudG9yeTtcbiAgcHJpdmF0ZSBpbnZlbnRvcnlTaXplOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGllY2VTcGVjaWZpY2F0aW9ucyA9XG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG9yVHlwZTEgPSBcInJlZFwiO1xuICAgICAgICBjb25zdCBjb2xvclR5cGUyID0gXCJncmVlblwiO1xuICAgICAgICBjb25zdCBjb2xvclR5cGUzID0gXCJibHVlXCI7XG4gICAgICAgIGNvbnN0IGNvbG9yVHlwZTQgPSBcImluZGlnb1wiO1xuICAgICAgICBjb25zdCBjb2xvclR5cGU1ID0gXCJ2aW9sZXRcIjtcbiAgICAgICAgY29uc3QgY29sb3JUeXBlNiA9IFwib3JhbmdlXCI7XG4gICAgICAgIGNvbnN0IGNvbG9yVHlwZTcgPSBcIndoaXRlXCI7XG4gICAgICAgIGNvbnN0IGNvbG9yVHlwZTggPSBcInBpbmtcIjtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24oXG4gICAgICAgICAgICAgIG5ldyBDb2xvcihjb2xvclR5cGUxKSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLCBuZXcgQ29vcmRpbmF0ZSgwLCAxKSwgbmV3IENvb3JkaW5hdGUoMSwgMClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihcbiAgICAgICAgICAgICAgbmV3IENvbG9yKGNvbG9yVHlwZTEpLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksIG5ldyBDb29yZGluYXRlKDAsIDEpLCBuZXcgQ29vcmRpbmF0ZSgxLCAxKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKFxuICAgICAgICAgICAgICBuZXcgQ29sb3IoY29sb3JUeXBlMSksXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSwgbmV3IENvb3JkaW5hdGUoMSwgMCksIG5ldyBDb29yZGluYXRlKDEsIDEpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24oXG4gICAgICAgICAgICAgIG5ldyBDb2xvcihjb2xvclR5cGUxKSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLCBuZXcgQ29vcmRpbmF0ZSgxLCAwKSwgbmV3IENvb3JkaW5hdGUoMSwgMSlcbiAgICAgICAgICAgICAgXSksXG5cbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGUyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSwgbmV3IENvb3JkaW5hdGUoMSwgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlMyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbIG5ldyBDb29yZGluYXRlKDAsIDApIF0pLFxuXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG5cbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU2KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU2KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU2KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU2KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcblxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcblxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICBdO1xuICAgICAgfVxuXG4gIHN0YXRpYyBjcmVhdGUgPVxuICAgICAgKGdyaWRYRGltZW5zaW9uOiBudW1iZXIsIGdyaWRZRGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgaW52ZW50b3J5U2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBHcmlkLndpdGhEaW1lbnNpb25zKGdyaWRYRGltZW5zaW9uLCBncmlkWURpbWVuc2lvbik7XG4gICAgICAgIGNvbnN0IGludmVudG9yeSA9IEdhbWUuZ2VuZXJhdGVJbnZlbnRvcnkoZ3JpZCwgaW52ZW50b3J5U2l6ZSk7XG4gICAgICAgIHJldHVybiBuZXcgR2FtZShncmlkLCBpbnZlbnRvcnksIGludmVudG9yeVNpemUpO1xuICAgICAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlSW52ZW50b3J5ID1cbiAgICAgIChncmlkOiBHcmlkLCBpbnZlbnRvcnlTaXplOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY2hvc2VuUGllY2VTcGVjaWZpY2F0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGludmVudG9yeVNpemU7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID1cbiAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogR2FtZS5waWVjZVNwZWNpZmljYXRpb25zKCkubGVuZ3RoKTtcbiAgICAgICAgICBjaG9zZW5QaWVjZVNwZWNpZmljYXRpb25zLnB1c2goXG4gICAgICAgICAgICAgIEdhbWUucGllY2VTcGVjaWZpY2F0aW9ucygpW3JhbmRvbUluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEludmVudG9yeS53aXRoUGllY2VTcGVjaWZpY2F0aW9ucyhjaG9zZW5QaWVjZVNwZWNpZmljYXRpb25zKTtcbiAgICAgIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGdyaWQ6IEdyaWQsIGludmVudG9yeTogSW52ZW50b3J5LCBpbnZlbnRvcnlTaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgIHRoaXMuaW52ZW50b3J5ID0gaW52ZW50b3J5O1xuICAgIHRoaXMuaW52ZW50b3J5U2l6ZSA9IGludmVudG9yeVNpemU7XG4gIH1cblxuICB3aXRoUGxhY2VkSXRlbSA9XG4gICAgICAoY29vcmRpbmF0ZTogQ29vcmRpbmF0ZSwgaXRlbTogSXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdHcmlkID1cbiAgICAgICAgICAgIHRoaXMuZ3JpZC53aXRoUGllY2UoY29vcmRpbmF0ZSwgaXRlbS5nZXRQaWVjZVNwZWNpZmljYXRpb24oKSk7XG4gICAgICAgIGNvbnN0IGludmVudG9yeVdpdGhvdXRJdGVtID0gdGhpcy5pbnZlbnRvcnkud2l0aG91dEl0ZW0oaXRlbSk7XG4gICAgICAgIGNvbnN0IG5ld0ludmVudG9yeSA9XG4gICAgICAgICAgICBpbnZlbnRvcnlXaXRob3V0SXRlbS5pc0VtcHR5KClcbiAgICAgICAgICAgICAgICA/IEdhbWUuZ2VuZXJhdGVJbnZlbnRvcnkobmV3R3JpZCwgdGhpcy5pbnZlbnRvcnlTaXplKVxuICAgICAgICAgICAgICAgIDogaW52ZW50b3J5V2l0aG91dEl0ZW07XG5cbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lKG5ld0dyaWQsIG5ld0ludmVudG9yeSwgdGhpcy5pbnZlbnRvcnlTaXplKTtcbiAgICAgIH1cblxuICBnZXRHcmlkID0gKCkgPT4geyByZXR1cm4gdGhpcy5ncmlkOyB9XG5cbiAgZ2V0SW52ZW50b3J5ID0gKCkgPT4geyByZXR1cm4gdGhpcy5pbnZlbnRvcnk7IH1cbn1cbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vY29vcmRpbmF0ZVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IEdyaWREaXNwbGF5IGZyb20gXCIuL2dyaWRfZGlzcGxheVwiO1xuaW1wb3J0IEludmVudG9yeURpc3BsYXkgZnJvbSBcIi4vaW52ZW50b3J5X2Rpc3BsYXlcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXkgZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvbl9kaXNwbGF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVEaXNwbGF5IHtcbiAgcHJpdmF0ZSB4UmVjdERpbWVuc2lvbjogbnVtYmVyO1xuICBwcml2YXRlIHlSZWN0RGltZW5zaW9uOiBudW1iZXI7XG4gIHByaXZhdGUgZHJhd1JlY3RhbmdsZTogKGNvbG9yOiBDb2xvciwgc3RhcnRDb29yZDogQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeFJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb246IG51bWJlcikgPT4gdm9pZDtcblxuICBwcml2YXRlIGRyYXdCYXNlSW1hZ2U6ICgpID0+IHZvaWQ7XG5cbiAgcHJpdmF0ZSBncmlkRGlzcGxheTogR3JpZERpc3BsYXk7XG4gIHByaXZhdGUgaW52ZW50b3J5RGlzcGxheTogSW52ZW50b3J5RGlzcGxheTtcblxuICBjb25zdHJ1Y3RvcihncmlkT2Zmc2V0OiBDb29yZGluYXRlLCBpbnZlbnRvcnlPZmZzZXQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgIGludmVudG9yeVdpZHRoOiBudW1iZXIsIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb246IG51bWJlcikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgZHJhd0Jhc2VJbWFnZTogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMueFJlY3REaW1lbnNpb24gPSB4UmVjdERpbWVuc2lvbjtcbiAgICB0aGlzLnlSZWN0RGltZW5zaW9uID0geVJlY3REaW1lbnNpb247XG4gICAgdGhpcy5kcmF3UmVjdGFuZ2xlID0gZHJhd1JlY3RhbmdsZTtcbiAgICB0aGlzLmRyYXdCYXNlSW1hZ2UgPSBkcmF3QmFzZUltYWdlO1xuICAgIHRoaXMuZ3JpZERpc3BsYXkgPSBuZXcgR3JpZERpc3BsYXkoZ3JpZE9mZnNldCwgdGhpcy54UmVjdERpbWVuc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueVJlY3REaW1lbnNpb24sIHRoaXMuZHJhd1JlY3RhbmdsZSk7XG5cbiAgICB0aGlzLmludmVudG9yeURpc3BsYXkgPSBuZXcgSW52ZW50b3J5RGlzcGxheShcbiAgICAgICAgaW52ZW50b3J5T2Zmc2V0LCB0aGlzLnhSZWN0RGltZW5zaW9uLCB0aGlzLnlSZWN0RGltZW5zaW9uLFxuICAgICAgICBpbnZlbnRvcnlXaWR0aCwgdGhpcy5kcmF3UmVjdGFuZ2xlKTtcbiAgfVxuXG4gIGRyYXcgPVxuICAgICAgKGdhbWU6IEdhbWUpID0+IHtcbiAgICAgICAgdGhpcy5kcmF3QmFzZUltYWdlKCk7XG4gICAgICAgIGNvbnN0IGdyaWRYRGltZW5zaW9uID0gdGhpcy5ncmlkRGlzcGxheS5nZXRYRGltZW5zaW9uKGdhbWUuZ2V0R3JpZCgpKTtcbiAgICAgICAgY29uc3QgZ3JpZFlEaW1lbnNpb24gPSB0aGlzLmdyaWREaXNwbGF5LmdldFlEaW1lbnNpb24oZ2FtZS5nZXRHcmlkKCkpO1xuICAgICAgICB0aGlzLmdyaWREaXNwbGF5LmRyYXcoZ2FtZS5nZXRHcmlkKCkpO1xuICAgICAgICB0aGlzLmludmVudG9yeURpc3BsYXkuZHJhdyhnYW1lLmdldEludmVudG9yeSgpKTtcbiAgICAgIH1cblxuICBnZXRJbnZlbnRvcnlEaXNwbGF5ID0gKCkgPT4geyByZXR1cm4gdGhpcy5pbnZlbnRvcnlEaXNwbGF5OyB9XG5cbiAgZ2V0R3JpZERpc3BsYXkgPSAoKSA9PiB7IHJldHVybiB0aGlzLmdyaWREaXNwbGF5OyB9XG5cbiAgY3JlYXRlUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheSA9XG4gICAgICAob2Zmc2V0OiBDb29yZGluYXRlLCBwaWVjZVNwZWNpZmljYXRpb246IFBpZWNlU3BlY2lmaWNhdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXkoXG4gICAgICAgICAgICBwaWVjZVNwZWNpZmljYXRpb24sIG9mZnNldCwgdGhpcy54UmVjdERpbWVuc2lvbixcbiAgICAgICAgICAgIHRoaXMueVJlY3REaW1lbnNpb24sIHRoaXMuZHJhd1JlY3RhbmdsZSk7XG4gICAgICB9XG59XG4iLCJpbXBvcnQgYXNzZXJ0IGZyb20gXCIuL2Fzc2VydFwiO1xuaW1wb3J0IENvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9jb29yZGluYXRlXCI7XG5pbXBvcnQgUGllY2VTcGVjaWZpY2F0aW9uIGZyb20gXCIuL3BpZWNlX3NwZWNpZmljYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gIHByaXZhdGUgY29sb3JzOiBNYXliZUNvbG9yW11bXTtcblxuICBzdGF0aWMgd2l0aERpbWVuc2lvbnMoeERpbWVuc2lvbjogbnVtYmVyLCB5RGltZW5zaW9uOiBudW1iZXIpIHtcbiAgICBhc3NlcnQoeERpbWVuc2lvbiA+IDAgJiYgeURpbWVuc2lvbiA+IDApO1xuICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB4RGltZW5zaW9uOyBpKyspIHtcbiAgICAgIGNvbG9yc1tpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHlEaW1lbnNpb247IGorKykge1xuICAgICAgICBjb2xvcnNbaV1bal0gPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgR3JpZChjb2xvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb2xvcnM6IE1heWJlQ29sb3JbXVtdKSB7IHRoaXMuY29sb3JzID0gY29sb3JzOyB9XG5cbiAgZ2V0Q29sb3JzID0gKCkgPT4geyByZXR1cm4gdGhpcy5jb2xvcnM7IH1cblxuICBwcml2YXRlIGNvbG9yQXQgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7IHJldHVybiB0aGlzLmNvbG9yc1tjb29yZC5nZXRYKCldW2Nvb3JkLmdldFkoKV07IH1cblxuICBpbkJvdW5kcyA9XG4gICAgICAoY29vcmQ6IENvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvb3JkLmdldFgoKSA+PSAwICYmIGNvb3JkLmdldFgoKSA8IHRoaXMuY29sb3JzLmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgY29vcmQuZ2V0WSgpID49IDAgJiYgY29vcmQuZ2V0WSgpIDwgdGhpcy5jb2xvcnNbMF0ubGVuZ3RoO1xuICAgICAgfVxuXG4gIHBpZWNlRml0cyA9XG4gICAgICAoY29vcmQ6IENvb3JkaW5hdGUsIHBpZWNlU3BlY2lmaWNhdGlvbjogUGllY2VTcGVjaWZpY2F0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHBpZWNlUmVsYXRpdmVDb29yZHMgPSBwaWVjZVNwZWNpZmljYXRpb24uZ2V0UmVsYXRpdmVDb29yZHMoKTtcbiAgICAgICAgcmV0dXJuIHBpZWNlUmVsYXRpdmVDb29yZHMuZXZlcnkocGllY2VSZWxhdGl2ZUNvb3JkID0+IHtcbiAgICAgICAgICBjb25zdCBhYnNvbHV0ZUNvb3JkID0gY29vcmQuYWRkKHBpZWNlUmVsYXRpdmVDb29yZCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaW5Cb3VuZHMoYWJzb2x1dGVDb29yZCkgJiZcbiAgICAgICAgICAgICAgICAgdGhpcy5jb2xvckF0KGFic29sdXRlQ29vcmQpID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gIHByaXZhdGUgY2xvbmVDb2xvcnMgPVxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdDb2xvcnM6IE1heWJlQ29sb3JbXVtdID0gW107XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLmNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG5ld0NvbG9yc1tpXSA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLmNvbG9yc1swXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbmV3Q29sb3JzW2ldW2pdID0gdGhpcy5jb2xvcnNbaV1bal07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdDb2xvcnM7XG4gICAgICB9XG5cbiAgd2l0aFBpZWNlID1cbiAgICAgIChjb29yZDogQ29vcmRpbmF0ZSwgcGllY2VTcGVjaWZpY2F0aW9uOiBQaWVjZVNwZWNpZmljYXRpb24pID0+IHtcbiAgICAgICAgYXNzZXJ0KHRoaXMucGllY2VGaXRzKGNvb3JkLCBwaWVjZVNwZWNpZmljYXRpb24pKTtcbiAgICAgICAgY29uc3QgbmV3Q29sb3JzID0gdGhpcy5jbG9uZUNvbG9ycygpXG4gICAgICAgIHBpZWNlU3BlY2lmaWNhdGlvbi5nZXRSZWxhdGl2ZUNvb3JkcygpLmZvckVhY2gocmVsYXRpdmVDb29yZCA9PiB7XG4gICAgICAgICAgY29uc3QgYWJzb2x1dGVDb29yZCA9IGNvb3JkLmFkZChyZWxhdGl2ZUNvb3JkKTtcbiAgICAgICAgICBuZXdDb2xvcnNbYWJzb2x1dGVDb29yZC5nZXRYKCldW2Fic29sdXRlQ29vcmQuZ2V0WSgpXSA9XG4gICAgICAgICAgICAgIHBpZWNlU3BlY2lmaWNhdGlvbi5nZXRDb2xvcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkKG5ld0NvbG9ycyk7XG4gICAgICB9XG5cbiAgZ2V0WERpbWVuc2lvbiA9ICgpID0+IHsgcmV0dXJuIHRoaXMuY29sb3JzLmxlbmd0aDsgfVxuXG4gIGdldFlEaW1lbnNpb24gPSAoKSA9PiB7IHJldHVybiB0aGlzLmNvbG9yc1swXS5sZW5ndGg7IH1cbn1cblxuZXhwb3J0IHR5cGUgTWF5YmVDb2xvciA9IENvbG9yfHVuZGVmaW5lZFxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9jb29yZGluYXRlXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWREaXNwbGF5IHtcbiAgcHJpdmF0ZSBvZmZzZXQ6IENvb3JkaW5hdGU7XG4gIHByaXZhdGUgeFJlY3REaW1lbnNpb246IG51bWJlcjtcbiAgcHJpdmF0ZSB5UmVjdERpbWVuc2lvbjogbnVtYmVyO1xuICBwcml2YXRlIGVtcHR5Q29sb3IgPSBuZXcgQ29sb3IoXCIjQkIyNTI4XCIpO1xuICBwcml2YXRlIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKG9mZnNldDogQ29vcmRpbmF0ZSwgeFJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICAgICAgICAgZHJhd1JlY3RhbmdsZTogKGNvbG9yOiBDb2xvciwgc3RhcnRDb29yZDogQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy54UmVjdERpbWVuc2lvbiA9IHhSZWN0RGltZW5zaW9uO1xuICAgIHRoaXMueVJlY3REaW1lbnNpb24gPSB5UmVjdERpbWVuc2lvbjtcbiAgICB0aGlzLmRyYXdSZWN0YW5nbGUgPSBkcmF3UmVjdGFuZ2xlO1xuICB9XG5cbiAgZHJhdyA9XG4gICAgICAoZ3JpZDogR3JpZCkgPT4ge1xuICAgICAgICBjb25zdCBjb2xvcnMgPSBncmlkLmdldENvbG9ycygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sb3JzWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9yc1tpXVtqXTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9IGkgKiB0aGlzLnhSZWN0RGltZW5zaW9uO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRZID0gaiAqIHRoaXMueVJlY3REaW1lbnNpb247XG4gICAgICAgICAgICBjb25zdCBzdGFydENvb3JkV2l0aE9mZnNldCA9XG4gICAgICAgICAgICAgICAgKG5ldyBDb29yZGluYXRlKHN0YXJ0WCwgc3RhcnRZKSkuYWRkKHRoaXMub2Zmc2V0KTtcbiAgICAgICAgICAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuZHJhd1JlY3RhbmdsZShjb2xvciwgc3RhcnRDb29yZFdpdGhPZmZzZXQsXG4gICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIHRoaXMueFJlY3REaW1lbnNpb24sIHRoaXMueVJlY3REaW1lbnNpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKHRoaXMuZW1wdHlDb2xvciwgc3RhcnRDb29yZFdpdGhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnhSZWN0RGltZW5zaW9uLCB0aGlzLnlSZWN0RGltZW5zaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICB0b0dyaWRDb29yZCA9XG4gICAgICAoY29vcmQ6IENvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVDb29yZCA9IGNvb3JkLnN1YnRyYWN0KHRoaXMub2Zmc2V0KTtcbiAgICAgICAgY29uc3QgZ3JpZFggPSBNYXRoLnJvdW5kKHJlbGF0aXZlQ29vcmQuZ2V0WCgpIC8gdGhpcy54UmVjdERpbWVuc2lvbik7XG4gICAgICAgIGNvbnN0IGdyaWRZID0gTWF0aC5yb3VuZChyZWxhdGl2ZUNvb3JkLmdldFkoKSAvIHRoaXMueVJlY3REaW1lbnNpb24pO1xuICAgICAgICByZXR1cm4gbmV3IENvb3JkaW5hdGUoZ3JpZFgsIGdyaWRZKTtcbiAgICAgIH1cblxuICBnZXRYRGltZW5zaW9uID1cbiAgICAgIChncmlkOiBHcmlkKSA9PiB7IHJldHVybiB0aGlzLnhSZWN0RGltZW5zaW9uICogZ3JpZC5nZXRYRGltZW5zaW9uKCk7IH1cblxuICBnZXRZRGltZW5zaW9uID1cbiAgICAgIChncmlkOiBHcmlkKSA9PiB7IHJldHVybiB0aGlzLnhSZWN0RGltZW5zaW9uICogZ3JpZC5nZXRYRGltZW5zaW9uKCk7IH1cbn1cbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vY29vcmRpbmF0ZVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IEdhbWVEaXNwbGF5IGZyb20gXCIuL2dhbWVfZGlzcGxheVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xuaW1wb3J0IEludGVyYWN0aW9uSGFuZGxlciBmcm9tIFwiLi9pbnRlcmFjdGlvbl9oYW5kbGVyXCI7XG5pbXBvcnQgSW52ZW50b3J5IGZyb20gXCIuL2ludmVudG9yeVwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbiBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uXCI7XG5cbmNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGZ1bmN0aW9uIHByZXZlbnRCZWhhdmlvcihlOiBUb3VjaEV2ZW50KSB7IGUucHJldmVudERlZmF1bHQoKTsgfTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHByZXZlbnRCZWhhdmlvciwge3Bhc3NpdmUgOiBmYWxzZX0pO1xuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvdXJjZVwiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuXG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZFwiKS5vdXRlckhUTUwgPSBcIlwiO1xuICBjb25zb2xlLmxvZyhcInN0YXJ0aW5nIGdhbWVcIik7XG4gIGNvbnN0IGJvcmRlcldpZHRoID0gMTI7XG4gIGNvbnN0IGRyYXdSZWN0YW5nbGUgPVxuICAgICAgKGNvbG9yOiBDb2xvciwgc3RhcnRDb29yZDogQ29vcmRpbmF0ZSwgeFJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjRjhCMjI5XCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3Qoc3RhcnRDb29yZC5nZXRYKCksIHN0YXJ0Q29vcmQuZ2V0WSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uICsgYm9yZGVyV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb24gKyBib3JkZXJXaWR0aCk7XG5cbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvci5nZXRIZXgoKTtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgICAgICAgIHN0YXJ0Q29vcmQuZ2V0WCgpICsgYm9yZGVyV2lkdGgsIHN0YXJ0Q29vcmQuZ2V0WSgpICsgYm9yZGVyV2lkdGgsXG4gICAgICAgICAgICB4UmVjdERpbWVuc2lvbiAtIGJvcmRlcldpZHRoLCB5UmVjdERpbWVuc2lvbiAtIGJvcmRlcldpZHRoKTtcbiAgICAgIH1cblxuICBjb25zdCBtYXJnaW4gPSBjYW52YXMud2lkdGggLyAxMDtcblxuICBjb25zdCBncmlkWE9mZnNldCA9IG1hcmdpbjtcbiAgY29uc3QgZ3JpZFlPZmZzZXQgPSBtYXJnaW47XG5cbiAgY29uc3QgZ3JpZFhEaW1lbnNpb24gPSAxMjtcbiAgY29uc3QgZ3JpZFlEaW1lbnNpb24gPSAxMjtcblxuICBjb25zdCB4UmVjdERpbWVuc2lvbiA9XG4gICAgICAoY2FudmFzLndpZHRoIC0gYm9yZGVyV2lkdGggLSAoMiAqIG1hcmdpbikpIC8gZ3JpZFhEaW1lbnNpb247XG4gIGNvbnN0IHlSZWN0RGltZW5zaW9uID0geFJlY3REaW1lbnNpb247XG5cbiAgY29uc3QgaW52ZW50b3J5U2l6ZSA9IDM7XG5cbiAgY29uc3QgZHJhd0Jhc2VJbWFnZSA9XG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjMTY1QjMzXCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgYm9yZGVyU3RhcnRYID0gZ3JpZFhPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJvcmRlclN0YXJ0WSA9IGdyaWRZT2Zmc2V0O1xuICAgICAgICBjb25zdCBib3JkZXJFbmRYID0geFJlY3REaW1lbnNpb24gKiBncmlkWERpbWVuc2lvbiArIGJvcmRlcldpZHRoO1xuICAgICAgICBjb25zdCBib3JkZXJFbmRZID0geVJlY3REaW1lbnNpb24gKiBncmlkWURpbWVuc2lvbiArIGJvcmRlcldpZHRoO1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwiI0Y4QjIyOVwiO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGJvcmRlclN0YXJ0WCwgYm9yZGVyU3RhcnRZLCBib3JkZXJFbmRYLCBib3JkZXJFbmRZKTtcbiAgICAgICAgY29uc3QgaW1hZ2VTdGFydFggPSBncmlkWE9mZnNldCArIGJvcmRlcldpZHRoO1xuICAgICAgICBjb25zdCBpbWFnZVN0YXJ0WSA9IGdyaWRZT2Zmc2V0ICsgYm9yZGVyV2lkdGg7XG4gICAgICAgIGNvbnN0IGltYWdlRW5kWCA9IHhSZWN0RGltZW5zaW9uICogZ3JpZFhEaW1lbnNpb24gLSBib3JkZXJXaWR0aDtcbiAgICAgICAgY29uc3QgaW1hZ2VFbmRZID0geVJlY3REaW1lbnNpb24gKiBncmlkWURpbWVuc2lvbiAtIGJvcmRlcldpZHRoO1xuICAgICAgICBjb25zdCB3b3JkcyA9XG4gICAgICAgICAgICBbIFwiV0hBVFwiLCBcIkRFQ09SQVRJT05TXCIsIFwiQVJFXCIsIFwiT05cIiwgXCJUSEVcIiwgXCJUUkVFXCIsIFwiP1wiIF07XG4gICAgICAgIGNvbnN0IHRleHRTcGFjZSA9IDIwO1xuICAgICAgICBjb25zdCB0ZXh0U2l6ZSA9IChpbWFnZUVuZFkgLSBpbWFnZVN0YXJ0WSkgLyB3b3Jkcy5sZW5ndGggLSB0ZXh0U3BhY2U7XG4gICAgICAgIGNvbnRleHQuZm9udCA9IGBib2xkICR7dGV4dFNpemV9cHggTW91bnRhaW5zIG9mIENocmlzdG1hc2A7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGNvbnN0IHRleHRPZmZzZXRYID0gKGltYWdlU3RhcnRYICsgaW1hZ2VFbmRYKSAvIDIgKyAyICogYm9yZGVyV2lkdGg7XG4gICAgICAgIGNvbnN0IHRleHRPZmZzZXRZID0gaW1hZ2VTdGFydFkgKyAxNTA7XG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBpbWFnZVN0YXJ0WCwgaW1hZ2VTdGFydFksIGltYWdlRW5kWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VFbmRZKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnRleHQuZmlsbFRleHQod29yZHNbaV0sIHRleHRPZmZzZXRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE9mZnNldFkgKyAoKHRleHRTaXplICsgdGV4dFNwYWNlKSAqIGkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gIGNvbnN0IGdhbWUgPSBHYW1lLmNyZWF0ZShncmlkWERpbWVuc2lvbiwgZ3JpZFlEaW1lbnNpb24sIGludmVudG9yeVNpemUpO1xuXG4gIGNvbnN0IGdhbWVEaXNwbGF5ID0gbmV3IEdhbWVEaXNwbGF5KFxuICAgICAgbmV3IENvb3JkaW5hdGUoZ3JpZFhPZmZzZXQsIGdyaWRZT2Zmc2V0KSxcbiAgICAgIG5ldyBDb29yZGluYXRlKGdyaWRYT2Zmc2V0LCBncmlkWURpbWVuc2lvbiAqIHlSZWN0RGltZW5zaW9uICsgbWFyZ2luICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGggKyBtYXJnaW4pLFxuICAgICAgZ3JpZFhEaW1lbnNpb24gKiB4UmVjdERpbWVuc2lvbiwgeFJlY3REaW1lbnNpb24sIHlSZWN0RGltZW5zaW9uLFxuICAgICAgZHJhd1JlY3RhbmdsZSwgZHJhd0Jhc2VJbWFnZSk7XG5cbiAgZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIH1cblxuICBjb25zdCBpbnRlcmFjdGlvbkhhbmRsZXIgPVxuICAgICAgbmV3IEludGVyYWN0aW9uSGFuZGxlcihnYW1lLCBnYW1lRGlzcGxheSwgY2xlYXJEaXNwbGF5KTtcblxuICBjb25zdCBldmVudFRvQ29vcmRpbmF0ZSA9IChlOiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQpID0+IHtcbiAgICBjb25zdCB4ID0gKGUgYXMgVG91Y2hFdmVudCkuY2hhbmdlZFRvdWNoZXNcbiAgICAgICAgICAgICAgICAgID8gKGUgYXMgVG91Y2hFdmVudCkuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVhcbiAgICAgICAgICAgICAgICAgIDogKGUgYXMgTW91c2VFdmVudCkucGFnZVg7XG4gICAgY29uc3QgeSA9IChlIGFzIFRvdWNoRXZlbnQpLmNoYW5nZWRUb3VjaGVzXG4gICAgICAgICAgICAgICAgICA/IChlIGFzIFRvdWNoRXZlbnQpLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgICAgICAgICAgICAgICA6IChlIGFzIE1vdXNlRXZlbnQpLnBhZ2VZO1xuICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZSh4LCB5KTtcbiAgfTtcblxuICBjb25zdCBjb252ZXJ0ID0gKGY6IChjb29yZDogQ29vcmRpbmF0ZSkgPT4gdm9pZCkgPT4ge1xuICAgIHJldHVybiAoZTogTW91c2VFdmVudHxUb3VjaEV2ZW50KSA9PiBmKGV2ZW50VG9Db29yZGluYXRlKGUpKVxuICB9O1xuXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNvbnZlcnQoaW50ZXJhY3Rpb25IYW5kbGVyLmhhbmRsZVByZXNzKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGNvbnZlcnQoaW50ZXJhY3Rpb25IYW5kbGVyLmhhbmRsZURyYWcpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGNvbnZlcnQoaW50ZXJhY3Rpb25IYW5kbGVyLmhhbmRsZVJlbGVhc2UpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBjb252ZXJ0KGludGVyYWN0aW9uSGFuZGxlci5oYW5kbGVDYW5jZWwpKTtcblxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydChpbnRlcmFjdGlvbkhhbmRsZXIuaGFuZGxlUHJlc3MpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY29udmVydChpbnRlcmFjdGlvbkhhbmRsZXIuaGFuZGxlRHJhZykpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnQoaW50ZXJhY3Rpb25IYW5kbGVyLmhhbmRsZVJlbGVhc2UpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0KGludGVyYWN0aW9uSGFuZGxlci5oYW5kbGVDYW5jZWwpKTtcbn1cbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vY29vcmRpbmF0ZVwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IEdhbWVEaXNwbGF5IGZyb20gXCIuL2dhbWVfZGlzcGxheVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4vZ3JpZFwiO1xuaW1wb3J0IEdyaWREaXNwbGF5IGZyb20gXCIuL2dyaWRfZGlzcGxheVwiO1xuaW1wb3J0IEludmVudG9yeSwge0l0ZW19IGZyb20gXCIuL2ludmVudG9yeVwiO1xuaW1wb3J0IEludmVudG9yeURpc3BsYXkgZnJvbSBcIi4vaW52ZW50b3J5X2Rpc3BsYXlcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXkgZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvbl9kaXNwbGF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgc2VsZWN0ZWRJdGVtOiBTZWxlY3RlZEl0ZW18dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgZ2FtZTogR2FtZTtcbiAgcHJpdmF0ZSBnYW1lRGlzcGxheTogR2FtZURpc3BsYXk7XG4gIHByaXZhdGUgY2xlYXJEaXNwbGF5OiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUsIGdhbWVEaXNwbGF5OiBHYW1lRGlzcGxheSwgY2xlYXJEaXNwbGF5OiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLmdhbWVEaXNwbGF5ID0gZ2FtZURpc3BsYXk7XG4gICAgdGhpcy5nYW1lRGlzcGxheS5kcmF3KGdhbWUpO1xuICAgIHRoaXMuY2xlYXJEaXNwbGF5ID0gY2xlYXJEaXNwbGF5O1xuICB9XG5cbiAgaGFuZGxlUHJlc3MgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1heWJlSXRlbVdpdGhPZmZzZXQgPVxuICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nZXRJbnZlbnRvcnlEaXNwbGF5KCkuaXRlbUF0V2l0aE9mZnNldChcbiAgICAgICAgICAgICAgICBjb29yZCwgdGhpcy5nYW1lLmdldEludmVudG9yeSgpKTtcbiAgICAgICAgaWYgKG1heWJlSXRlbVdpdGhPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBtYXliZUl0ZW1XaXRoT2Zmc2V0WzBdO1xuICAgICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZ2V0SW52ZW50b3J5RGlzcGxheSgpLnNlbGVjdEl0ZW0oaXRlbSk7XG4gICAgICAgICAgY29uc3QgcGllY2VPZmZzZXQgPSBtYXliZUl0ZW1XaXRoT2Zmc2V0WzFdO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbmV3IFNlbGVjdGVkSXRlbShjb29yZCwgcGllY2VPZmZzZXQsIGl0ZW0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gIGhhbmRsZURyYWcgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5jbGVhckRpc3BsYXkoKTtcbiAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmRyYXcodGhpcy5nYW1lKTtcbiAgICAgICAgICBjb25zdCBwaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5ID1cbiAgICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5jcmVhdGVQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5KFxuICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0ubmV3UGllY2VDb29yZChjb29yZCksXG4gICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5nZXRJdGVtKCkuZ2V0UGllY2VTcGVjaWZpY2F0aW9uKCkpO1xuICAgICAgICAgIHBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXkuZHJhdygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgcHJpdmF0ZSByZXNldERpc3BsYXkgPVxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nZXRJbnZlbnRvcnlEaXNwbGF5KCkucmVtb3ZlU2VsZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgIHRoaXMuZ2FtZURpc3BsYXkuZHJhdyh0aGlzLmdhbWUpO1xuICAgICAgfVxuXG4gIGhhbmRsZVJlbGVhc2UgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtLmdldEl0ZW0oKTtcbiAgICAgICAgICBjb25zdCBwaWVjZUNvb3JkID0gdGhpcy5zZWxlY3RlZEl0ZW0ubmV3UGllY2VDb29yZChjb29yZCk7XG4gICAgICAgICAgY29uc3QgZ3JpZENvb3JkID1cbiAgICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nZXRHcmlkRGlzcGxheSgpLnRvR3JpZENvb3JkKHBpZWNlQ29vcmQpO1xuICAgICAgICAgIGlmICh0aGlzLmdhbWUuZ2V0R3JpZCgpLnBpZWNlRml0cyhncmlkQ29vcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0UGllY2VTcGVjaWZpY2F0aW9uKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUgPSB0aGlzLmdhbWUud2l0aFBsYWNlZEl0ZW0oZ3JpZENvb3JkLCBpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNldERpc3BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gIGhhbmRsZUNhbmNlbCA9IChjb29yZDogQ29vcmRpbmF0ZSkgPT4geyB0aGlzLnJlc2V0RGlzcGxheSgpOyB9XG59XG5cbmNsYXNzIFNlbGVjdGVkSXRlbSB7XG4gIHByaXZhdGUgc2VsZWN0aW9uQ29vcmQ6IENvb3JkaW5hdGU7XG4gIHByaXZhdGUgcGllY2VDb29yZDogQ29vcmRpbmF0ZTtcbiAgcHJpdmF0ZSBpdGVtOiBJdGVtO1xuXG4gIGNvbnN0cnVjdG9yKHNlbGVjdGlvbkNvb3JkOiBDb29yZGluYXRlLCBwaWVjZUNvb3JkOiBDb29yZGluYXRlLCBpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25Db29yZCA9IHNlbGVjdGlvbkNvb3JkO1xuICAgIHRoaXMucGllY2VDb29yZCA9IHBpZWNlQ29vcmQ7XG4gICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbkNvb3JkID0gKCkgPT4gdGhpcy5zZWxlY3Rpb25Db29yZDtcbiAgZ2V0UGllY2VDb29yZCA9ICgpID0+IHRoaXMucGllY2VDb29yZDtcblxuICBuZXdQaWVjZUNvb3JkID0gKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0aW9uT2Zmc2V0ID0gY29vcmQuc3VidHJhY3QodGhpcy5zZWxlY3Rpb25Db29yZClcbiAgICByZXR1cm4gdGhpcy5waWVjZUNvb3JkLmFkZChzZWxlY3Rpb25PZmZzZXQpLmFkZChzZWxlY3Rpb25PZmZzZXQpO1xuICB9IFxuXG4gIGdldEl0ZW0gPSAoKSA9PiB0aGlzLml0ZW07XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZlbnRvcnkge1xuICBwcml2YXRlIHNpemU6IG51bWJlcjtcbiAgcHJpdmF0ZSBpdGVtczogQXJyYXk8SXRlbXx1bmRlZmluZWQ+O1xuXG4gIHN0YXRpYyB3aXRoUGllY2VTcGVjaWZpY2F0aW9ucyhtZW1iZXJzOiBQaWVjZVNwZWNpZmljYXRpb25bXSkge1xuICAgIHJldHVybiBuZXcgSW52ZW50b3J5KG1lbWJlcnMubWFwKG1lbWJlciA9PiBuZXcgSXRlbShtZW1iZXIpKSk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGl0ZW1zOiBBcnJheTxJdGVtfHVuZGVmaW5lZD4pIHsgdGhpcy5pdGVtcyA9IGl0ZW1zOyB9XG5cbiAgZ2V0SXRlbXMgPSAoKSA9PiB7IHJldHVybiB0aGlzLml0ZW1zOyB9XG5cbiAgd2l0aG91dEl0ZW0gPVxuICAgICAgKGl0ZW06IEl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbXMgPSB0aGlzLml0ZW1zLm1hcChpID0+IGkgPT09IGl0ZW0gPyB1bmRlZmluZWQgOiBpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBJbnZlbnRvcnkobmV3SXRlbXMpO1xuICAgICAgfVxuXG4gIGlzRW1wdHkgPVxuICAgICAgKCkgPT4geyByZXR1cm4gdGhpcy5pdGVtcy5ldmVyeShtYXliZUl0ZW0gPT4gbWF5YmVJdGVtID09PSB1bmRlZmluZWQpOyB9XG59XG5cbmV4cG9ydCBjbGFzcyBJdGVtIHtcbiAgcHJpdmF0ZSBwaWVjZVNwZWNpZmljYXRpb246IFBpZWNlU3BlY2lmaWNhdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwaWVjZVNwZWNpZmljYXRpb246IFBpZWNlU3BlY2lmaWNhdGlvbikge1xuICAgIHRoaXMucGllY2VTcGVjaWZpY2F0aW9uID0gcGllY2VTcGVjaWZpY2F0aW9uO1xuICB9XG5cbiAgZ2V0UGllY2VTcGVjaWZpY2F0aW9uID0gKCkgPT4geyByZXR1cm4gdGhpcy5waWVjZVNwZWNpZmljYXRpb247IH1cbn1cbiIsImltcG9ydCBDb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0IENvb3JkaW5hdGUgZnJvbSBcIi4vY29vcmRpbmF0ZVwiO1xuaW1wb3J0IEludmVudG9yeSwge0l0ZW19IGZyb20gXCIuL2ludmVudG9yeVwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbiBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uXCI7XG5pbXBvcnQgUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheSBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uX2Rpc3BsYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5RGlzcGxheSB7XG4gIHByaXZhdGUgb2Zmc2V0OiBDb29yZGluYXRlO1xuICBwcml2YXRlIHhSZWN0RGltZW5zaW9uOiBudW1iZXI7XG4gIHByaXZhdGUgeVJlY3REaW1lbnNpb246IG51bWJlcjtcbiAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuICBwcml2YXRlIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHZvaWQ7XG4gIHByaXZhdGUgc2VsZWN0ZWRJdGVtOiBJdGVtfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihvZmZzZXQ6IENvb3JkaW5hdGUsIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsXG4gICAgICAgICAgICAgIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb246IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMueFJlY3REaW1lbnNpb24gPSB4UmVjdERpbWVuc2lvbjtcbiAgICB0aGlzLnlSZWN0RGltZW5zaW9uID0geVJlY3REaW1lbnNpb247XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuZHJhd1JlY3RhbmdsZSA9IGRyYXdSZWN0YW5nbGU7XG4gIH1cblxuICBjcmVhdGVQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5cyA9XG4gICAgICAoaW52ZW50b3J5OiBJbnZlbnRvcnkpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBpbnZlbnRvcnkuZ2V0SXRlbXMoKTtcbiAgICAgICAgY29uc3QgZGlzcGxheXM6IEFycmF5PFBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXl8dW5kZWZpbmVkPiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWF5YmVJdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgaWYgKG1heWJlSXRlbSAhPT0gdW5kZWZpbmVkICYmIG1heWJlSXRlbSAhPT0gdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHhNYXJnaW4gPSB0aGlzLnhSZWN0RGltZW5zaW9uIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IHlNYXJnaW4gPSB0aGlzLnlSZWN0RGltZW5zaW9uIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9IChpICogdGhpcy53aWR0aCAvIGl0ZW1zLmxlbmd0aCkgKyB4TWFyZ2luO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRZID0geU1hcmdpbjtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0Q29vcmQgPSBuZXcgQ29vcmRpbmF0ZShzdGFydFgsIHN0YXJ0WSk7XG4gICAgICAgICAgICBjb25zdCBwaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5ID0gbmV3IFBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXkoXG4gICAgICAgICAgICAgICAgbWF5YmVJdGVtLmdldFBpZWNlU3BlY2lmaWNhdGlvbigpLCBzdGFydENvb3JkLmFkZCh0aGlzLm9mZnNldCksXG4gICAgICAgICAgICAgICAgdGhpcy54UmVjdERpbWVuc2lvbiwgdGhpcy55UmVjdERpbWVuc2lvbiwgdGhpcy5kcmF3UmVjdGFuZ2xlKTtcbiAgICAgICAgICAgIGRpc3BsYXlzW2ldID0gcGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpc3BsYXlzO1xuICAgICAgfVxuXG4gIGRyYXcgPVxuICAgICAgKGludmVudG9yeTogSW52ZW50b3J5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlzID0gdGhpcy5jcmVhdGVQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5cyhpbnZlbnRvcnkpXG4gICAgICAgIGRpc3BsYXlzLmZvckVhY2gobWF5YmVEaXNwbGF5ID0+IHtcbiAgICAgICAgICBpZiAobWF5YmVEaXNwbGF5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1heWJlRGlzcGxheS5kcmF3KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gIGl0ZW1BdFdpdGhPZmZzZXQ6IChjb29yZDogQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeTogSW52ZW50b3J5KSA9PiBbSXRlbSwgQ29vcmRpbmF0ZV0gfCB1bmRlZmluZWQgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlLCBpbnZlbnRvcnk6IEludmVudG9yeSkgPT4ge1xuICAgICAgICBjb25zdCBkaXNwbGF5cyA9IHRoaXMuY3JlYXRlUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheXMoaW52ZW50b3J5KVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgbWF5YmVEaXNwbGF5ID0gZGlzcGxheXNbaV07XG4gICAgICAgICAgaWYgKG1heWJlRGlzcGxheSAhPT0gdW5kZWZpbmVkICYmIG1heWJlRGlzcGxheS5jb250YWlucyhjb29yZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbIGludmVudG9yeS5nZXRJdGVtcygpW2ldLCBkaXNwbGF5c1tpXS5nZXRPZmZzZXQoKSBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gIHNlbGVjdEl0ZW0gPSAoaXRlbTogSXRlbSkgPT4geyB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07IH1cblxuICByZW1vdmVTZWxlY3Rpb24gPSAoKSA9PiB7IHRoaXMuc2VsZWN0ZWRJdGVtID0gdW5kZWZpbmVkOyB9XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllY2VTcGVjaWZpY2F0aW9uIHtcbiAgcHJpdmF0ZSBjb2xvcjogQ29sb3I7XG4gIHByaXZhdGUgcmVsYXRpdmVDb29yZHM6IENvb3JkaW5hdGVbXVxuICBjb25zdHJ1Y3Rvcihjb2xvcjogQ29sb3IsIHJlbGF0aXZlQ29vcmRzOiBDb29yZGluYXRlW10pIHtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5yZWxhdGl2ZUNvb3JkcyA9IHJlbGF0aXZlQ29vcmRzO1xuICB9XG5cbiAgZ2V0Q29sb3IgPSAoKSA9PiB7IHJldHVybiB0aGlzLmNvbG9yOyB9XG5cbiAgZ2V0UmVsYXRpdmVDb29yZHMgPSAoKSA9PiB7IHJldHVybiB0aGlzLnJlbGF0aXZlQ29vcmRzOyB9XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5IHtcbiAgcHJpdmF0ZSBwaWVjZVNwZWNpZmljYXRpb246IFBpZWNlU3BlY2lmaWNhdGlvbjtcbiAgcHJpdmF0ZSBvZmZzZXQ6IENvb3JkaW5hdGU7XG4gIHByaXZhdGUgeFJlY3REaW1lbnNpb246IG51bWJlcjtcbiAgcHJpdmF0ZSB5UmVjdERpbWVuc2lvbjogbnVtYmVyO1xuICBwcml2YXRlIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKHBpZWNlU3BlY2lmaWNhdGlvbjogUGllY2VTcGVjaWZpY2F0aW9uLCBvZmZzZXQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsIHlSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgIGRyYXdSZWN0YW5nbGU6IChjb2xvcjogQ29sb3IsIHN0YXJ0Q29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb246IG51bWJlcikgPT4gdm9pZCkge1xuICAgIHRoaXMueFJlY3REaW1lbnNpb24gPSB4UmVjdERpbWVuc2lvbjtcbiAgICB0aGlzLnlSZWN0RGltZW5zaW9uID0geVJlY3REaW1lbnNpb247XG4gICAgdGhpcy5kcmF3UmVjdGFuZ2xlID0gZHJhd1JlY3RhbmdsZTtcbiAgICB0aGlzLnBpZWNlU3BlY2lmaWNhdGlvbiA9IHBpZWNlU3BlY2lmaWNhdGlvbjtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgfVxuXG4gIGRyYXcgPVxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnBpZWNlU3BlY2lmaWNhdGlvbi5nZXRSZWxhdGl2ZUNvb3JkcygpLmZvckVhY2gocmVsYXRpdmVDb29yZCA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRYID0gcmVsYXRpdmVDb29yZC5nZXRYKCkgKiB0aGlzLnhSZWN0RGltZW5zaW9uO1xuICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IHJlbGF0aXZlQ29vcmQuZ2V0WSgpICogdGhpcy55UmVjdERpbWVuc2lvbjtcbiAgICAgICAgICBjb25zdCBzdGFydENvb3JkID0gbmV3IENvb3JkaW5hdGUoc3RhcnRYLCBzdGFydFkpO1xuICAgICAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZSh0aGlzLnBpZWNlU3BlY2lmaWNhdGlvbi5nZXRDb2xvcigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkLmFkZCh0aGlzLm9mZnNldCksIHRoaXMueFJlY3REaW1lbnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueVJlY3REaW1lbnNpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICBjb250YWlucyA9XG4gICAgICAoY29vcmQ6IENvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGllY2VTcGVjaWZpY2F0aW9uLmdldFJlbGF0aXZlQ29vcmRzKCkuc29tZShcbiAgICAgICAgICAgIHJlbGF0aXZlQ29vcmQgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB4TWFyZ2luID0gMjA7XG4gICAgICAgICAgICAgIGNvbnN0IHlNYXJnaW4gPSAyMDtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhcnRYID0gcmVsYXRpdmVDb29yZC5nZXRYKCkgKiB0aGlzLnhSZWN0RGltZW5zaW9uO1xuICAgICAgICAgICAgICBjb25zdCBzdGFydFkgPSByZWxhdGl2ZUNvb3JkLmdldFkoKSAqIHRoaXMueVJlY3REaW1lbnNpb247XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0Q29vcmRXaXRoT2Zmc2V0ID1cbiAgICAgICAgICAgICAgICAgIChuZXcgQ29vcmRpbmF0ZShzdGFydFgsIHN0YXJ0WSkpLmFkZCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICAgIGNvbnN0IGluWCA9XG4gICAgICAgICAgICAgICAgICBjb29yZC5nZXRYKCkgPj0gc3RhcnRDb29yZFdpdGhPZmZzZXQuZ2V0WCgpIC0geE1hcmdpbiAmJlxuICAgICAgICAgICAgICAgICAgY29vcmQuZ2V0WCgpIDwgc3RhcnRDb29yZFdpdGhPZmZzZXQuZ2V0WCgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnhSZWN0RGltZW5zaW9uICsgeE1hcmdpbjtcbiAgICAgICAgICAgICAgY29uc3QgaW5ZID1cbiAgICAgICAgICAgICAgICAgIGNvb3JkLmdldFkoKSA+PSBzdGFydENvb3JkV2l0aE9mZnNldC5nZXRZKCkgLSB5TWFyZ2luICYmXG4gICAgICAgICAgICAgICAgICBjb29yZC5nZXRZKCkgPCBzdGFydENvb3JkV2l0aE9mZnNldC5nZXRZKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueVJlY3REaW1lbnNpb24gKyB5TWFyZ2luO1xuICAgICAgICAgICAgICByZXR1cm4gaW5YICYmIGluWTtcbiAgICAgICAgICAgIH0pXG4gICAgICB9XG5cbiAgZ2V0UGllY2VTcGVjaWZpY2F0aW9uID0gKCkgPT4geyByZXR1cm4gdGhpcy5waWVjZVNwZWNpZmljYXRpb247IH1cblxuICBnZXRPZmZzZXQgPSAoKSA9PiB7IHJldHVybiB0aGlzLm9mZnNldDsgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==