import { Item, ItemResponse, SearchResult } from "./../models/items.model";
import axios from "axios";
import { RequestHandler } from "express";

const authorName = "Sara";
const authorLastName = "Del Valle";

export const searchItems: RequestHandler<{ q: string }> = async (req, res) => {
  try {
    const {
      query: { q },
    } = req;
    const { data: search } = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}`
    );
    const { data: categories } = await axios.get(
      `https://api.mercadolibre.com/categories/${search.results[0].category_id}`
    );
    const categoriesBreadcrumbs: string[] = categories.path_from_root.map(
      (el: { id: string; name: string }) => el.name
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items: Item[] = search.results.map((el: any) => ({
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
    const searchResult: SearchResult = {
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
  } catch (error) {
    res.status(400).json({ message: "Error al cargar la solicitud.", error });
  }
};

export const getItem: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { data: product } = await axios.get(
      `https://api.mercadolibre.com/items/${id}`
    );
    const { data: description } = await axios.get(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const { data: categories } = await axios.get(
      `https://api.mercadolibre.com/categories/${product.category_id}`
    );
    const categoriesBreadcrumbs: string[] = categories.path_from_root.map(
      (el: { id: string; name: string }) => el.name
    );
    const item: ItemResponse = {
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
  } catch (error) {
    res.status(400).json({ message: "Error al cargar la solicitud.", error });
  }
};
