import { useDispatch, useSelector } from "../hooks/useCustomRedux";
import { clearCart } from "../slices/cartSlice";

export const PriceBox = () => {
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex justify-between p-12">
      <div>
        <button
          onClick={handleClearCart}
          className="p-4 border rounded-md cursor-pointer"
        >
          장바구니 초기화
        </button>
      </div>
      총 가격: {total} won
    </div>
  );
};
