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
                var selectionOffset = coord.subtract(pieceOffset);
                _this.selectedItem = new SelectedItem(selectionOffset, item);
                console.log(_this.selectedItem);
            }
        };
        this.handleDrag = function (coord) {
            if (_this.selectedItem !== undefined) {
                _this.clearDisplay();
                _this.gameDisplay.draw(_this.game);
                var selectionOffset = _this.selectedItem.getSelectionOffset();
                var pieceSpecificationDisplay = _this.gameDisplay.createPieceSpecificationDisplay(coord.subtract(selectionOffset), _this.selectedItem.getItem().getPieceSpecification());
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
                var pieceCoord = coord.subtract(_this.selectedItem.getSelectionOffset());
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
    function SelectedItem(selectionOffset, item) {
        var _this = this;
        this.getSelectionOffset = function () { return _this.selectionOffset; };
        this.getItem = function () { return _this.item; };
        this.selectionOffset = selectionOffset;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2VydC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb3JkaW5hdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVfZGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZF9kaXNwbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJhY3Rpb25faGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW52ZW50b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnZlbnRvcnlfZGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2Vfc3BlY2lmaWNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2Vfc3BlY2lmaWNhdGlvbl9kaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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ckIsQ0FBQztZQUV6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckIsQ0FBQztZQUN6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckIsQ0FBQztZQUN6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDckIsQ0FBQztZQUN6QixJQUFJLDREQUFrQixDQUFDLElBQUksOENBQUssQ0FBQyxVQUFVLENBQUMsRUFDckI7Z0JBQ0UsSUFBSSxtREFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksbURBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLG1EQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FB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QUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7Z0JBQ3JELE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQztZQUNwQixDQUFDLENBQUM7UUFDUixDQUFDO1FBRUwsMEJBQXFCLEdBQUcsY0FBUSxPQUFPLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFakUsY0FBUyxHQUFHLGNBQVEsT0FBTyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQTNDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUF1Q0gsZ0NBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZT86IHN0cmluZykge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3Ige1xuICBwcml2YXRlIGhleDogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihoZXg6IHN0cmluZykgeyB0aGlzLmhleCA9IGhleDsgfVxuXG4gIGdldEhleCA9ICgpID0+IHsgcmV0dXJuIHRoaXMuaGV4OyB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb29yZGluYXRlIHtcbiAgcHJpdmF0ZSB4OiBudW1iZXI7XG4gIHByaXZhdGUgeTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgYWRkID1cbiAgICAgIChvZmZzZXQ6IENvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb29yZGluYXRlKHRoaXMueCArIG9mZnNldC54LCB0aGlzLnkgKyBvZmZzZXQueSlcbiAgICAgIH1cblxuICBzdWJ0cmFjdCA9XG4gICAgICAob3RoZXI6IENvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb29yZGluYXRlKHRoaXMueCAtIG90aGVyLngsIHRoaXMueSAtIG90aGVyLnkpO1xuICAgICAgfVxuXG4gIGdldFggPSAoKSA9PiB7IHJldHVybiB0aGlzLng7IH1cblxuICBnZXRZID0gKCkgPT4geyByZXR1cm4gdGhpcy55OyB9XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCIuL2dyaWRcIjtcbmltcG9ydCBJbnZlbnRvcnksIHtJdGVtfSBmcm9tIFwiLi9pbnZlbnRvcnlcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgcHJpdmF0ZSBncmlkOiBHcmlkO1xuICBwcml2YXRlIGludmVudG9yeTogSW52ZW50b3J5O1xuICBwcml2YXRlIGludmVudG9yeVNpemU6IG51bWJlcjtcblxuICBwcml2YXRlIHN0YXRpYyBwaWVjZVNwZWNpZmljYXRpb25zID1cbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgY29sb3JUeXBlMSA9IFwicmVkXCI7XG4gICAgICAgIGNvbnN0IGNvbG9yVHlwZTIgPSBcImdyZWVuXCI7XG4gICAgICAgIGNvbnN0IGNvbG9yVHlwZTMgPSBcImJsdWVcIjtcbiAgICAgICAgY29uc3QgY29sb3JUeXBlNCA9IFwiaW5kaWdvXCI7XG4gICAgICAgIGNvbnN0IGNvbG9yVHlwZTUgPSBcInZpb2xldFwiO1xuICAgICAgICBjb25zdCBjb2xvclR5cGU2ID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgY29uc3QgY29sb3JUeXBlNyA9IFwid2hpdGVcIjtcbiAgICAgICAgY29uc3QgY29sb3JUeXBlOCA9IFwicGlua1wiO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihcbiAgICAgICAgICAgICAgbmV3IENvbG9yKGNvbG9yVHlwZTEpLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksIG5ldyBDb29yZGluYXRlKDAsIDEpLCBuZXcgQ29vcmRpbmF0ZSgxLCAwKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKFxuICAgICAgICAgICAgICBuZXcgQ29sb3IoY29sb3JUeXBlMSksXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSwgbmV3IENvb3JkaW5hdGUoMCwgMSksIG5ldyBDb29yZGluYXRlKDEsIDEpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24oXG4gICAgICAgICAgICAgIG5ldyBDb2xvcihjb2xvclR5cGUxKSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLCBuZXcgQ29vcmRpbmF0ZSgxLCAwKSwgbmV3IENvb3JkaW5hdGUoMSwgMSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihcbiAgICAgICAgICAgICAgbmV3IENvbG9yKGNvbG9yVHlwZTEpLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksIG5ldyBDb29yZGluYXRlKDEsIDApLCBuZXcgQ29vcmRpbmF0ZSgxLCAxKVxuICAgICAgICAgICAgICBdKSxcblxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSwgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLCBuZXcgQ29vcmRpbmF0ZSgxLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG5cbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGUzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG5cbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsgbmV3IENvb3JkaW5hdGUoMCwgMCkgXSksXG5cbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgyLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcblxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgIG5ldyBQaWVjZVNwZWNpZmljYXRpb24obmV3IENvbG9yKGNvbG9yVHlwZTYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlNyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMiwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICBuZXcgUGllY2VTcGVjaWZpY2F0aW9uKG5ldyBDb2xvcihjb2xvclR5cGU3KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMCwgMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlOCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlOCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgxLCAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDIsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlOCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgbmV3IFBpZWNlU3BlY2lmaWNhdGlvbihuZXcgQ29sb3IoY29sb3JUeXBlOCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDEsIDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ29vcmRpbmF0ZSgwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENvb3JkaW5hdGUoMSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDb29yZGluYXRlKDAsIDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgIF07XG4gICAgICB9XG5cbiAgc3RhdGljIGNyZWF0ZSA9XG4gICAgICAoZ3JpZFhEaW1lbnNpb246IG51bWJlciwgZ3JpZFlEaW1lbnNpb246IG51bWJlcixcbiAgICAgICBpbnZlbnRvcnlTaXplOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IEdyaWQud2l0aERpbWVuc2lvbnMoZ3JpZFhEaW1lbnNpb24sIGdyaWRZRGltZW5zaW9uKTtcbiAgICAgICAgY29uc3QgaW52ZW50b3J5ID0gR2FtZS5nZW5lcmF0ZUludmVudG9yeShncmlkLCBpbnZlbnRvcnlTaXplKTtcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lKGdyaWQsIGludmVudG9yeSwgaW52ZW50b3J5U2l6ZSk7XG4gICAgICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVJbnZlbnRvcnkgPVxuICAgICAgKGdyaWQ6IEdyaWQsIGludmVudG9yeVNpemU6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjaG9zZW5QaWVjZVNwZWNpZmljYXRpb25zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW52ZW50b3J5U2l6ZTsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPVxuICAgICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBHYW1lLnBpZWNlU3BlY2lmaWNhdGlvbnMoKS5sZW5ndGgpO1xuICAgICAgICAgIGNob3NlblBpZWNlU3BlY2lmaWNhdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgR2FtZS5waWVjZVNwZWNpZmljYXRpb25zKClbcmFuZG9tSW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSW52ZW50b3J5LndpdGhQaWVjZVNwZWNpZmljYXRpb25zKGNob3NlblBpZWNlU3BlY2lmaWNhdGlvbnMpO1xuICAgICAgfVxuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoZ3JpZDogR3JpZCwgaW52ZW50b3J5OiBJbnZlbnRvcnksIGludmVudG9yeVNpemU6IG51bWJlcikge1xuICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG4gICAgdGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnk7XG4gICAgdGhpcy5pbnZlbnRvcnlTaXplID0gaW52ZW50b3J5U2l6ZTtcbiAgfVxuXG4gIHdpdGhQbGFjZWRJdGVtID1cbiAgICAgIChjb29yZGluYXRlOiBDb29yZGluYXRlLCBpdGVtOiBJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0dyaWQgPVxuICAgICAgICAgICAgdGhpcy5ncmlkLndpdGhQaWVjZShjb29yZGluYXRlLCBpdGVtLmdldFBpZWNlU3BlY2lmaWNhdGlvbigpKTtcbiAgICAgICAgY29uc3QgaW52ZW50b3J5V2l0aG91dEl0ZW0gPSB0aGlzLmludmVudG9yeS53aXRob3V0SXRlbShpdGVtKTtcbiAgICAgICAgY29uc3QgbmV3SW52ZW50b3J5ID1cbiAgICAgICAgICAgIGludmVudG9yeVdpdGhvdXRJdGVtLmlzRW1wdHkoKVxuICAgICAgICAgICAgICAgID8gR2FtZS5nZW5lcmF0ZUludmVudG9yeShuZXdHcmlkLCB0aGlzLmludmVudG9yeVNpemUpXG4gICAgICAgICAgICAgICAgOiBpbnZlbnRvcnlXaXRob3V0SXRlbTtcblxuICAgICAgICByZXR1cm4gbmV3IEdhbWUobmV3R3JpZCwgbmV3SW52ZW50b3J5LCB0aGlzLmludmVudG9yeVNpemUpO1xuICAgICAgfVxuXG4gIGdldEdyaWQgPSAoKSA9PiB7IHJldHVybiB0aGlzLmdyaWQ7IH1cblxuICBnZXRJbnZlbnRvcnkgPSAoKSA9PiB7IHJldHVybiB0aGlzLmludmVudG9yeTsgfVxufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9jb29yZGluYXRlXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgR3JpZERpc3BsYXkgZnJvbSBcIi4vZ3JpZF9kaXNwbGF5XCI7XG5pbXBvcnQgSW52ZW50b3J5RGlzcGxheSBmcm9tIFwiLi9pbnZlbnRvcnlfZGlzcGxheVwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbiBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uXCI7XG5pbXBvcnQgUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheSBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uX2Rpc3BsYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZURpc3BsYXkge1xuICBwcml2YXRlIHhSZWN0RGltZW5zaW9uOiBudW1iZXI7XG4gIHByaXZhdGUgeVJlY3REaW1lbnNpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBkcmF3UmVjdGFuZ2xlOiAoY29sb3I6IENvbG9yLCBzdGFydENvb3JkOiBDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyKSA9PiB2b2lkO1xuXG4gIHByaXZhdGUgZHJhd0Jhc2VJbWFnZTogKCkgPT4gdm9pZDtcblxuICBwcml2YXRlIGdyaWREaXNwbGF5OiBHcmlkRGlzcGxheTtcbiAgcHJpdmF0ZSBpbnZlbnRvcnlEaXNwbGF5OiBJbnZlbnRvcnlEaXNwbGF5O1xuXG4gIGNvbnN0cnVjdG9yKGdyaWRPZmZzZXQ6IENvb3JkaW5hdGUsIGludmVudG9yeU9mZnNldDogQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgaW52ZW50b3J5V2lkdGg6IG51bWJlciwgeFJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICAgICAgICAgZHJhd1JlY3RhbmdsZTogKGNvbG9yOiBDb2xvciwgc3RhcnRDb29yZDogQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyKSA9PiB2b2lkLFxuICAgICAgICAgICAgICBkcmF3QmFzZUltYWdlOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy54UmVjdERpbWVuc2lvbiA9IHhSZWN0RGltZW5zaW9uO1xuICAgIHRoaXMueVJlY3REaW1lbnNpb24gPSB5UmVjdERpbWVuc2lvbjtcbiAgICB0aGlzLmRyYXdSZWN0YW5nbGUgPSBkcmF3UmVjdGFuZ2xlO1xuICAgIHRoaXMuZHJhd0Jhc2VJbWFnZSA9IGRyYXdCYXNlSW1hZ2U7XG4gICAgdGhpcy5ncmlkRGlzcGxheSA9IG5ldyBHcmlkRGlzcGxheShncmlkT2Zmc2V0LCB0aGlzLnhSZWN0RGltZW5zaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55UmVjdERpbWVuc2lvbiwgdGhpcy5kcmF3UmVjdGFuZ2xlKTtcblxuICAgIHRoaXMuaW52ZW50b3J5RGlzcGxheSA9IG5ldyBJbnZlbnRvcnlEaXNwbGF5KFxuICAgICAgICBpbnZlbnRvcnlPZmZzZXQsIHRoaXMueFJlY3REaW1lbnNpb24sIHRoaXMueVJlY3REaW1lbnNpb24sXG4gICAgICAgIGludmVudG9yeVdpZHRoLCB0aGlzLmRyYXdSZWN0YW5nbGUpO1xuICB9XG5cbiAgZHJhdyA9XG4gICAgICAoZ2FtZTogR2FtZSkgPT4ge1xuICAgICAgICB0aGlzLmRyYXdCYXNlSW1hZ2UoKTtcbiAgICAgICAgY29uc3QgZ3JpZFhEaW1lbnNpb24gPSB0aGlzLmdyaWREaXNwbGF5LmdldFhEaW1lbnNpb24oZ2FtZS5nZXRHcmlkKCkpO1xuICAgICAgICBjb25zdCBncmlkWURpbWVuc2lvbiA9IHRoaXMuZ3JpZERpc3BsYXkuZ2V0WURpbWVuc2lvbihnYW1lLmdldEdyaWQoKSk7XG4gICAgICAgIHRoaXMuZ3JpZERpc3BsYXkuZHJhdyhnYW1lLmdldEdyaWQoKSk7XG4gICAgICAgIHRoaXMuaW52ZW50b3J5RGlzcGxheS5kcmF3KGdhbWUuZ2V0SW52ZW50b3J5KCkpO1xuICAgICAgfVxuXG4gIGdldEludmVudG9yeURpc3BsYXkgPSAoKSA9PiB7IHJldHVybiB0aGlzLmludmVudG9yeURpc3BsYXk7IH1cblxuICBnZXRHcmlkRGlzcGxheSA9ICgpID0+IHsgcmV0dXJuIHRoaXMuZ3JpZERpc3BsYXk7IH1cblxuICBjcmVhdGVQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5ID1cbiAgICAgIChvZmZzZXQ6IENvb3JkaW5hdGUsIHBpZWNlU3BlY2lmaWNhdGlvbjogUGllY2VTcGVjaWZpY2F0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheShcbiAgICAgICAgICAgIHBpZWNlU3BlY2lmaWNhdGlvbiwgb2Zmc2V0LCB0aGlzLnhSZWN0RGltZW5zaW9uLFxuICAgICAgICAgICAgdGhpcy55UmVjdERpbWVuc2lvbiwgdGhpcy5kcmF3UmVjdGFuZ2xlKTtcbiAgICAgIH1cbn1cbiIsImltcG9ydCBhc3NlcnQgZnJvbSBcIi4vYXNzZXJ0XCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkIHtcbiAgcHJpdmF0ZSBjb2xvcnM6IE1heWJlQ29sb3JbXVtdO1xuXG4gIHN0YXRpYyB3aXRoRGltZW5zaW9ucyh4RGltZW5zaW9uOiBudW1iZXIsIHlEaW1lbnNpb246IG51bWJlcikge1xuICAgIGFzc2VydCh4RGltZW5zaW9uID4gMCAmJiB5RGltZW5zaW9uID4gMCk7XG4gICAgY29uc3QgY29sb3JzID0gW107XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHhEaW1lbnNpb247IGkrKykge1xuICAgICAgY29sb3JzW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgeURpbWVuc2lvbjsgaisrKSB7XG4gICAgICAgIGNvbG9yc1tpXVtqXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBHcmlkKGNvbG9ycyk7XG4gIH1cblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKGNvbG9yczogTWF5YmVDb2xvcltdW10pIHsgdGhpcy5jb2xvcnMgPSBjb2xvcnM7IH1cblxuICBnZXRDb2xvcnMgPSAoKSA9PiB7IHJldHVybiB0aGlzLmNvbG9yczsgfVxuXG4gIHByaXZhdGUgY29sb3JBdCA9XG4gICAgICAoY29vcmQ6IENvb3JkaW5hdGUpID0+IHsgcmV0dXJuIHRoaXMuY29sb3JzW2Nvb3JkLmdldFgoKV1bY29vcmQuZ2V0WSgpXTsgfVxuXG4gIGluQm91bmRzID1cbiAgICAgIChjb29yZDogQ29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICByZXR1cm4gY29vcmQuZ2V0WCgpID49IDAgJiYgY29vcmQuZ2V0WCgpIDwgdGhpcy5jb2xvcnMubGVuZ3RoICYmXG4gICAgICAgICAgICAgICBjb29yZC5nZXRZKCkgPj0gMCAmJiBjb29yZC5nZXRZKCkgPCB0aGlzLmNvbG9yc1swXS5sZW5ndGg7XG4gICAgICB9XG5cbiAgcGllY2VGaXRzID1cbiAgICAgIChjb29yZDogQ29vcmRpbmF0ZSwgcGllY2VTcGVjaWZpY2F0aW9uOiBQaWVjZVNwZWNpZmljYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgcGllY2VSZWxhdGl2ZUNvb3JkcyA9IHBpZWNlU3BlY2lmaWNhdGlvbi5nZXRSZWxhdGl2ZUNvb3JkcygpO1xuICAgICAgICByZXR1cm4gcGllY2VSZWxhdGl2ZUNvb3Jkcy5ldmVyeShwaWVjZVJlbGF0aXZlQ29vcmQgPT4ge1xuICAgICAgICAgIGNvbnN0IGFic29sdXRlQ29vcmQgPSBjb29yZC5hZGQocGllY2VSZWxhdGl2ZUNvb3JkKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5pbkJvdW5kcyhhYnNvbHV0ZUNvb3JkKSAmJlxuICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yQXQoYWJzb2x1dGVDb29yZCkgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgcHJpdmF0ZSBjbG9uZUNvbG9ycyA9XG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NvbG9yczogTWF5YmVDb2xvcltdW10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuY29sb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbmV3Q29sb3JzW2ldID0gW107XG4gICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMuY29sb3JzWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBuZXdDb2xvcnNbaV1bal0gPSB0aGlzLmNvbG9yc1tpXVtqXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld0NvbG9ycztcbiAgICAgIH1cblxuICB3aXRoUGllY2UgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlLCBwaWVjZVNwZWNpZmljYXRpb246IFBpZWNlU3BlY2lmaWNhdGlvbikgPT4ge1xuICAgICAgICBhc3NlcnQodGhpcy5waWVjZUZpdHMoY29vcmQsIHBpZWNlU3BlY2lmaWNhdGlvbikpO1xuICAgICAgICBjb25zdCBuZXdDb2xvcnMgPSB0aGlzLmNsb25lQ29sb3JzKClcbiAgICAgICAgcGllY2VTcGVjaWZpY2F0aW9uLmdldFJlbGF0aXZlQ29vcmRzKCkuZm9yRWFjaChyZWxhdGl2ZUNvb3JkID0+IHtcbiAgICAgICAgICBjb25zdCBhYnNvbHV0ZUNvb3JkID0gY29vcmQuYWRkKHJlbGF0aXZlQ29vcmQpO1xuICAgICAgICAgIG5ld0NvbG9yc1thYnNvbHV0ZUNvb3JkLmdldFgoKV1bYWJzb2x1dGVDb29yZC5nZXRZKCldID1cbiAgICAgICAgICAgICAgcGllY2VTcGVjaWZpY2F0aW9uLmdldENvbG9yKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IEdyaWQobmV3Q29sb3JzKTtcbiAgICAgIH1cblxuICBnZXRYRGltZW5zaW9uID0gKCkgPT4geyByZXR1cm4gdGhpcy5jb2xvcnMubGVuZ3RoOyB9XG5cbiAgZ2V0WURpbWVuc2lvbiA9ICgpID0+IHsgcmV0dXJuIHRoaXMuY29sb3JzWzBdLmxlbmd0aDsgfVxufVxuXG5leHBvcnQgdHlwZSBNYXliZUNvbG9yID0gQ29sb3J8dW5kZWZpbmVkXG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBHcmlkIGZyb20gXCIuL2dyaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZERpc3BsYXkge1xuICBwcml2YXRlIG9mZnNldDogQ29vcmRpbmF0ZTtcbiAgcHJpdmF0ZSB4UmVjdERpbWVuc2lvbjogbnVtYmVyO1xuICBwcml2YXRlIHlSZWN0RGltZW5zaW9uOiBudW1iZXI7XG4gIHByaXZhdGUgZW1wdHlDb2xvciA9IG5ldyBDb2xvcihcIiNCQjI1MjhcIik7XG4gIHByaXZhdGUgZHJhd1JlY3RhbmdsZTogKGNvbG9yOiBDb2xvciwgc3RhcnRDb29yZDogQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeFJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeVJlY3REaW1lbnNpb246IG51bWJlcikgPT4gdm9pZDtcbiAgY29uc3RydWN0b3Iob2Zmc2V0OiBDb29yZGluYXRlLCB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICBkcmF3UmVjdGFuZ2xlOiAoY29sb3I6IENvbG9yLCBzdGFydENvb3JkOiBDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnhSZWN0RGltZW5zaW9uID0geFJlY3REaW1lbnNpb247XG4gICAgdGhpcy55UmVjdERpbWVuc2lvbiA9IHlSZWN0RGltZW5zaW9uO1xuICAgIHRoaXMuZHJhd1JlY3RhbmdsZSA9IGRyYXdSZWN0YW5nbGU7XG4gIH1cblxuICBkcmF3ID1cbiAgICAgIChncmlkOiBHcmlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IGdyaWQuZ2V0Q29sb3JzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xvcnNbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW2ldW2pdO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRYID0gaSAqIHRoaXMueFJlY3REaW1lbnNpb247XG4gICAgICAgICAgICBjb25zdCBzdGFydFkgPSBqICogdGhpcy55UmVjdERpbWVuc2lvbjtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0Q29vcmRXaXRoT2Zmc2V0ID1cbiAgICAgICAgICAgICAgICAobmV3IENvb3JkaW5hdGUoc3RhcnRYLCBzdGFydFkpKS5hZGQodGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5kcmF3UmVjdGFuZ2xlKGNvbG9yLCBzdGFydENvb3JkV2l0aE9mZnNldCxcbiAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgdGhpcy54UmVjdERpbWVuc2lvbiwgdGhpcy55UmVjdERpbWVuc2lvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmRyYXdSZWN0YW5nbGUodGhpcy5lbXB0eUNvbG9yLCBzdGFydENvb3JkV2l0aE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueFJlY3REaW1lbnNpb24sIHRoaXMueVJlY3REaW1lbnNpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gIHRvR3JpZENvb3JkID1cbiAgICAgIChjb29yZDogQ29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCByZWxhdGl2ZUNvb3JkID0gY29vcmQuc3VidHJhY3QodGhpcy5vZmZzZXQpO1xuICAgICAgICBjb25zdCBncmlkWCA9IE1hdGgucm91bmQocmVsYXRpdmVDb29yZC5nZXRYKCkgLyB0aGlzLnhSZWN0RGltZW5zaW9uKTtcbiAgICAgICAgY29uc3QgZ3JpZFkgPSBNYXRoLnJvdW5kKHJlbGF0aXZlQ29vcmQuZ2V0WSgpIC8gdGhpcy55UmVjdERpbWVuc2lvbik7XG4gICAgICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZShncmlkWCwgZ3JpZFkpO1xuICAgICAgfVxuXG4gIGdldFhEaW1lbnNpb24gPVxuICAgICAgKGdyaWQ6IEdyaWQpID0+IHsgcmV0dXJuIHRoaXMueFJlY3REaW1lbnNpb24gKiBncmlkLmdldFhEaW1lbnNpb24oKTsgfVxuXG4gIGdldFlEaW1lbnNpb24gPVxuICAgICAgKGdyaWQ6IEdyaWQpID0+IHsgcmV0dXJuIHRoaXMueFJlY3REaW1lbnNpb24gKiBncmlkLmdldFhEaW1lbnNpb24oKTsgfVxufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9jb29yZGluYXRlXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgR2FtZURpc3BsYXkgZnJvbSBcIi4vZ2FtZV9kaXNwbGF5XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCI7XG5pbXBvcnQgSW50ZXJhY3Rpb25IYW5kbGVyIGZyb20gXCIuL2ludGVyYWN0aW9uX2hhbmRsZXJcIjtcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSBcIi4vaW52ZW50b3J5XCI7XG5pbXBvcnQgUGllY2VTcGVjaWZpY2F0aW9uIGZyb20gXCIuL3BpZWNlX3NwZWNpZmljYXRpb25cIjtcblxuY29uc3Qgc3RhcnRHYW1lQnV0dG9uID1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWdhbWVcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgZnVuY3Rpb24gcHJldmVudEJlaGF2aW9yKGU6IFRvdWNoRXZlbnQpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgcHJldmVudEJlaGF2aW9yLCB7cGFzc2l2ZSA6IGZhbHNlfSk7XG5cbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic291cmNlXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG5cbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkXCIpLm91dGVySFRNTCA9IFwiXCI7XG4gIGNvbnNvbGUubG9nKFwic3RhcnRpbmcgZ2FtZVwiKTtcbiAgY29uc3QgYm9yZGVyV2lkdGggPSAxMjtcbiAgY29uc3QgZHJhd1JlY3RhbmdsZSA9XG4gICAgICAoY29sb3I6IENvbG9yLCBzdGFydENvb3JkOiBDb29yZGluYXRlLCB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcIiNGOEIyMjlcIjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdChzdGFydENvb3JkLmdldFgoKSwgc3RhcnRDb29yZC5nZXRZKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgeFJlY3REaW1lbnNpb24gKyBib3JkZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICB5UmVjdERpbWVuc2lvbiArIGJvcmRlcldpZHRoKTtcblxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yLmdldEhleCgpO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICAgICAgc3RhcnRDb29yZC5nZXRYKCkgKyBib3JkZXJXaWR0aCwgc3RhcnRDb29yZC5nZXRZKCkgKyBib3JkZXJXaWR0aCxcbiAgICAgICAgICAgIHhSZWN0RGltZW5zaW9uIC0gYm9yZGVyV2lkdGgsIHlSZWN0RGltZW5zaW9uIC0gYm9yZGVyV2lkdGgpO1xuICAgICAgfVxuXG4gIGNvbnN0IG1hcmdpbiA9IGNhbnZhcy53aWR0aCAvIDEwO1xuXG4gIGNvbnN0IGdyaWRYT2Zmc2V0ID0gbWFyZ2luO1xuICBjb25zdCBncmlkWU9mZnNldCA9IG1hcmdpbjtcblxuICBjb25zdCBncmlkWERpbWVuc2lvbiA9IDEyO1xuICBjb25zdCBncmlkWURpbWVuc2lvbiA9IDEyO1xuXG4gIGNvbnN0IHhSZWN0RGltZW5zaW9uID1cbiAgICAgIChjYW52YXMud2lkdGggLSBib3JkZXJXaWR0aCAtICgyICogbWFyZ2luKSkgLyBncmlkWERpbWVuc2lvbjtcbiAgY29uc3QgeVJlY3REaW1lbnNpb24gPSB4UmVjdERpbWVuc2lvbjtcblxuICBjb25zdCBpbnZlbnRvcnlTaXplID0gMztcblxuICBjb25zdCBkcmF3QmFzZUltYWdlID1cbiAgICAgICgpID0+IHtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcIiMxNjVCMzNcIjtcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjb25zdCBib3JkZXJTdGFydFggPSBncmlkWE9mZnNldDtcbiAgICAgICAgY29uc3QgYm9yZGVyU3RhcnRZID0gZ3JpZFlPZmZzZXQ7XG4gICAgICAgIGNvbnN0IGJvcmRlckVuZFggPSB4UmVjdERpbWVuc2lvbiAqIGdyaWRYRGltZW5zaW9uICsgYm9yZGVyV2lkdGg7XG4gICAgICAgIGNvbnN0IGJvcmRlckVuZFkgPSB5UmVjdERpbWVuc2lvbiAqIGdyaWRZRGltZW5zaW9uICsgYm9yZGVyV2lkdGg7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCIjRjhCMjI5XCI7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoYm9yZGVyU3RhcnRYLCBib3JkZXJTdGFydFksIGJvcmRlckVuZFgsIGJvcmRlckVuZFkpO1xuICAgICAgICBjb25zdCBpbWFnZVN0YXJ0WCA9IGdyaWRYT2Zmc2V0ICsgYm9yZGVyV2lkdGg7XG4gICAgICAgIGNvbnN0IGltYWdlU3RhcnRZID0gZ3JpZFlPZmZzZXQgKyBib3JkZXJXaWR0aDtcbiAgICAgICAgY29uc3QgaW1hZ2VFbmRYID0geFJlY3REaW1lbnNpb24gKiBncmlkWERpbWVuc2lvbiAtIGJvcmRlcldpZHRoO1xuICAgICAgICBjb25zdCBpbWFnZUVuZFkgPSB5UmVjdERpbWVuc2lvbiAqIGdyaWRZRGltZW5zaW9uIC0gYm9yZGVyV2lkdGg7XG4gICAgICAgIGNvbnN0IHdvcmRzID1cbiAgICAgICAgICAgIFsgXCJXSEFUXCIsIFwiREVDT1JBVElPTlNcIiwgXCJBUkVcIiwgXCJPTlwiLCBcIlRIRVwiLCBcIlRSRUVcIiwgXCI/XCIgXTtcbiAgICAgICAgY29uc3QgdGV4dFNwYWNlID0gMjA7XG4gICAgICAgIGNvbnN0IHRleHRTaXplID0gKGltYWdlRW5kWSAtIGltYWdlU3RhcnRZKSAvIHdvcmRzLmxlbmd0aCAtIHRleHRTcGFjZTtcbiAgICAgICAgY29udGV4dC5mb250ID0gYGJvbGQgJHt0ZXh0U2l6ZX1weCBNb3VudGFpbnMgb2YgQ2hyaXN0bWFzYDtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY29uc3QgdGV4dE9mZnNldFggPSAoaW1hZ2VTdGFydFggKyBpbWFnZUVuZFgpIC8gMiArIDIgKiBib3JkZXJXaWR0aDtcbiAgICAgICAgY29uc3QgdGV4dE9mZnNldFkgPSBpbWFnZVN0YXJ0WSArIDE1MDtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIGltYWdlU3RhcnRYLCBpbWFnZVN0YXJ0WSwgaW1hZ2VFbmRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUVuZFkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29udGV4dC5maWxsVGV4dCh3b3Jkc1tpXSwgdGV4dE9mZnNldFgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0T2Zmc2V0WSArICgodGV4dFNpemUgKyB0ZXh0U3BhY2UpICogaSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgY29uc3QgZ2FtZSA9IEdhbWUuY3JlYXRlKGdyaWRYRGltZW5zaW9uLCBncmlkWURpbWVuc2lvbiwgaW52ZW50b3J5U2l6ZSk7XG5cbiAgY29uc3QgZ2FtZURpc3BsYXkgPSBuZXcgR2FtZURpc3BsYXkoXG4gICAgICBuZXcgQ29vcmRpbmF0ZShncmlkWE9mZnNldCwgZ3JpZFlPZmZzZXQpLFxuICAgICAgbmV3IENvb3JkaW5hdGUoZ3JpZFhPZmZzZXQsIGdyaWRZRGltZW5zaW9uICogeVJlY3REaW1lbnNpb24gKyBtYXJnaW4gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aCArIG1hcmdpbiksXG4gICAgICBncmlkWERpbWVuc2lvbiAqIHhSZWN0RGltZW5zaW9uLCB4UmVjdERpbWVuc2lvbiwgeVJlY3REaW1lbnNpb24sXG4gICAgICBkcmF3UmVjdGFuZ2xlLCBkcmF3QmFzZUltYWdlKTtcblxuICBmdW5jdGlvbiBjbGVhckRpc3BsYXkoKSB7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGNvbnN0IGludGVyYWN0aW9uSGFuZGxlciA9XG4gICAgICBuZXcgSW50ZXJhY3Rpb25IYW5kbGVyKGdhbWUsIGdhbWVEaXNwbGF5LCBjbGVhckRpc3BsYXkpO1xuXG4gIGNvbnN0IGV2ZW50VG9Db29yZGluYXRlID0gKGU6IE1vdXNlRXZlbnR8VG91Y2hFdmVudCkgPT4ge1xuICAgIGNvbnN0IHggPSAoZSBhcyBUb3VjaEV2ZW50KS5jaGFuZ2VkVG91Y2hlc1xuICAgICAgICAgICAgICAgICAgPyAoZSBhcyBUb3VjaEV2ZW50KS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWFxuICAgICAgICAgICAgICAgICAgOiAoZSBhcyBNb3VzZUV2ZW50KS5wYWdlWDtcbiAgICBjb25zdCB5ID0gKGUgYXMgVG91Y2hFdmVudCkuY2hhbmdlZFRvdWNoZXNcbiAgICAgICAgICAgICAgICAgID8gKGUgYXMgVG91Y2hFdmVudCkuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVlcbiAgICAgICAgICAgICAgICAgIDogKGUgYXMgTW91c2VFdmVudCkucGFnZVk7XG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlKHgsIHkpO1xuICB9O1xuXG4gIGNvbnN0IGNvbnZlcnQgPSAoZjogKGNvb3JkOiBDb29yZGluYXRlKSA9PiB2b2lkKSA9PiB7XG4gICAgcmV0dXJuIChlOiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQpID0+IGYoZXZlbnRUb0Nvb3JkaW5hdGUoZSkpXG4gIH07XG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY29udmVydChpbnRlcmFjdGlvbkhhbmRsZXIuaGFuZGxlUHJlc3MpKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgY29udmVydChpbnRlcmFjdGlvbkhhbmRsZXIuaGFuZGxlRHJhZykpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgY29udmVydChpbnRlcmFjdGlvbkhhbmRsZXIuaGFuZGxlUmVsZWFzZSkpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGNvbnZlcnQoaW50ZXJhY3Rpb25IYW5kbGVyLmhhbmRsZUNhbmNlbCkpO1xuXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb252ZXJ0KGludGVyYWN0aW9uSGFuZGxlci5oYW5kbGVQcmVzcykpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjb252ZXJ0KGludGVyYWN0aW9uSGFuZGxlci5oYW5kbGVEcmFnKSk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydChpbnRlcmFjdGlvbkhhbmRsZXIuaGFuZGxlUmVsZWFzZSkpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnZlcnQoaW50ZXJhY3Rpb25IYW5kbGVyLmhhbmRsZUNhbmNlbCkpO1xufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9jb29yZGluYXRlXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgR2FtZURpc3BsYXkgZnJvbSBcIi4vZ2FtZV9kaXNwbGF5XCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiLi9ncmlkXCI7XG5pbXBvcnQgR3JpZERpc3BsYXkgZnJvbSBcIi4vZ3JpZF9kaXNwbGF5XCI7XG5pbXBvcnQgSW52ZW50b3J5LCB7SXRlbX0gZnJvbSBcIi4vaW52ZW50b3J5XCI7XG5pbXBvcnQgSW52ZW50b3J5RGlzcGxheSBmcm9tIFwiLi9pbnZlbnRvcnlfZGlzcGxheVwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbiBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uXCI7XG5pbXBvcnQgUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheSBmcm9tIFwiLi9waWVjZV9zcGVjaWZpY2F0aW9uX2Rpc3BsYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJhY3Rpb25IYW5kbGVyIHtcbiAgcHJpdmF0ZSBzZWxlY3RlZEl0ZW06IFNlbGVjdGVkSXRlbXx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBnYW1lOiBHYW1lO1xuICBwcml2YXRlIGdhbWVEaXNwbGF5OiBHYW1lRGlzcGxheTtcbiAgcHJpdmF0ZSBjbGVhckRpc3BsYXk6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSwgZ2FtZURpc3BsYXk6IEdhbWVEaXNwbGF5LCBjbGVhckRpc3BsYXk6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuZ2FtZURpc3BsYXkgPSBnYW1lRGlzcGxheTtcbiAgICB0aGlzLmdhbWVEaXNwbGF5LmRyYXcoZ2FtZSk7XG4gICAgdGhpcy5jbGVhckRpc3BsYXkgPSBjbGVhckRpc3BsYXk7XG4gIH1cblxuICBoYW5kbGVQcmVzcyA9XG4gICAgICAoY29vcmQ6IENvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgbWF5YmVJdGVtV2l0aE9mZnNldCA9XG4gICAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmdldEludmVudG9yeURpc3BsYXkoKS5pdGVtQXRXaXRoT2Zmc2V0KFxuICAgICAgICAgICAgICAgIGNvb3JkLCB0aGlzLmdhbWUuZ2V0SW52ZW50b3J5KCkpO1xuICAgICAgICBpZiAobWF5YmVJdGVtV2l0aE9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IG1heWJlSXRlbVdpdGhPZmZzZXRbMF07XG4gICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nZXRJbnZlbnRvcnlEaXNwbGF5KCkuc2VsZWN0SXRlbShpdGVtKTtcbiAgICAgICAgICBjb25zdCBwaWVjZU9mZnNldCA9IG1heWJlSXRlbVdpdGhPZmZzZXRbMV07XG4gICAgICAgICAgY29uc3Qgc2VsZWN0aW9uT2Zmc2V0ID0gY29vcmQuc3VidHJhY3QocGllY2VPZmZzZXQpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbmV3IFNlbGVjdGVkSXRlbShzZWxlY3Rpb25PZmZzZXQsIGl0ZW0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gIGhhbmRsZURyYWcgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5jbGVhckRpc3BsYXkoKTtcbiAgICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmRyYXcodGhpcy5nYW1lKTtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rpb25PZmZzZXQgPSB0aGlzLnNlbGVjdGVkSXRlbS5nZXRTZWxlY3Rpb25PZmZzZXQoKTtcbiAgICAgICAgICBjb25zdCBwaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5ID1cbiAgICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5jcmVhdGVQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5KFxuICAgICAgICAgICAgICAgICAgY29vcmQuc3VidHJhY3Qoc2VsZWN0aW9uT2Zmc2V0KSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmdldEl0ZW0oKS5nZXRQaWVjZVNwZWNpZmljYXRpb24oKSk7XG4gICAgICAgICAgcGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheS5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICBwcml2YXRlIHJlc2V0RGlzcGxheSA9XG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmdhbWVEaXNwbGF5LmdldEludmVudG9yeURpc3BsYXkoKS5yZW1vdmVTZWxlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5jbGVhckRpc3BsYXkoKTtcbiAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5kcmF3KHRoaXMuZ2FtZSk7XG4gICAgICB9XG5cbiAgaGFuZGxlUmVsZWFzZSA9XG4gICAgICAoY29vcmQ6IENvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW0uZ2V0SXRlbSgpO1xuICAgICAgICAgIGNvbnN0IHBpZWNlQ29vcmQgPVxuICAgICAgICAgICAgICBjb29yZC5zdWJ0cmFjdCh0aGlzLnNlbGVjdGVkSXRlbS5nZXRTZWxlY3Rpb25PZmZzZXQoKSk7XG4gICAgICAgICAgY29uc3QgZ3JpZENvb3JkID1cbiAgICAgICAgICAgICAgdGhpcy5nYW1lRGlzcGxheS5nZXRHcmlkRGlzcGxheSgpLnRvR3JpZENvb3JkKHBpZWNlQ29vcmQpO1xuICAgICAgICAgIGlmICh0aGlzLmdhbWUuZ2V0R3JpZCgpLnBpZWNlRml0cyhncmlkQ29vcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0UGllY2VTcGVjaWZpY2F0aW9uKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUgPSB0aGlzLmdhbWUud2l0aFBsYWNlZEl0ZW0oZ3JpZENvb3JkLCBpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNldERpc3BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gIGhhbmRsZUNhbmNlbCA9IChjb29yZDogQ29vcmRpbmF0ZSkgPT4geyB0aGlzLnJlc2V0RGlzcGxheSgpOyB9XG59XG5cbmNsYXNzIFNlbGVjdGVkSXRlbSB7XG4gIHByaXZhdGUgc2VsZWN0aW9uT2Zmc2V0OiBDb29yZGluYXRlO1xuICBwcml2YXRlIGl0ZW06IEl0ZW07XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0aW9uT2Zmc2V0OiBDb29yZGluYXRlLCBpdGVtOiBJdGVtKSB7XG4gICAgdGhpcy5zZWxlY3Rpb25PZmZzZXQgPSBzZWxlY3Rpb25PZmZzZXQ7XG4gICAgdGhpcy5pdGVtID0gaXRlbTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbk9mZnNldCA9ICgpID0+IHRoaXMuc2VsZWN0aW9uT2Zmc2V0O1xuICBnZXRJdGVtID0gKCkgPT4gdGhpcy5pdGVtO1xufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9jb29yZGluYXRlXCI7XG5pbXBvcnQgUGllY2VTcGVjaWZpY2F0aW9uIGZyb20gXCIuL3BpZWNlX3NwZWNpZmljYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52ZW50b3J5IHtcbiAgcHJpdmF0ZSBzaXplOiBudW1iZXI7XG4gIHByaXZhdGUgaXRlbXM6IEFycmF5PEl0ZW18dW5kZWZpbmVkPjtcblxuICBzdGF0aWMgd2l0aFBpZWNlU3BlY2lmaWNhdGlvbnMobWVtYmVyczogUGllY2VTcGVjaWZpY2F0aW9uW10pIHtcbiAgICByZXR1cm4gbmV3IEludmVudG9yeShtZW1iZXJzLm1hcChtZW1iZXIgPT4gbmV3IEl0ZW0obWVtYmVyKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihpdGVtczogQXJyYXk8SXRlbXx1bmRlZmluZWQ+KSB7IHRoaXMuaXRlbXMgPSBpdGVtczsgfVxuXG4gIGdldEl0ZW1zID0gKCkgPT4geyByZXR1cm4gdGhpcy5pdGVtczsgfVxuXG4gIHdpdGhvdXRJdGVtID1cbiAgICAgIChpdGVtOiBJdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gdGhpcy5pdGVtcy5tYXAoaSA9PiBpID09PSBpdGVtID8gdW5kZWZpbmVkIDogaSk7XG4gICAgICAgIHJldHVybiBuZXcgSW52ZW50b3J5KG5ld0l0ZW1zKTtcbiAgICAgIH1cblxuICBpc0VtcHR5ID1cbiAgICAgICgpID0+IHsgcmV0dXJuIHRoaXMuaXRlbXMuZXZlcnkobWF5YmVJdGVtID0+IG1heWJlSXRlbSA9PT0gdW5kZWZpbmVkKTsgfVxufVxuXG5leHBvcnQgY2xhc3MgSXRlbSB7XG4gIHByaXZhdGUgcGllY2VTcGVjaWZpY2F0aW9uOiBQaWVjZVNwZWNpZmljYXRpb247XG5cbiAgY29uc3RydWN0b3IocGllY2VTcGVjaWZpY2F0aW9uOiBQaWVjZVNwZWNpZmljYXRpb24pIHtcbiAgICB0aGlzLnBpZWNlU3BlY2lmaWNhdGlvbiA9IHBpZWNlU3BlY2lmaWNhdGlvbjtcbiAgfVxuXG4gIGdldFBpZWNlU3BlY2lmaWNhdGlvbiA9ICgpID0+IHsgcmV0dXJuIHRoaXMucGllY2VTcGVjaWZpY2F0aW9uOyB9XG59XG4iLCJpbXBvcnQgQ29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCBDb29yZGluYXRlIGZyb20gXCIuL2Nvb3JkaW5hdGVcIjtcbmltcG9ydCBJbnZlbnRvcnksIHtJdGVtfSBmcm9tIFwiLi9pbnZlbnRvcnlcIjtcbmltcG9ydCBQaWVjZVNwZWNpZmljYXRpb24gZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvblwiO1xuaW1wb3J0IFBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXkgZnJvbSBcIi4vcGllY2Vfc3BlY2lmaWNhdGlvbl9kaXNwbGF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludmVudG9yeURpc3BsYXkge1xuICBwcml2YXRlIG9mZnNldDogQ29vcmRpbmF0ZTtcbiAgcHJpdmF0ZSB4UmVjdERpbWVuc2lvbjogbnVtYmVyO1xuICBwcml2YXRlIHlSZWN0RGltZW5zaW9uOiBudW1iZXI7XG4gIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcbiAgcHJpdmF0ZSBkcmF3UmVjdGFuZ2xlOiAoY29sb3I6IENvbG9yLCBzdGFydENvb3JkOiBDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyKSA9PiB2b2lkO1xuICBwcml2YXRlIHNlbGVjdGVkSXRlbTogSXRlbXx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3Iob2Zmc2V0OiBDb29yZGluYXRlLCB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyLCB3aWR0aDogbnVtYmVyLFxuICAgICAgICAgICAgICBkcmF3UmVjdGFuZ2xlOiAoY29sb3I6IENvbG9yLCBzdGFydENvb3JkOiBDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnhSZWN0RGltZW5zaW9uID0geFJlY3REaW1lbnNpb247XG4gICAgdGhpcy55UmVjdERpbWVuc2lvbiA9IHlSZWN0RGltZW5zaW9uO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmRyYXdSZWN0YW5nbGUgPSBkcmF3UmVjdGFuZ2xlO1xuICB9XG5cbiAgY3JlYXRlUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheXMgPVxuICAgICAgKGludmVudG9yeTogSW52ZW50b3J5KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gaW52ZW50b3J5LmdldEl0ZW1zKCk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlzOiBBcnJheTxQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5fHVuZGVmaW5lZD4gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1heWJlSXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgIGlmIChtYXliZUl0ZW0gIT09IHVuZGVmaW5lZCAmJiBtYXliZUl0ZW0gIT09IHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICBjb25zdCB4TWFyZ2luID0gdGhpcy54UmVjdERpbWVuc2lvbiAvIDI7XG4gICAgICAgICAgICBjb25zdCB5TWFyZ2luID0gdGhpcy55UmVjdERpbWVuc2lvbiAvIDI7XG4gICAgICAgICAgICBjb25zdCBzdGFydFggPSAoaSAqIHRoaXMud2lkdGggLyBpdGVtcy5sZW5ndGgpICsgeE1hcmdpbjtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0WSA9IHlNYXJnaW47XG4gICAgICAgICAgICBjb25zdCBzdGFydENvb3JkID0gbmV3IENvb3JkaW5hdGUoc3RhcnRYLCBzdGFydFkpO1xuICAgICAgICAgICAgY29uc3QgcGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheSA9IG5ldyBQaWVjZVNwZWNpZmljYXRpb25EaXNwbGF5KFxuICAgICAgICAgICAgICAgIG1heWJlSXRlbS5nZXRQaWVjZVNwZWNpZmljYXRpb24oKSwgc3RhcnRDb29yZC5hZGQodGhpcy5vZmZzZXQpLFxuICAgICAgICAgICAgICAgIHRoaXMueFJlY3REaW1lbnNpb24sIHRoaXMueVJlY3REaW1lbnNpb24sIHRoaXMuZHJhd1JlY3RhbmdsZSk7XG4gICAgICAgICAgICBkaXNwbGF5c1tpXSA9IHBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaXNwbGF5cztcbiAgICAgIH1cblxuICBkcmF3ID1cbiAgICAgIChpbnZlbnRvcnk6IEludmVudG9yeSkgPT4ge1xuICAgICAgICBjb25zdCBkaXNwbGF5cyA9IHRoaXMuY3JlYXRlUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheXMoaW52ZW50b3J5KVxuICAgICAgICBkaXNwbGF5cy5mb3JFYWNoKG1heWJlRGlzcGxheSA9PiB7XG4gICAgICAgICAgaWYgKG1heWJlRGlzcGxheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtYXliZURpc3BsYXkuZHJhdygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICBpdGVtQXRXaXRoT2Zmc2V0OiAoY29vcmQ6IENvb3JkaW5hdGUsXG4gICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnk6IEludmVudG9yeSkgPT4gW0l0ZW0sIENvb3JkaW5hdGVdIHwgdW5kZWZpbmVkID1cbiAgICAgIChjb29yZDogQ29vcmRpbmF0ZSwgaW52ZW50b3J5OiBJbnZlbnRvcnkpID0+IHtcbiAgICAgICAgY29uc3QgZGlzcGxheXMgPSB0aGlzLmNyZWF0ZVBpZWNlU3BlY2lmaWNhdGlvbkRpc3BsYXlzKGludmVudG9yeSlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1heWJlRGlzcGxheSA9IGRpc3BsYXlzW2ldO1xuICAgICAgICAgIGlmIChtYXliZURpc3BsYXkgIT09IHVuZGVmaW5lZCAmJiBtYXliZURpc3BsYXkuY29udGFpbnMoY29vcmQpKSB7XG4gICAgICAgICAgICByZXR1cm4gWyBpbnZlbnRvcnkuZ2V0SXRlbXMoKVtpXSwgZGlzcGxheXNbaV0uZ2V0T2Zmc2V0KCkgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICBzZWxlY3RJdGVtID0gKGl0ZW06IEl0ZW0pID0+IHsgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtOyB9XG5cbiAgcmVtb3ZlU2VsZWN0aW9uID0gKCkgPT4geyB0aGlzLnNlbGVjdGVkSXRlbSA9IHVuZGVmaW5lZDsgfVxufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9jb29yZGluYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlU3BlY2lmaWNhdGlvbiB7XG4gIHByaXZhdGUgY29sb3I6IENvbG9yO1xuICBwcml2YXRlIHJlbGF0aXZlQ29vcmRzOiBDb29yZGluYXRlW11cbiAgY29uc3RydWN0b3IoY29sb3I6IENvbG9yLCByZWxhdGl2ZUNvb3JkczogQ29vcmRpbmF0ZVtdKSB7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMucmVsYXRpdmVDb29yZHMgPSByZWxhdGl2ZUNvb3JkcztcbiAgfVxuXG4gIGdldENvbG9yID0gKCkgPT4geyByZXR1cm4gdGhpcy5jb2xvcjsgfVxuXG4gIGdldFJlbGF0aXZlQ29vcmRzID0gKCkgPT4geyByZXR1cm4gdGhpcy5yZWxhdGl2ZUNvb3JkczsgfVxufVxuIiwiaW1wb3J0IENvbG9yIGZyb20gXCIuL2NvbG9yXCI7XG5pbXBvcnQgQ29vcmRpbmF0ZSBmcm9tIFwiLi9jb29yZGluYXRlXCI7XG5pbXBvcnQgUGllY2VTcGVjaWZpY2F0aW9uIGZyb20gXCIuL3BpZWNlX3NwZWNpZmljYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllY2VTcGVjaWZpY2F0aW9uRGlzcGxheSB7XG4gIHByaXZhdGUgcGllY2VTcGVjaWZpY2F0aW9uOiBQaWVjZVNwZWNpZmljYXRpb247XG4gIHByaXZhdGUgb2Zmc2V0OiBDb29yZGluYXRlO1xuICBwcml2YXRlIHhSZWN0RGltZW5zaW9uOiBudW1iZXI7XG4gIHByaXZhdGUgeVJlY3REaW1lbnNpb246IG51bWJlcjtcbiAgcHJpdmF0ZSBkcmF3UmVjdGFuZ2xlOiAoY29sb3I6IENvbG9yLCBzdGFydENvb3JkOiBDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB5UmVjdERpbWVuc2lvbjogbnVtYmVyKSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcihwaWVjZVNwZWNpZmljYXRpb246IFBpZWNlU3BlY2lmaWNhdGlvbiwgb2Zmc2V0OiBDb29yZGluYXRlLFxuICAgICAgICAgICAgICB4UmVjdERpbWVuc2lvbjogbnVtYmVyLCB5UmVjdERpbWVuc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICBkcmF3UmVjdGFuZ2xlOiAoY29sb3I6IENvbG9yLCBzdGFydENvb3JkOiBDb29yZGluYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeFJlY3REaW1lbnNpb246IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlSZWN0RGltZW5zaW9uOiBudW1iZXIpID0+IHZvaWQpIHtcbiAgICB0aGlzLnhSZWN0RGltZW5zaW9uID0geFJlY3REaW1lbnNpb247XG4gICAgdGhpcy55UmVjdERpbWVuc2lvbiA9IHlSZWN0RGltZW5zaW9uO1xuICAgIHRoaXMuZHJhd1JlY3RhbmdsZSA9IGRyYXdSZWN0YW5nbGU7XG4gICAgdGhpcy5waWVjZVNwZWNpZmljYXRpb24gPSBwaWVjZVNwZWNpZmljYXRpb247XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gIH1cblxuICBkcmF3ID1cbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5waWVjZVNwZWNpZmljYXRpb24uZ2V0UmVsYXRpdmVDb29yZHMoKS5mb3JFYWNoKHJlbGF0aXZlQ29vcmQgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9IHJlbGF0aXZlQ29vcmQuZ2V0WCgpICogdGhpcy54UmVjdERpbWVuc2lvbjtcbiAgICAgICAgICBjb25zdCBzdGFydFkgPSByZWxhdGl2ZUNvb3JkLmdldFkoKSAqIHRoaXMueVJlY3REaW1lbnNpb247XG4gICAgICAgICAgY29uc3Qgc3RhcnRDb29yZCA9IG5ldyBDb29yZGluYXRlKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICAgICAgICB0aGlzLmRyYXdSZWN0YW5nbGUodGhpcy5waWVjZVNwZWNpZmljYXRpb24uZ2V0Q29sb3IoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZC5hZGQodGhpcy5vZmZzZXQpLCB0aGlzLnhSZWN0RGltZW5zaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnlSZWN0RGltZW5zaW9uKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgY29udGFpbnMgPVxuICAgICAgKGNvb3JkOiBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnBpZWNlU3BlY2lmaWNhdGlvbi5nZXRSZWxhdGl2ZUNvb3JkcygpLnNvbWUoXG4gICAgICAgICAgICByZWxhdGl2ZUNvb3JkID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeE1hcmdpbiA9IDIwO1xuICAgICAgICAgICAgICBjb25zdCB5TWFyZ2luID0gMjA7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXJ0WCA9IHJlbGF0aXZlQ29vcmQuZ2V0WCgpICogdGhpcy54UmVjdERpbWVuc2lvbjtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhcnRZID0gcmVsYXRpdmVDb29yZC5nZXRZKCkgKiB0aGlzLnlSZWN0RGltZW5zaW9uO1xuICAgICAgICAgICAgICBjb25zdCBzdGFydENvb3JkV2l0aE9mZnNldCA9XG4gICAgICAgICAgICAgICAgICAobmV3IENvb3JkaW5hdGUoc3RhcnRYLCBzdGFydFkpKS5hZGQodGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgICBjb25zdCBpblggPVxuICAgICAgICAgICAgICAgICAgY29vcmQuZ2V0WCgpID49IHN0YXJ0Q29vcmRXaXRoT2Zmc2V0LmdldFgoKSAtIHhNYXJnaW4gJiZcbiAgICAgICAgICAgICAgICAgIGNvb3JkLmdldFgoKSA8IHN0YXJ0Q29vcmRXaXRoT2Zmc2V0LmdldFgoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54UmVjdERpbWVuc2lvbiArIHhNYXJnaW47XG4gICAgICAgICAgICAgIGNvbnN0IGluWSA9XG4gICAgICAgICAgICAgICAgICBjb29yZC5nZXRZKCkgPj0gc3RhcnRDb29yZFdpdGhPZmZzZXQuZ2V0WSgpIC0geU1hcmdpbiAmJlxuICAgICAgICAgICAgICAgICAgY29vcmQuZ2V0WSgpIDwgc3RhcnRDb29yZFdpdGhPZmZzZXQuZ2V0WSgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnlSZWN0RGltZW5zaW9uICsgeU1hcmdpbjtcbiAgICAgICAgICAgICAgcmV0dXJuIGluWCAmJiBpblk7XG4gICAgICAgICAgICB9KVxuICAgICAgfVxuXG4gIGdldFBpZWNlU3BlY2lmaWNhdGlvbiA9ICgpID0+IHsgcmV0dXJuIHRoaXMucGllY2VTcGVjaWZpY2F0aW9uOyB9XG5cbiAgZ2V0T2Zmc2V0ID0gKCkgPT4geyByZXR1cm4gdGhpcy5vZmZzZXQ7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=