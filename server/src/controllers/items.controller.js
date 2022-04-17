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
      res
        .status(200)
        .json({ message: 'Solicitud cargada con éxito.', id });
    } catch (error) {
      res.status(400).json({ message: 'Error al cargar la solicitud.', error });
    }
  },
};
