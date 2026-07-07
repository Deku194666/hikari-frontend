import { useState, useEffect } from "react";
import { getAllOrdersRequest } from "../../../services/orderService";
import "./VetPayments.css";

function VetPayments() {
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
      const data = await getAllOrdersRequest();
      setOrders(data);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudieron cargar los pagos");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("es-CL", {
      day: "numeric", month: "short", year: "numeric",
    });
  };

  const totalItemsIn = (order) =>
    order.items.reduce((sum, i) => sum + i.quantity, 0);

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

  return (
    <section className="section-content vpay-section">
      <div className="section-title">
        <h2>💳 Pagos Recientes</h2>
        <p>{orders.length} compras registradas en la tienda</p>
      </div>

      {error && <p className="vpay-error">{error}</p>}

      {!loading && orders.length > 0 && (
        <div className="vpay-summary">
          <span className="vpay-summary-label">💰 Ingresos totales</span>
          <span className="vpay-summary-value">${totalRevenue.toLocaleString("es-CL")}</span>
        </div>
      )}

      {loading ? (
        <p>Cargando pagos...</p>
      ) : orders.length === 0 ? (
        <div className="vpay-empty">
          <div className="vpay-empty-icon">💳</div>
          <h3>Aún no hay compras registradas</h3>
          <p>Cuando un cliente compre en la tienda, va a aparecer acá.</p>
        </div>
      ) : (
        <div className="payments-list">
          {orders.map((order) => (
            <div key={order._id} className="vpay-card">
              <div className="vpay-main">
                <h3>{order.owner?.name || "Cliente"}</h3>
                <p className="vpay-service">{totalItemsIn(order)} producto(s)</p>
                <p className="vpay-date">📅 {formatDate(order.createdAt)}</p>
              </div>

              <div className="vpay-amount">
                <p className="vpay-amount-value">${order.total.toLocaleString("es-CL")}</p>
                <span className="vpay-status">✅ Confirmado</span>
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
        <div className="vpay-modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="vpay-modal" onClick={(e) => e.stopPropagation()}>
            <div className="vpay-modal-header">
              <h3>💳 Detalle de la compra</h3>
              <button className="vpay-modal-close" onClick={() => setSelectedOrder(null)}>✕</button>
            </div>
            <div className="vpay-modal-body">
              <p><strong>Cliente:</strong> {selectedOrder.owner?.name}</p>
              <p><strong>Correo:</strong> {selectedOrder.owner?.email}</p>
              <p><strong>Fecha:</strong> 📅 {formatDate(selectedOrder.createdAt)}</p>

              <div className="vpay-items-list">
                {selectedOrder.items.map((item, idx) => (
                  <div key={idx} className="vpay-item-row">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toLocaleString("es-CL")}</span>
                  </div>
                ))}
              </div>

              <div className="vpay-modal-total">
                <strong>Total</strong>
                <span>${selectedOrder.total.toLocaleString("es-CL")}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default VetPayments;