import { useState, useEffect } from "react";
import { getMyOrdersRequest } from "../../../services/orderService";
import "./ClientOrders.css";

function ClientOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getMyOrdersRequest();
      setOrders(data);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudieron cargar tus compras");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("es-CL", {
      day: "numeric", month: "long", year: "numeric",
    });
  };

  const totalItemsIn = (order) =>
    order.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <section className="section-content orders-section">
      <div className="section-title">
        <h2>📦 Mis Compras</h2>
        <p>{orders.length} pedidos realizados</p>
      </div>

      {error && <p className="corder-error">{error}</p>}

      {loading ? (
        <p>Cargando tus compras...</p>
      ) : orders.length === 0 ? (
        <div className="corder-empty">
          <div className="corder-empty-icon">📦</div>
          <h3>Aún no has hecho ninguna compra</h3>
          <p>Ve a la "Tienda" para ver los productos disponibles.</p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order, idx) => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <div>
                  <h4>Pedido #{orders.length - idx}</h4>
                  <p className="date">📅 {formatDate(order.createdAt)}</p>
                </div>
                <span className="status-badge corder-confirmed">✅ Compra confirmada</span>
              </div>
              <div className="order-details">
                <p>Ítems: {totalItemsIn(order)}</p>
                <p className="total">Total: ${order.total.toLocaleString("es-CL")}</p>
              </div>
              <button className="btn-small btn-info" onClick={() => setSelectedOrder(order)}>
                Ver detalles
              </button>
            </div>
          ))}
        </div>
      )}

      {/* MODAL DETALLES */}
      {selectedOrder && (
        <div className="corder-modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="corder-modal" onClick={(e) => e.stopPropagation()}>
            <div className="corder-modal-header">
              <h3>📦 Detalle del pedido</h3>
              <button className="corder-modal-close" onClick={() => setSelectedOrder(null)}>✕</button>
            </div>
            <div className="corder-modal-body">
              <p className="corder-modal-date">
                📅 Comprado el {formatDate(selectedOrder.createdAt)}
              </p>

              <div className="corder-items-list">
                {selectedOrder.items.map((item, idx) => (
                  <div key={idx} className="corder-item-row">
                    <div className="corder-item-info">
                      <span className="corder-item-name">{item.name}</span>
                      <span className="corder-item-qty">x{item.quantity}</span>
                    </div>
                    <span className="corder-item-subtotal">
                      ${(item.price * item.quantity).toLocaleString("es-CL")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="corder-modal-total">
                <strong>Total pagado</strong>
                <span>${selectedOrder.total.toLocaleString("es-CL")}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ClientOrders;