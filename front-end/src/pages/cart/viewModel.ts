import { useEffect, useState } from "react";
import { userCartType } from "../../service/repositories/cart/type";

import { CartService } from "../../service/remotes/cart/cart";
import { CartRepository } from "../../service/repositories/cart/cartRepository";

import {
  DiscountModel,
  AppliedDiscount,
  UserCartPriceDTO,
  DiscountModelOnCategory,
} from "../../service/repositories/discount/type";

import { DiscountService } from "../../service/remotes/discount/discount";
import { DiscountRepository } from "../../service/repositories/discount/discountRepository";

import { UNPROTECTED_PATH } from "../../constant/api.route";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
const useViewModel = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [cart, setCart] = useState<userCartType[]>();
  const [isSelectedDiscount, setIsSelectedDiscount] = useState(false);
  const [discountCategory, setDiscountCategory] =
    useState<DiscountModelOnCategory>();
  const [totalPrice, setTotalPrice] = useState<UserCartPriceDTO>();
  const [deletedPopup, setDeletedPopup] = useState(false);

  const [appliedDiscount, setAppliedDiscount] = useState<AppliedDiscount>();

  const userCartInfo = new CartRepository(new CartService());
  const discountInfo = new DiscountRepository(new DiscountService());
  const fetchCartData = () => {
    userCartInfo
      .getCart(auth?.user?.id || 0)
      .then((res) => {
        setCart(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchDiscountCategory = () => {
    discountInfo
      .getDiscountCategory()
      .then((res) => {
        setDiscountCategory(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchPrice = () => {
    discountInfo
      .getUserCartPrice({
        user_id: auth?.user?.id || 0,
        coupon_id: appliedDiscount?.coupon ? appliedDiscount?.coupon.id : 0,
        ontop_id: appliedDiscount?.ontop ? appliedDiscount?.ontop.id : 0,
        seasonal_id: appliedDiscount?.seasonal
          ? appliedDiscount?.seasonal.id
          : 0,
        point: auth?.user?.point || 0,
      })
      .then((res) => {
        setTotalPrice(res);
      });
  };
  const handleOnApplyDiscount = (category: string, discount: DiscountModel) => {
    setAppliedDiscount((prev: any) => {
      return {
        ...prev,
        [category]: discount,
      };
    });
  };
  const handleSelectedDiscountChange = (isSelected: boolean) => {
    setIsSelectedDiscount(isSelected);
  };

  const navigateToHome = () => {
    navigate(UNPROTECTED_PATH.HOME);
  };
  const handleItemCartQuantityChange = (
    item_id: number,
    quantityChange: number
  ) => {
    const existingItem = cart?.find((item) => item.item_id === item_id);
    if (
      existingItem?.quantity &&
      existingItem?.quantity + quantityChange <= 0
    ) {
      setDeletedPopup(true);
    }
    userCartInfo
      .putCart({
        item_id: item_id,
        quantity: existingItem ? existingItem.quantity + quantityChange : 1,
        user_id: auth?.user?.id || 0,
      })
      .then((res) => {
        console.log(res);

        fetchCartData();
        fetchPrice();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCancleDeletedItem = () => {
    setDeletedPopup(false);
  };

  useEffect(() => {
    fetchCartData();
    fetchDiscountCategory();
    fetchPrice();
  }, [appliedDiscount]);

  return {
    cart,
    discountCategory,
    deletedPopup,
    totalPrice,
    appliedDiscount,
    isSelectedDiscount,
    handleItemCartQuantityChange,
    navigateToHome,
    handleCancleDeletedItem,
    handleOnApplyDiscount,
    handleSelectedDiscountChange,
  };
};
export default useViewModel;
