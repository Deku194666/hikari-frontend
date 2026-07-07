import { useState, useEffect, useMemo } from "react";
import { getAllPatientsRequest } from "../../../services/petService";
import { getAllAppointmentsRequest } from "../../../services/appointmentService";
import { getAllOrdersRequest } from "../../../services/orderService";
import { getProductsRequest } from "../../../services/productService";
import "./VetOverview.css";

const RECENT_DAYS = 7;

function VetOverview() {
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    setLoading(true);
    setError("");
    try {
      const [patientsData, appointmentsData, ordersData, productsData] = await Promise.all([
        getAllPatientsRequest(),
        getAllAppointmentsRequest(),
        getAllOrdersRequest(),
        getProductsRequest(),
      ]);
      setPatients(patientsData);
      setAppointments(appointmentsData);
      setOrders(ordersData);
      setProducts(productsData);
    } catch (err) {
      setError("No se pudieron cargar todos los datos del resumen");
    } finally {
      setLoading(false);
    }
  };

  const todayStr = new Date().toISOString().slice(0, 10);

  // --- AGENDA ---
  const todayAppointments = useMemo(
    () => appointments.filter((a) => a.date === todayStr),
    [appointments]
  );
  const upcomingAppointments = useMemo(
    () => appointments.filter((a) => a.status === "pendiente" && a.date >= todayStr),
    [appointments]
  );
  const attendedAppointments = useMemo(
    () => appointments.filter((a) => a.status === "atendida"),
    [appointments]
  );

  // --- CLIENTES / PACIENTES ---
  const recentPatients = useMemo(() => {
    return patients.filter((p) => {
      if (!p.createdAt) return false;
      const diffMs = Date.now() - new Date(p.createdAt).getTime();
      return diffMs <= RECENT_DAYS * 24 * 60 * 60 * 1000;
    });
  }, [patients]);

  const attendedPatientIds = useMemo(() => {
    const ids = new Set();
    attendedAppointments.forEach((a) => {
      if (a.pet?._id) ids.add(a.pet._id);
    });
    return ids;
  }, [attendedAppointments]);

  // --- PAGOS ---
  const totalRevenue = useMemo(
    () => orders.reduce((sum, o) => sum + o.total, 0),
    [orders]
  );

  // --- STOCK ---
  const totalUnits = useMemo(
    () => products.reduce((sum, p) => sum + p.quantity, 0),
    [products]
  );
  const lowStockCount = useMemo(
    () => products.filter((p) => p.quantity < p.minStock).length,
    [products]
  );
  const inventoryValue = useMemo(
    () => products.reduce((sum, p) => sum + p.price * p.quantity, 0),
    [products]
  );

  if (loading) {
    return (
      <section className="section-content overview-section">
        <div className="section-title">
          <h2>📊 Resumen General</h2>
          <p>Vista rápida de tus actividades</p>
        </div>
        <p>Cargando resumen...</p>
      </section>
    );
  }

  return (
    <section className="section-content overview-section">
      <div className="section-title">
        <h2>📊 Resumen General</h2>
        <p>Vista rápida de tus actividades</p>
      </div>

      {error && <p className="voc-error">{error}</p>}

      <div className="voc-wrapper">

        {/* ===== COLUMNA AGENDA ===== */}
        <div className="voc-col">
          <h4 className="voc-col-title">📅 Agenda</h4>

          <div className="voc-card voc-card-accent-blue">
            <span className="voc-card-icon">📅</span>
            <div className="voc-card-body">
              <h3>Citas hoy</h3>
              <p className="voc-card-value">{todayAppointments.length}</p>
            </div>
          </div>

          <div className="voc-card">
            <h3>⏳ Próximas citas</h3>
            <p className="voc-big-number">{upcomingAppointments.length}</p>
            <p className="voc-desc">pendientes</p>
          </div>

          <div className="voc-card voc-card-accent-purple">
            <span className="voc-card-icon">✅</span>
            <div className="voc-card-body">
              <h3>Completadas</h3>
              <p className="voc-card-value">{attendedAppointments.length}</p>
            </div>
          </div>
        </div>

        {/* ===== COLUMNA CLIENTES ===== */}
        <div className="voc-col">
          <h4 className="voc-col-title">🐾 Clientes</h4>

          <div className="voc-card voc-card-accent-green">
            <span className="voc-card-icon">🐾</span>
            <div className="voc-card-body">
              <h3>Pacientes</h3>
              <p className="voc-card-value">{patients.length}</p>
            </div>
          </div>

          <div className="voc-card">
            <h3>✅ Pacientes atendidos</h3>
            <p className="voc-big-number">{attendedPatientIds.size}</p>
            <p className="voc-desc">con al menos 1 atención</p>
          </div>

          <div className="voc-card">
            <h3>🆕 Recién registradas</h3>
            <p className="voc-big-number">{recentPatients.length}</p>
            <p className="voc-desc">últimos 7 días</p>
          </div>
        </div>

        {/* ===== COLUMNA PAGOS ===== */}
        <div className="voc-col">
          <h4 className="voc-col-title">💰 Pagos</h4>

          <div className="voc-card voc-card-accent-orange">
            <span className="voc-card-icon">💰</span>
            <div className="voc-card-body">
              <h3>Ingresos totales</h3>
              <p className="voc-card-value">${totalRevenue.toLocaleString("es-CL")}</p>
            </div>
          </div>

          <div className="voc-card">
            <h3>📦 Pedidos realizados</h3>
            <p className="voc-big-number">{orders.length}</p>
            <p className="voc-desc">en la tienda</p>
          </div>
        </div>

        {/* ===== COLUMNA STOCK ===== */}
        <div className="voc-col">
          <h4 className="voc-col-title">📦 Stock</h4>

          <div className="voc-card">
            <h3>📦 Unidades en stock</h3>
            <p className="voc-big-number">{totalUnits}</p>
            <p className="voc-desc">{products.length} productos distintos</p>
          </div>

          <div className="voc-card">
            <h3>⚠️ Stock bajo</h3>
            <p className="voc-big-number">{lowStockCount}</p>
            <p className="voc-desc">productos por reponer</p>
          </div>

          <div className="voc-card">
            <h3>💵 Valor de inventario</h3>
            <p className="voc-big-number">${inventoryValue.toLocaleString("es-CL")}</p>
            <p className="voc-desc">valorizado</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default VetOverview;