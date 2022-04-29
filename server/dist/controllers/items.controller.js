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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = exports.searchItems = void 0;
const axios_1 = __importDefault(require("axios"));
const authorName = "Sara";
const authorLastName = "Del Valle";
exports.searchItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query: { q }, } = req;
        const { data: search } = yield axios_1.default.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`);
        const { data: categories } = yield axios_1.default.get(`https://api.mercadolibre.com/categories/${search.results[0].category_id}`);
        const categoriesBreadcrumbs = categories.path_from_root.map((el) => el.name);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const items = search.results.map((el) => ({
            id: el.id,
            title: el.title,
            price: {
                currency: el.currency_id,
                amount: el.price,
            },
            picture: el.thumbnail,
            condition: el.condition,
            free_shipping: el.shipping.free_shipping,
            state: el.seller_address.state.name,
        }));
        const searchResult = {
            author: {
                name: authorName,
                lastname: authorLastName,
            },
            categories: categoriesBreadcrumbs,
            items,
        };
        res
            .status(200)
            .json({ message: "Solicitud cargada con éxito.", searchResult });
    }
    catch (error) {
        res.status(400).json({ message: "Error al cargar la solicitud.", error });
    }
});
exports.getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, } = req;
        const { data: product } = yield axios_1.default.get(`https://api.mercadolibre.com/items/${id}`);
        const { data: description } = yield axios_1.default.get(`https://api.mercadolibre.com/items/${id}/description`);
        const { data: categories } = yield axios_1.default.get(`https://api.mercadolibre.com/categories/${product.category_id}`);
        const categoriesBreadcrumbs = categories.path_from_root.map((el) => el.name);
        const item = {
            author: {
                name: authorName,
                lastname: authorLastName,
            },
            item: {
                id,
                title: product.title,
                price: {
                    currency: product.currency_id,
                    amount: product.price,
                },
                picture: product.pictures[0].url,
                condition: product.condition,
                free_shipping: product.shipping.free_shipping,
                sold_quantity: product.sold_quantity,
                description: description.plain_text,
                categories: categoriesBreadcrumbs,
                state: product.seller_address.state.name,
            },
        };
        res.status(200).json({ message: "Solicitud cargada con éxito.", item });
    }
    catch (error) {
        res.status(400).json({ message: "Error al cargar la solicitud.", error });
    }
});
