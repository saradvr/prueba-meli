export type Item = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
  categories?: string[];
};

export type ItemResponse = {
  author: Author;
  item: Item;
};

export type SearchResult = {
  author: Author;
  categories: string[];
  items: Item[];
};

export type Author = {
  name: string;
  lastname: string;
};
