import {
  createContext,
  useState,
  useEffect,
} from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  // ====================
  // CART
  // ====================

  const [cart, setCart] = useState(() => {

    const savedCart =
      localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });

  // ====================
  // WISHLIST
  // ====================

  const [wishlist, setWishlist] = useState(() => {

    const savedWishlist =
      localStorage.getItem("wishlist");

    return savedWishlist
      ? JSON.parse(savedWishlist)
      : [];

  });

  // ====================
  // ORDERS
  // ====================

  const [orders, setOrders] = useState(() => {

    const savedOrders =
      localStorage.getItem("orders");

    return savedOrders
      ? JSON.parse(savedOrders)
      : [];

  });

  // ====================
  // LOCAL STORAGE
  // ====================

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

  }, [orders]);

  // ====================
  // ADD TO CART
  // ====================

  const addToCart = (product) => {

    const existing = cart.find(
      item => item.id === product.id
    );

    if (existing) {

      setCart(

        cart.map(item =>

          item.id === product.id

            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }

            : item

        )

      );

    }

    else {

      setCart([

        ...cart,

        {
          ...product,
          quantity: 1
        }

      ]);

    }

  };

  // ====================
  // INCREASE QUANTITY
  // ====================

  const increaseQuantity = (id) => {

    setCart(

      cart.map(item =>

        item.id === id

          ? {
              ...item,
              quantity:
                item.quantity + 1
            }

          : item

      )

    );

  };

  // ====================
  // DECREASE QUANTITY
  // ====================

  const decreaseQuantity = (id) => {

    setCart(

      cart
        .map(item =>

          item.id === id

            ? {
                ...item,
                quantity:
                  item.quantity - 1
              }

            : item

        )

        .filter(
          item => item.quantity > 0
        )

    );

  };

  // ====================
  // REMOVE FROM CART
  // ====================

  const removeFromCart = (id) => {

    setCart(

      cart.filter(
        item => item.id !== id
      )

    );

  };

  // ====================
  // CLEAR CART
  // ====================

  const clearCart = () => {

    setCart([]);

  };

  // ====================
// PLACE ORDER
// ====================

const placeOrder = () => {

  if (cart.length === 0) return;

  const newOrder = {

    id: Date.now(),

    items: [...cart],

    total: cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),

    date: new Date().toLocaleString(),

    deliveryDate: new Date(
      Date.now() + 5 * 24 * 60 * 60 * 1000
    ).toLocaleDateString(),

    status: "Confirmed"

  };

  setOrders(prevOrders => [
    newOrder,
    ...prevOrders
  ]);

  setCart([]);

};

  // ====================
  // CANCEL ORDER
  // ====================

  const cancelOrder = (id) => {

    setOrders(

      orders.filter(
        order => order.id !== id
      )

    );

  };

  // ====================
  // UPDATE ORDER STATUS
  // ====================

  const updateOrderStatus = (
    id,
    newStatus
  ) => {

    setOrders(

      orders.map(order =>

        order.id === id

          ? {
              ...order,
              status: newStatus
            }

          : order

      )

    );

  };

  // ====================
  // WISHLIST
  // ====================

  const addToWishlist = (product) => {

    const exists =
      wishlist.find(
        item => item.id === product.id
      );

    if (exists) {

      setWishlist(

        wishlist.filter(
          item => item.id !== product.id
        )

      );

    }

    else {

      setWishlist([

        ...wishlist,

        product

      ]);

    }

  };

  const removeFromWishlist = (id) => {

    setWishlist(

      wishlist.filter(
        item => item.id !== id
      )

    );

  };

  return (

    <CartContext.Provider

      value={{

        cart,
        wishlist,
        orders,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart,

        clearCart,

        addToWishlist,

        removeFromWishlist,

        placeOrder,

        cancelOrder,

        updateOrderStatus,

      }}

    >

      {children}

    </CartContext.Provider>

  );

}

export default CartProvider;