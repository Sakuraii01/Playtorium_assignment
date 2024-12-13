import Layout from "../../component/layout";
import useViewModel from "./viewModel";
import {
  ChevronLeftRounded,
  AddRounded,
  RemoveRounded,
  ExpandMoreRounded,
  ExpandLessRounded,
} from "@mui/icons-material";

const Cart = () => {
  const {
    cart,

    totalPrice,
    isSelectedDiscount,
    handleItemCartQuantityChange,
    navigateToHome,
    handleSelectedDiscountChange,
    discountCategory,
    appliedDiscount,
    handleOnApplyDiscount,
  } = useViewModel();
  const applyDiscount = () => {
    return (
      <div>
        <div className="space-y-2">
          <h3>Coupon</h3>
          {discountCategory?.coupon_useable.map((item) => (
            <div key={item.id} className="flex gap-2">
              <input
                type="radio"
                name="coupon"
                id={`coupon-${item.id}`}
                checked={appliedDiscount?.coupon?.id === item.id}
                onChange={() => handleOnApplyDiscount("coupon", item)}
                className="inputRadio"
              />
              <label htmlFor={`coupon-${item.id}`}>{item.description}</label>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <h3>Top up</h3>
          {discountCategory?.ontop_useable.map((item) => (
            <div key={item.id} className="flex gap-2">
              <input
                type="radio"
                name="ontop"
                id={`ontop-${item.id}`}
                checked={appliedDiscount?.ontop?.id === item.id}
                onChange={() => handleOnApplyDiscount("ontop", item)}
                className="inputRadio"
              />
              <label htmlFor={`ontop-${item.id}`}>{item.description}</label>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <h3>Seasonal</h3>
          {discountCategory?.seasonal_useable.map((item) => (
            <div key={item.id} className="flex gap-2">
              <input
                type="radio"
                name="seasonal"
                id={`seasonal-${item.id}`}
                checked={appliedDiscount?.seasonal?.id === item.id}
                onChange={() => handleOnApplyDiscount("seasonal", item)}
                className="inputRadio"
              />
              <label htmlFor={`seasonal-${item.id}`}>{item.description}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <Layout>
      <div className="bg-white rounded-2xl px-3 py-4">
        <div className="flex gap-1 text-indigo-900">
          <ChevronLeftRounded
            className="my-auto"
            onClick={() => navigateToHome()}
          />
          <h1>My Cart</h1>
        </div>
        <div className="h-1/2 overflow-y-scroll">
          {cart?.map((item) => (
            <div key={item.Item.id} className="my-2 px-2 py-2 flex">
              <div className="bg-gray-100 rounded-lg w-14 h-14 shadow-md"></div>
              <div className="my-auto ml-3">
                <h4>{item.Item.name}</h4>
                <p>{item.Item.price} THB</p>
              </div>
              <div className="flex gap-2 mt-auto mb-2 ml-auto text-indigo-900">
                <AddRounded
                  fontSize="small"
                  className="bg-indigo-200 rounded my-auto p-[3px]"
                  onClick={() => handleItemCartQuantityChange(item.Item.id, 1)}
                />
                <p className="my-auto">{item.quantity}</p>
                <RemoveRounded
                  fontSize="small"
                  className="bg-indigo-200 rounded my-auto p-[3px]"
                  onClick={() => handleItemCartQuantityChange(item.Item.id, -1)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-right mr-3">
          <p>Total {totalPrice?.total_price} THB</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl w-full my-2 py-4 px-5">
        <div className="flex justify-between">
          <h4>Apply discount</h4>

          {isSelectedDiscount ? (
            <ExpandLessRounded
              onClick={() => handleSelectedDiscountChange(false)}
            />
          ) : (
            <ExpandMoreRounded
              onClick={() => handleSelectedDiscountChange(true)}
            />
          )}
        </div>
        {isSelectedDiscount ? applyDiscount() : ""}
      </div>
      <div className="bg-white rounded-2xl w-full my-2 py-4 px-5">
        <div className="flex flex-col gap-2 text-right text-xs">
          <div>
            <p>Coupon discount {totalPrice?.coupon_discount || 0} THB</p>
          </div>

          <div>
            <p>Top up discount {totalPrice?.ontop_discount || 0} THB</p>
          </div>

          <div>
            <p>Seasonal discount {totalPrice?.seasonal_discount || 0} THB</p>
          </div>
        </div>
        <div className="mr-1 my-3 text-right">
          <p>Total {totalPrice?.total_discount} THB</p>
        </div>
        <div className="w-fit ml-auto">
          <button className="secondary-button">Check Out</button>
        </div>
      </div>
    </Layout>
  );
};
export default Cart;
