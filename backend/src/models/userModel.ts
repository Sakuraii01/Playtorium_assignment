import prisma from "./prisma";

export type UserType = {
  id: number;
  name: string;
  point: number;
  isAdmin: boolean;
};
export const getUser = async (name: string): Promise<UserType | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: { name: name },
    });

    return user;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (name: string): Promise<UserType> => {
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        point: 0,
        isAdmin: false,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
