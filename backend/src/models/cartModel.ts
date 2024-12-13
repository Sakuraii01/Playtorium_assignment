import prisma from "./prisma";
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
export const getUserCart = async (userId: number) => {
  try {
    const userCart = await prisma.cart.findMany({
      where: { user_id: userId },
      include: {
        Item: {
          include: { category: true },
        },
      },
      orderBy: { id: "asc" },
    });

    return userCart || [];
  } catch (error) {
    console.log(error);

    throw error;
  }
};

const itemExistIncart = async (entity: cartEntity) => {
  try {
    const cartItem = await prisma.cart.findFirst({
      where: { user_id: entity.user_id, item_id: entity.item_id },
    });
    if (cartItem) {
      updateItemInCart({
        user_id: entity.user_id,
        item_id: entity.item_id,
        quantity: cartItem.quantity + (entity.quantity || 1),
      });
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

export const addItemToCart = async (entity: cartEntity) => {
  try {
    if (await itemExistIncart(entity)) return;
    const cartItem = await prisma.cart.create({
      data: {
        user_id: entity.user_id,
        item_id: entity.item_id,
        quantity: entity.quantity || 1,
      },
    });
    return cartItem;
  } catch (error) {
    throw error;
  }
};

export const updateItemInCart = async (entity: cartEntity) => {
  try {
    const cartItem = await prisma.cart.updateMany({
      where: { user_id: entity.user_id, item_id: entity.item_id },
      data: { quantity: entity.quantity },
    });
    return cartItem;
  } catch (error) {
    throw error;
  }
};

export const removeItemFromCart = async (entity: cartEntity) => {
  try {
    const cartItem = await prisma.cart.deleteMany({
      where: { user_id: entity.user_id, item_id: entity.item_id },
    });
    return cartItem;
  } catch (error) {
    throw error;
  }
};
