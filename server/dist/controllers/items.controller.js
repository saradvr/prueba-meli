"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getItem = exports.searchItems = void 0;
var axios_1 = __importDefault(require("axios"));
var authorName = "Sara";
var authorLastName = "Del Valle";
exports.searchItems = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var q, search, categories, categoriesBreadcrumbs, items, searchResult, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                q = req.query.q;
                return [4 /*yield*/, axios_1["default"].get("https://api.mercadolibre.com/sites/MLA/search?q=" + q)];
            case 1:
                search = (_a.sent()).data;
                return [4 /*yield*/, axios_1["default"].get("https://api.mercadolibre.com/categories/" + search.results[0].category_id)];
            case 2:
                categories = (_a.sent()).data;
                categoriesBreadcrumbs = categories.path_from_root.map(function (el) { return el.name; });
                items = search.results.map(function (el) { return ({
                    id: el.id,
                    title: el.title,
                    price: {
                        currency: el.currency_id,
                        amount: el.price,
                        decimals: 0
                    },
                    picture: el.thumbnail,
                    condition: el.condition,
                    free_shipping: el.shipping.free_shipping
                }); });
                searchResult = {
                    author: {
                        name: authorName,
                        lastname: authorLastName
                    },
                    categories: categoriesBreadcrumbs,
                    items: items
                };
                res
                    .status(200)
                    .json({ message: "Solicitud cargada con éxito.", searchResult: searchResult });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(400).json({ message: "Error al cargar la solicitud.", error: error_1 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, product, description, categories, categoriesBreadcrumbs, item, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                id = req.params.id;
                return [4 /*yield*/, axios_1["default"].get("https://api.mercadolibre.com/items/" + id)];
            case 1:
                product = (_a.sent()).data;
                return [4 /*yield*/, axios_1["default"].get("https://api.mercadolibre.com/items/" + id + "/description")];
            case 2:
                description = (_a.sent()).data;
                return [4 /*yield*/, axios_1["default"].get("https://api.mercadolibre.com/categories/" + product.category_id)];
            case 3:
                categories = (_a.sent()).data;
                categoriesBreadcrumbs = categories.path_from_root.map(function (el) { return el.name; });
                item = {
                    author: {
                        name: authorName,
                        lastname: authorLastName
                    },
                    item: {
                        id: id,
                        title: product.title,
                        price: {
                            currency: product.currency_id,
                            amount: product.price,
                            decimals: 0
                        },
                        picture: product.pictures[0].url,
                        condition: product.condition,
                        free_shipping: product.shipping.free_shipping,
                        sold_quantity: product.sold_quantity,
                        description: description.plain_text,
                        categories: categoriesBreadcrumbs
                    }
                };
                res.status(200).json({ message: "Solicitud cargada con éxito.", item: item });
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                res.status(400).json({ message: "Error al cargar la solicitud.", error: error_2 });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
