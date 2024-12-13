export type userCartType = {
  id: number;
  item_id: number;
  quantity: number;
  user_id: number;
  Item: {
    id: number;
    name: string;
    price: number;
    category_id: number;
    category: {
      id: number;
      name: string;
    };
  };
};

export type cartEntity = {
  user_id: number;
  item_id: number;
  quantity?: number;
};
