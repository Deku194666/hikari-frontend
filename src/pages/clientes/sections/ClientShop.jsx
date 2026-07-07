import { useState, useEffect, useMemo } from "react";
import { getProductsRequest, purchaseProductsRequest } from "../../../services/productService";
import "./ClientShop.css";

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
  { id: "Conejo", name: "Conejo", icon: "🐰" },
  { id: "Tortuga", name: "Tortuga", icon: "🐢" },
  { id: "Iguana", name: "Iguana", icon: "🦎" },
  { id: "Ave", name: "Ave", icon: "🐦" },
  { id: "Cuyi", name: "Cuyi", icon: "🐹" },
  { id: "Erizo", name: "Erizo", icon: "🦔" },
  { id: "Hurón", name: "Hurón", icon: "🦡" },
];

const CATEGORY_ICON = {
  Productos: "🧴", Ropa: "👕", "Ropa Hikari": "🏷️", Medicamentos: "💊",
  Accesorios: "🦴", Higiene: "🧼", Juguetes: "🧸",
};

function ClientShop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedSpecies, setSelectedSpecies] = useState("todas");
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [checkingOut, setCheckingOut] = useState(false);

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
      setError(err.response?.data?.msg || "No se pudo cargar la tienda");
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = selectedCategory === "todos" || p.category === selectedCategory;
      const matchesSpecies = selectedSpecies === "todas" || p.species === selectedSpecies;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSpecies && matchesSearch;
    });
  }, [products, selectedCategory, selectedSpecies, search]);

  const cartQuantityFor = (productId) => {
    const item = cart.find((c) => c._id === productId);
    return item ? item.quantity : 0;
  };

  const addToCart = (product) => {
    const inCart = cartQuantityFor(product._id);
    if (inCart >= product.quantity) {
      alert("⚠️ No hay más stock disponible de este producto");
      return;
    }
    const existing = cart.find((item) => item._id === product._id);
    if (existing) {
      setCart(cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const updateCartQuantity = (id, change) => {
    setCart(
      cart
        .map((item) => {
          if (item._id !== id) return item;
          const newQty = item.quantity + change;
          const stockLimit = products.find((p) => p._id === id)?.quantity ?? item.quantity;
          if (newQty > stockLimit) {
            alert("⚠️ No hay más stock disponible");
            return item;
          }
          return { ...item, quantity: Math.max(1, newQty) };
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const totalCart = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setCheckingOut(true);
    try {
      const items = cart.map((item) => ({ productId: item._id, quantity: item.quantity }));
      const data = await purchaseProductsRequest(items);

      if (data.success) {
        alert("✅ ¡Compra realizada con éxito!");
        setCart([]);
        setShowCart(false);
        loadProducts(); // refresca stock real
      } else {
        const failed = data.results.filter((r) => !r.ok);
        alert("⚠️ Algunos productos no se pudieron comprar:\n" + failed.map((f) => f.msg).join("\n"));
        loadProducts();
      }
    } catch (err) {
      alert(err.response?.data?.msg || "No se pudo procesar la compra");
    } finally {
      setCheckingOut(false);
    }
  };

  return (
    <section className="section-content cshop-section">
      <div className="section-title">
        <h2>🛒 Tienda de productos</h2>
        <p>{filteredProducts.length} de {products.length} productos disponibles</p>
        {cart.length > 0 && (
          <span className="cart-badge" onClick={() => setShowCart(true)} style={{ cursor: "pointer" }}>
            🛒 {totalItems} artículos
          </span>
        )}
      </div>

      {error && <p className="cshop-error">{error}</p>}

      {/* BARRA SUPERIOR: buscar + categorías */}
      <div className="cshop-topbar">
        <input
          type="text"
          className="cshop-search"
          placeholder="🔍 Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="cshop-categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`cshop-cat-btn ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      <div className="cshop-layout">
        {/* SIDEBAR ESPECIES */}
        <aside className="cshop-sidebar">
          <h4>Especie</h4>
          {SPECIES.map((sp) => (
            <button
              key={sp.id}
              className={`cshop-species-btn ${selectedSpecies === sp.id ? "active" : ""}`}
              onClick={() => setSelectedSpecies(sp.id)}
            >
              <span>{sp.icon}</span> {sp.name}
            </button>
          ))}
        </aside>

        {/* PRODUCTOS */}
        <div className="cshop-main">
          {loading ? (
            <p>Cargando productos...</p>
          ) : filteredProducts.length === 0 ? (
            <div className="cshop-empty">
              <div className="cshop-empty-icon">🛍️</div>
              <h3>No hay productos que calcen con este filtro</h3>
              <p>Prueba con otra categoría o especie.</p>
            </div>
          ) : (
            <div className="cshop-grid">
              {filteredProducts.map((product) => {
                const outOfStock = product.quantity <= 0;
                const inCart = cartQuantityFor(product._id);
                return (
                  <div key={product._id} className={`cshop-card ${outOfStock ? "out-of-stock" : ""}`}>
                    <div className="cshop-card-image">
                      {product.image ? (
                        <img src={product.image} alt={product.name} />
                      ) : (
                        <span className="cshop-card-placeholder">
                          {CATEGORY_ICON[product.category] || "📦"}
                        </span>
                      )}
                      {outOfStock && <div className="cshop-out-overlay">Agotado</div>}
                    </div>

                    <div className="cshop-card-body">
                      <h3>{product.name}</h3>
                      <div className="cshop-card-tags">
                        <span className="cshop-tag">{product.category}</span>
                        <span className="cshop-tag cshop-tag-species">{product.species}</span>
                      </div>
                      <p className="cshop-stock">
                        {outOfStock ? "Sin stock" : `${product.quantity} disponibles`}
                      </p>
                      <p className="cshop-price">${product.price.toLocaleString("es-CL")}</p>

                      <button
                        className="cshop-add-btn"
                        onClick={() => addToCart(product)}
                        disabled={outOfStock || inCart >= product.quantity}
                      >
                        {outOfStock ? "No disponible" : inCart > 0 ? `🛒 En carrito (${inCart})` : "🛒 Agregar"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* CARRITO FLOTANTE */}
      {cart.length > 0 && !showCart && (
        <button className="cshop-cart-toggle" onClick={() => setShowCart(true)}>
          🛒 {totalItems}
        </button>
      )}

      {showCart && (
        <aside className="cshop-cart-panel">
          <div className="cshop-cart-header">
            <h3>🛒 Tu carrito</h3>
            <button className="cshop-close-cart" onClick={() => setShowCart(false)}>✕</button>
          </div>

          <div className="cshop-cart-items">
            {cart.length === 0 ? (
              <p className="cshop-cart-empty">Tu carrito está vacío</p>
            ) : (
              cart.map((item) => (
                <div key={item._id} className="cshop-cart-item">
                  <div className="cshop-cart-item-info">
                    <p className="cshop-cart-item-name">{item.name}</p>
                    <p className="cshop-cart-item-price">${item.price.toLocaleString("es-CL")}</p>
                    <div className="cshop-cart-controls">
                      <button onClick={() => updateCartQuantity(item._id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateCartQuantity(item._id, 1)}>+</button>
                    </div>
                  </div>
                  <button className="cshop-remove-btn" onClick={() => removeFromCart(item._id)}>❌</button>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="cshop-cart-footer">
              <div className="cshop-cart-total">
                <strong>Total:</strong>
                <span>${totalCart.toLocaleString("es-CL")}</span>
              </div>
              <button className="cshop-checkout-btn" onClick={handleCheckout} disabled={checkingOut}>
                {checkingOut ? "Procesando..." : "💳 Confirmar compra"}
              </button>
            </div>
          )}
        </aside>
      )}
    </section>
  );
}

export default ClientShop;