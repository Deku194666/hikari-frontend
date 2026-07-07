import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import VetDashboard from "./pages/vet/VetDashboard.jsx";
import ClientDashboard from "./pages/clientes/ClientDashboard.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateVetRoute from "./routes/PrivateVetRoute.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Servicios from "./pages/Servicios";
import Tienda from "./pages/Tienda";
import Contacto from "./pages/Contacto";
import Farmacia from "./pages/Farmacia";
import ScrollToTop from "./components/ScrollToTop";
import Perros from "./pages/Perros";
import Gatos from "./pages/Gatos";
import Reptiles from "./pages/Reptiles";
import Tortugas from "./pages/Tortugas";
import Aves from "./pages/Aves";
import Conejos from "./pages/Conejos";
import AtenciónDomicilio from "./pages/AtenciónDomicilio";
import Vacunación from "./pages/Vacunación";
import Laboratorio from "./pages/Laboratorio";
import EvaluaciónGeneral from "./pages/EvaluaciónGeneral";
import SeguimientoMédico from "./pages/SeguimientoMédico";
import CuidadoPreventivo from "./pages/CuidadoPreventivo";
import Iguanas from "./pages/Iguanas";
import Roedores from "./pages/Roedores";
import Cuy from "./pages/Cuy";
import Huron from "./pages/Huron";
import Erizo from "./pages/Erizo";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";









 

function AppContent() {
  const location = useLocation();
  const hideNavbar = ["/dashboard-vet", "/dashboard-cliente"].includes(location.pathname);
   
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}
       <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/farmacia" element={<Farmacia />} />
          <Route path="/perros" element={<Perros />} />
          <Route path="/gatos" element={<Gatos />} />
          <Route path="/reptiles" element={<Reptiles />} />
          <Route path="/tortugas" element={<Tortugas />} />
          <Route path="/aves" element={<Aves />} />
          <Route path="/conejos" element={<Conejos />} />
          <Route path="/atencion-domicilio" element={<AtenciónDomicilio />} />
          <Route path="/vacunacion" element={<Vacunación />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/evaluacion-general" element={<EvaluaciónGeneral />} />
          <Route path="/seguimiento-medico" element={<SeguimientoMédico />} />
          <Route path="/cuidado-preventivo" element={<CuidadoPreventivo />} />
          <Route path="/iguanas" element={<Iguanas />} />
          <Route path="/roedores" element={<Roedores />} />
          <Route path="/cuy" element={<Cuy />} />
          <Route path="/huron" element={<Huron />} />
          <Route path="/erizo"  element={ <Erizo  />}   />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          







 
          <Route path="/dashboard-vet" element={
            <PrivateVetRoute>
              <VetDashboard />
            </PrivateVetRoute>
          } />
          <Route path="/dashboard-cliente" element={<ClientDashboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;