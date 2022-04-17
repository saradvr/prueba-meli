const axios = require('axios');

const name = "Sara";
const lastname = "Del Valle";

module.exports = {
  async searchItems(req, res) {
    try {
      res
        .status(200)
        .json({ message: 'Solicitud cargada con éxito.' });
    } catch (error) {
      res.status(400).json({ message: 'Error al cargar la solicitud.', error });
    }
  },
  async getItem(req, res) {
    try {
      const { params: { id } } = req;
      const { data: product } = await axios.get(`https://api.mercadolibre.com/items/${id}`);
      const { data: description } = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
      const { data: categories } = await axios.get(`https://api.mercadolibre.com/categories/${product.category_id}`);
      const item = {
        author: {
          name,
          lastname,
        },
        item: {
          id,
          title: product.title,
          price: {
            currency: product.currency_id,
            amount: product.price,
            decimals: 0,
          },
          picture: product.pictures[0].url,
          condition: product.condition,
          free_shipping: product.shipping.free_shipping,
          sold_quantity: product.sold_quantity,
          description: description.plain_text,
          categories: categories.path_from_root,
        },
      };
      res
        .status(200)
        .json({ message: 'Solicitud cargada con éxito.', item });
    } catch (error) {
      res.status(400).json({ message: 'Error al cargar la solicitud.', error });
    }
  },
};
