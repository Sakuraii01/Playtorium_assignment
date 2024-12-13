import prisma from "./prisma";
export type ItemType = {
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
export const getItems = async () => {
  try {
    const items = await prisma.item.findMany({
      include: {
        category: true,
        Picture: true,
      },
    });

    return items;
  } catch (error) {
    throw error;
  }
};

export const getItemsByCategory = async (categoryId: number) => {
  try {
    const items = await prisma.item.findMany({
      where: { category_id: categoryId },
      include: {
        category: true,
        Picture: true,
      },
    });
    return items;
  } catch (error) {
    throw error;
  }
};
