import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaPlus, FaSearch, FaTimes } from "react-icons/fa";
import {
  getConversationsRequest,
  getConversationRequest,
  sendMessageRequest,
  markAsReadRequest,
  startConversationRequest,
} from "../../../services/messageService";
import { getVetsRequest } from "../../../services/appointmentService";
import "./MensajesSection.css";

const MensajesSection = () => {
  const [conversations, setConversations] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [error, setError] = useState("");

  const [selectedConv, setSelectedConv] = useState(null); // { conversationId, otherUser }
  const [chat, setChat] = useState([]);
  const [loadingChat, setLoadingChat] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);

  // ===== Buscador de vets para iniciar conversación nueva =====
  const [showVetSearch, setShowVetSearch] = useState(false);
  const [vets, setVets] = useState([]);
  const [loadingVets, setLoadingVets] = useState(false);
  const [vetSearchTerm, setVetSearchTerm] = useState("");
  const [startingConv, setStartingConv] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

  const fetchConversations = async () => {
    setLoadingList(true);
    setError("");
    try {
      const data = await getConversationsRequest();
      setConversations(data);
    } catch (err) {
      setError(err.message || "No se pudieron cargar tus conversaciones");
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  // Refresca sola la lista cada 8 segundos (para ver respuestas nuevas / badges)
  useEffect(() => {
    const interval = setInterval(() => {
      fetchConversations();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Refresca sola la conversación abierta cada 4 segundos, sin "loading" visible
  useEffect(() => {
    if (!selectedConv) return;

    const interval = setInterval(async () => {
      try {
        const data = await getConversationRequest(selectedConv.conversationId);
        setChat(data);
      } catch {
        // si falla el refresco silencioso, no molestamos con un error en pantalla
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedConv]);

  const openConversation = async (conv) => {
    setShowVetSearch(false);
    setSelectedConv({ conversationId: conv.conversationId, otherUser: conv.otherUser });
    setLoadingChat(true);
    try {
      const data = await getConversationRequest(conv.conversationId);
      setChat(data);
      await markAsReadRequest(conv.conversationId);
      fetchConversations();
    } catch (err) {
      setError(err.message || "No se pudo abrir la conversación");
    } finally {
      setLoadingChat(false);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConv) return;

    setSending(true);
    try {
      const sent = await sendMessageRequest(selectedConv.conversationId, newMessage);
      setChat((prev) => [...prev, sent]);
      setNewMessage("");
    } catch (err) {
      setError(err.message || "No se pudo enviar el mensaje");
    } finally {
      setSending(false);
    }
  };

  // ===== Buscador de vets =====
  const openVetSearch = async () => {
    setShowVetSearch(true);
    setVetSearchTerm("");
    setLoadingVets(true);
    try {
      const data = await getVetsRequest();
      setVets(data);
    } catch (err) {
      setError(err.message || "No se pudieron cargar los veterinarios");
    } finally {
      setLoadingVets(false);
    }
  };

  const filteredVets = vets.filter((v) =>
    v.name.toLowerCase().includes(vetSearchTerm.toLowerCase())
  );

  const handleStartConversation = async (vet) => {
    setStartingConv(true);
    setError("");
    try {
      const conversation = await startConversationRequest(vet._id);
      await fetchConversations();
      await openConversation({
        conversationId: conversation._id,
        otherUser: { _id: vet._id, name: vet.name, email: vet.email },
      });
    } catch (err) {
      setError(err.message || "No se pudo iniciar la conversación");
    } finally {
      setStartingConv(false);
    }
  };

  return (
    <div className="client-section client-section-chat">
      <h1 className="client-title">Mensajes</h1>
      <p className="client-subtitle">Tus conversaciones con los veterinarios de Hikari.</p>

      {error && (
        <p className="client-empty" style={{ color: "#c94f4f" }}>
          ⚠️ {error}
        </p>
      )}

      <div className="mensajes-layout">
        {/* LISTA DE CONVERSACIONES (VETS) */}
        <div className="mensajes-list">
          <button className="mensajes-new-btn" onClick={openVetSearch}>
            <FaPlus /> Nuevo mensaje
          </button>

          {loadingList && <p className="client-empty">Cargando conversaciones...</p>}
          {!loadingList && conversations.length === 0 && (
            <p className="client-empty">
              Todavía no tienes conversaciones. Toca "Nuevo mensaje" para escribirle a un vet.
            </p>
          )}
          {conversations.map((conv) => (
            <button
              key={conv.conversationId}
              className={`mensajes-list-item ${
                selectedConv?.conversationId === conv.conversationId ? "active" : ""
              }`}
              onClick={() => openConversation(conv)}
            >
              <div className="mensajes-list-avatar">{conv.otherUser.name.charAt(0)}</div>
              <div className="mensajes-list-info">
                <strong>{conv.otherUser.name}</strong>
                <span>
                  {conv.lastMessage?.text?.slice(0, 34)}
                  {conv.lastMessage?.text?.length > 34 ? "…" : ""}
                </span>
              </div>
              {conv.unreadCount > 0 && (
                <span className="mensajes-unread-badge">{conv.unreadCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* PANEL DE CHAT / BUSCADOR DE VETS */}
        <div className="client-chat-box">
          {showVetSearch ? (
            <div className="mensajes-vet-search">
              <div className="mensajes-vet-search-header">
                <div className="mensajes-vet-search-input-wrap">
                  <FaSearch />
                  <input
                    type="text"
                    placeholder="Buscar veterinario por nombre..."
                    value={vetSearchTerm}
                    onChange={(e) => setVetSearchTerm(e.target.value)}
                    autoFocus
                  />
                </div>
                <button
                  className="mensajes-vet-search-close"
                  onClick={() => setShowVetSearch(false)}
                  title="Cerrar"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="mensajes-vet-search-results">
                {loadingVets && <p className="client-empty">Cargando veterinarios...</p>}
                {!loadingVets && filteredVets.length === 0 && (
                  <p className="client-empty">No se encontraron veterinarios con ese nombre.</p>
                )}
                {!loadingVets &&
                  filteredVets.map((vet) => (
                    <button
                      key={vet._id}
                      className="mensajes-vet-result-item"
                      onClick={() => handleStartConversation(vet)}
                      disabled={startingConv}
                    >
                      <div className="mensajes-list-avatar">{vet.name.charAt(0)}</div>
                      <div className="mensajes-list-info">
                        <strong>Dr(a). {vet.name}</strong>
                        <span>{vet.email}</span>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          ) : !selectedConv ? (
            <div className="mensajes-empty-state">
              <p>Selecciona una conversación, o toca "Nuevo mensaje" para escribirle a un vet.</p>
            </div>
          ) : (
            <>
              <div className="mensajes-chat-header">
                <div className="mensajes-list-avatar">{selectedConv.otherUser.name.charAt(0)}</div>
                <div>
                  <strong>{selectedConv.otherUser.name}</strong>
                  <span>{selectedConv.otherUser.email}</span>
                </div>
              </div>

              <div className="client-chat-messages">
                {loadingChat && <p className="client-empty">Cargando mensajes...</p>}
                {!loadingChat && chat.length === 0 && (
                  <p className="client-empty">Todavía no hay mensajes. Escribe el primero.</p>
                )}
                {!loadingChat &&
                  chat.map((m) => (
                    <div
                      key={m._id}
                      className={`chat-bubble ${
                        m.sender.role === "cliente" ? "chat-client" : "chat-dev"
                      }`}
                    >
                      <p>{m.text}</p>
                      <span>
                        {new Date(m.createdAt).toLocaleString("es-CL", {
                          day: "2-digit",
                          month: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  ))}
              </div>

              <form className="client-chat-input" onSubmit={handleSend}>
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  disabled={sending}
                />
                <button type="submit" disabled={sending || !newMessage.trim()}>
                  <FaPaperPlane />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MensajesSection;