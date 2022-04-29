export type ProductType = {
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
  state?: string;
};

export type SearchResult = {
  author: Author;
  categories: string[];
  items: ProductType[];
};

export type Author = {
  name: string;
  lastname: string;
};
