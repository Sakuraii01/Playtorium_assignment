export type ItemsType = {
  id: number;
  price: number;
  name: string;
  category_id: number;

  category: {
    id: number;
    name: string;
  };

  Picture: {
    id: number;
    item_id: number;
    path: string;
  }[];
};

export type ItemsEntity = {
  category_id: number;
};
