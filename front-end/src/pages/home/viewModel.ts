import { useState, useEffect } from "react";
import { ItemRepository } from "../../service/repositories/item/itemRepository";
import { ItemService } from "../../service/remotes/item/item";
import { ItemsType } from "../../service/repositories/item/type";

const useViewModel = () => {
  const [item, setItem] = useState<ItemsType[] | []>([]);
  const getItemInfo = new ItemRepository(new ItemService());

  useEffect(() => {
    getItemInfo.getItems().then((res) => {
      setItem(res);
    });
  }, []);

  return { item };
};
export default useViewModel;
