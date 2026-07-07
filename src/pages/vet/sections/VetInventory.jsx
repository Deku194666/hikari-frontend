import { useState, useEffect, useMemo } from "react";
import {
  getProductsRequest,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from "../../../services/productService";
import "./VetInventory.css";

const CATEGORIES = [
  { id: "todos", name: "Todos", icon: "📦" },
  { id: "Productos", name: "Productos", icon: "🧴" },
  { id: "Ropa", name: "Ropa", icon: "👕" },
  { id: "Ropa Hikari", name: "Ropa Hikari", icon: "🏷️" },
  { id: "Medicamentos", name: "Medicamentos", icon: "💊" },
  { id: "Accesorios", name: "Accesorios", icon: "🦴" },
  { id: "Higiene", name: "Higiene", icon: "🧼" },
  { id: "Juguetes", name: "Juguetes", icon: "🧸" },
];

const SPECIES = [
  { id: "todas", name: "Todas", icon: "🐾" },
  { id: "General", name: "General", icon: "⚕️" },
  { id: "Perro", name: "Perro", icon: "🐕" },
  { id: "Gato", name: "Gato", icon: "🐱" },
  { id: "Tortuga", name: "Tortuga", icon: "🐢" },
  { id: "Iguana", name: "Iguana", icon: "🦎" },
  { id: "Conejo", name: "Conejo", icon: "🐰" },
  { id: "Ave", name: "Ave", icon: "🐦" },
  { id: "Cuyi", name: "Cuyi", icon: "🐹" },
  { id: "Erizo", name: "Erizo", icon: "🦔" },
  { id: "Hurón", name: "Hurón", icon: "🐾" },
];

const CATEGORY_ICON = {
  Productos: "🧴", Ropa: "👕", "Ropa Hikari": "🏷️", Medicamentos: "💊",
  Accesorios: "🦴", Higiene: "🧼", Juguetes: "🧸",
};

const EMPTY_FORM = {
  name: "",
  category: "Productos",
  species: "General",
  quantity: "",
  minStock: "5",
  price: "",
  description: "",
  image: "",
};

function VetInventory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedSpecies, setSelectedSpecies] = useState("todas");
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null); // null = agregando, id = editando
  const [submitting, setSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [form, setForm] = useState(EMPTY_FORM);

  const [adjustingId, setAdjustingId] = useState(null); // para deshabilitar botones mientras guarda

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getProductsRequest();
      setProducts(data);
    } catch (err) {
      setError(err.response?.data?.msg || "No se pudo cargar el stock");
    } finally {
      setLoading(false);
    }
  };

  const getStatus = (quantity, minStock) => {
    if (quantity <= 0) return "critical";
    if (quantity < minStock) return "low";
    return "good";
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === "todos" || p.category === selectedCategory;
      const matchesSpecies = selectedSpecies === "todas" || p.species === selectedSpecies;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSpecies && matchesSearch;
    });
  }, [products, selectedCategory, selectedSpecies, search]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("⚠️ La imagen es muy pesada, usa una menor a 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const openAddModal = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setImagePreview("");
    setShowModal(true);
  };

  const openEditModal = (item) => {
    setEditingId(item._id);
    setForm({
      name: item.name,
      category: item.category,
      species: item.species,
      quantity: String(item.quantity),
      minStock: String(item.minStock),
      price: String(item.price),
      description: item.description || "",
      image: item.image || "",
    });
    setImagePreview(item.image || "");
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || form.quantity === "" || form.price === "") {
      alert("⚠️ Completa nombre, cantidad y precio");
      return;
    }

    const payload = {
      name: form.name,
      category: form.category,
      species: form.species,
      quantity: parseInt(form.quantity),
      minStock: parseInt(form.minStock) || 5,
      price: parseFloat(form.price),
      description: form.description,
      image: form.image,
    };

    setSubmitting(true);
    try {
      if (editingId) {
        const updated = await updateProductRequest(editingId, payload);
        setProducts((prev) => prev.map((p) => (p._id === editingId ? updated : p)));
      } else {
        const created = await createProductRequest(payload);
        setProducts((prev) => [created, ...prev]);
      }
      setShowModal(false);
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo guardar el producto");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm("¿Eliminar este producto del stock?")) return;
    try {
      await deleteProductRequest(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo eliminar el producto");
    }
  };

  const handleAdjustQuantity = async (item, delta) => {
    const newQty = item.quantity + delta;
    if (newQty < 0) return;

    setAdjustingId(item._id);
    // actualiza al tiro en pantalla, sin esperar al backend (se ve más fluido)
    setProducts((prev) =>
      prev.map((p) => (p._id === item._id ? { ...p, quantity: newQty } : p))
    );

    try {
      await updateProductRequest(item._id, { quantity: newQty });
    } catch (err) {
      // si falla, revierte el cambio visual
      setProducts((prev) =>
        prev.map((p) => (p._id === item._id ? { ...p, quantity: item.quantity } : p))
      );
      alert(err.response?.data?.msg || "No se pudo actualizar la cantidad");
    } finally {
      setAdjustingId(null);
    }
  };

  return (
    <section className="section-content vinv-section">
      <div className="section-title">
        <h2>📦 Stock de Productos</h2>
        <p>{filteredProducts.length} de {products.length} productos en bodega</p>
      </div>

      {error && <p className="vinv-error">{error}</p>}

      {/* BARRA SUPERIOR: buscar + agregar */}
      <div className="vinv-topbar">
        <input
          type="text"
          className="vinv-search"
          placeholder="🔍 Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="vinv-add-btn" onClick={openAddModal}>
          ➕ Agregar producto
        </button>
      </div>

      <div className="vinv-categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`vinv-cat-btn ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      <div className="vinv-layout">
        {/* SIDEBAR ESPECIES */}
        <aside className="vinv-sidebar">
          <h4>Especie</h4>
          {SPECIES.map((sp) => (
            <button
              key={sp.id}
              className={`vinv-species-btn ${selectedSpecies === sp.id ? "active" : ""}`}
              onClick={() => setSelectedSpecies(sp.id)}
            >
              <span>{sp.icon}</span> {sp.name}
            </button>
          ))}
        </aside>

        {/* GRID DE PRODUCTOS */}
        <div className="vinv-main">
          {loading ? (
            <p>Cargando stock...</p>
          ) : filteredProducts.length === 0 ? (
            <div className="vinv-empty">
              <div className="vinv-empty-icon">📦</div>
              <h3>No hay productos que calcen con este filtro</h3>
              <p>Prueba con otra categoría, especie, o agrega un producto nuevo.</p>
            </div>
          ) : (
            <div className="vinv-grid">
              {filteredProducts.map((item) => {
                const status = getStatus(item.quantity, item.minStock);
                const isAdjusting = adjustingId === item._id;
                return (
                  <div key={item._id} className={`vinv-card vinv-card-${status}`}>
                    <div className="vinv-card-actions">
                      <button
                        className="vinv-edit-btn"
                        onClick={() => openEditModal(item)}
                        title="Editar producto"
                      >
                        ✏️
                      </button>
                      <button
                        className="vinv-delete-btn"
                        onClick={() => handleDeleteProduct(item._id)}
                        title="Eliminar producto"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="vinv-card-image">
                      {item.image ? (
                        <img src={item.image} alt={item.name} />
                      ) : (
                        <span className="vinv-card-placeholder">
                          {CATEGORY_ICON[item.category] || "📦"}
                        </span>
                      )}
                      <span className={`vinv-status-dot vinv-status-${status}`}>
                        {status === "good" ? "✅" : status === "low" ? "⚠️" : "🚨"}
                      </span>
                    </div>

                    <div className="vinv-card-body">
                      <h3 className="vinv-card-name">{item.name}</h3>
                      <div className="vinv-card-tags">
                        <span className="vinv-tag">{item.category}</span>
                        <span className="vinv-tag vinv-tag-species">{item.species}</span>
                      </div>

                      <div className="vinv-card-quantity">
                        <div className="quantity-bar">
                          <div
                            className="quantity-fill"
                            style={{
                              width: `${Math.min((item.quantity / item.minStock) * 100, 100)}%`,
                            }}
                          ></div>
                        </div>
                        <span className="vinv-qty-text">{item.quantity}/{item.minStock}</span>
                      </div>

                      {/* CONTROL MANUAL DE STOCK */}
                      <div className="vinv-stock-control">
                        <button
                          className="vinv-stock-btn"
                          onClick={() => handleAdjustQuantity(item, -1)}
                          disabled={isAdjusting || item.quantity <= 0}
                        >
                          −
                        </button>
                        <span className="vinv-stock-number">{item.quantity}</span>
                        <button
                          className="vinv-stock-btn"
                          onClick={() => handleAdjustQuantity(item, 1)}
                          disabled={isAdjusting}
                        >
                          +
                        </button>
                      </div>

                      <div className="vinv-card-price">${item.price.toLocaleString("es-CL")}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* MODAL AGREGAR / EDITAR PRODUCTO */}
      {showModal && (
        <div className="vinv-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="vinv-modal" onClick={(e) => e.stopPropagation()}>
            <div className="vinv-modal-header">
              <h3>{editingId ? "✏️ Editar producto" : "➕ Agregar producto al stock"}</h3>
              <button className="vinv-modal-close" onClick={() => setShowModal(false)}>✕</button>
            </div>

            <form className="vinv-modal-body" onSubmit={handleSubmit}>
              <div className="vinv-field">
                <label>Foto del producto</label>
                <div className="vinv-image-upload">
                  {imagePreview ? (
                    <img src={imagePreview} alt="preview" className="vinv-image-preview" />
                  ) : (
                    <div className="vinv-image-placeholder">📷 Sin imagen</div>
                  )}
                  <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
              </div>

              <div className="vinv-field">
                <label>Nombre *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  placeholder="Ej: Vacuna Pentavalente"
                />
              </div>

              <div className="vinv-field-row">
                <div className="vinv-field">
                  <label>Categoría</label>
                  <select name="category" value={form.category} onChange={handleFormChange}>
                    {CATEGORIES.filter((c) => c.id !== "todos").map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className="vinv-field">
                  <label>Especie</label>
                  <select name="species" value={form.species} onChange={handleFormChange}>
                    {SPECIES.filter((s) => s.id !== "todas").map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="vinv-field-row">
                <div className="vinv-field">
                  <label>Cantidad *</label>
                  <input
                    type="number"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleFormChange}
                    placeholder="0"
                  />
                </div>
                <div className="vinv-field">
                  <label>Stock mínimo</label>
                  <input
                    type="number"
                    name="minStock"
                    value={form.minStock}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="vinv-field">
                  <label>Precio *</label>
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleFormChange}
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="vinv-field">
                <label>Descripción (opcional)</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleFormChange}
                  placeholder="Detalles adicionales del producto..."
                />
              </div>

              <div className="vinv-modal-footer">
                <button type="button" className="vinv-btn-secondary" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="vinv-btn-primary" disabled={submitting}>
                  {submitting ? "Guardando..." : editingId ? "💾 Guardar cambios" : "➕ Agregar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default VetInventory;