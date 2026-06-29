
import { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";

function Orders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadOrders();

  }, []);

  const loadOrders = async () => {

    try {

      const data = await getOrders(1);

      console.log("Orders:", data);

      if (Array.isArray(data)) {

        // Latest order first
        setOrders(data.reverse());

      } else {

        setOrders([]);

      }

    } catch (error) {

      console.error(error);

      setOrders([]);

    }

    setLoading(false);

  };

  if (loading) {

    return (

      <div className="orders-page">

        <h2>Loading Orders...</h2>

      </div>

    );

  }

  return (

    <div className="orders-page">

      <h1>📦 My Orders</h1>

      {orders.length === 0 ? (

        <h2>No Orders Yet 📦</h2>

      ) : (

        orders.map((order) => (

          <div
            key={order.id}
            className="order-card"
          >

            <div className="order-header">

              <h3>
                Order #{order.id}
              </h3>

              <span className="order-status">
                {order.status}
              </span>

            </div>

            <p>

              <strong>Name:</strong>{" "}

              {order.customerName}

            </p>

            <p>

              <strong>Phone:</strong>{" "}

              {order.phone}

            </p>

            <p>

              <strong>Address:</strong>{" "}

              {order.address}

            </p>

            <p>

              <strong>Payment:</strong>{" "}

              {order.paymentMethod}

            </p>

            <p>

              <strong>Total:</strong>{" "}

              ₹{Number(order.total).toLocaleString()}

            </p>

            <p>

              <strong>Date:</strong>{" "}

              {order.orderDate || "Today"}

            </p>

            <hr />

          </div>

        ))

      )}

    </div>

  );

}

export default Orders;

