export type Item = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
  categories?: string[];
};

export type ItemResponse = {
  author: {
    name: string;
    lastname: string;
  };
  item: Item;
};

export type SearchResult = {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Item[];
};
