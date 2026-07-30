import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import {
  getConversationsRequest,
  getConversationRequest,
  sendMessageRequest,
  markAsReadRequest,
} from "../../../services/messageService";
import "./MessagesSection.css";

const MessagesSection = () => {
  const [conversations, setConversations] = useState([]);
  const [loadingList, setLoadingList] = useState(true);
  const [error, setError] = useState("");

  const [selectedConv, setSelectedConv] = useState(null); // { conversationId, otherUser }
  const [messages, setMessages] = useState([]);
  const [loadingChat, setLoadingChat] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

  const fetchConversations = async () => {
    setLoadingList(true);
    setError("");
    try {
      const data = await getConversationsRequest();
      setConversations(data);
    } catch (err) {
      setError(err.message || "No se pudieron cargar las conversaciones");
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  // Actualiza sola la lista de conversaciones cada 8 segundos (para ver nuevos mensajes/badges)
  useEffect(() => {
    const interval = setInterval(() => {
      fetchConversations();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Actualiza sola la conversación abierta cada 4 segundos, sin que se note (sin "loading")
  useEffect(() => {
    if (!selectedConv) return;

    const interval = setInterval(async () => {
      try {
        const data = await getConversationRequest(selectedConv.conversationId);
        setMessages(data);
      } catch {
        // si falla el refresco silencioso, no molestamos con un error en pantalla
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedConv]);

  const openConversation = async (conv) => {
    setSelectedConv({ conversationId: conv.conversationId, otherUser: conv.otherUser });
    setLoadingChat(true);
    try {
      const data = await getConversationRequest(conv.conversationId);
      setMessages(data);
      await markAsReadRequest(conv.conversationId);
      fetchConversations(); // refresca para sacar el badge de no leído
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
      setMessages((prev) => [...prev, sent]);
      setNewMessage("");
    } catch (err) {
      setError(err.message || "No se pudo enviar el mensaje");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="admin-section messages-section">
      <h1 className="admin-title">Mensajes</h1>
      <p className="admin-subtitle">Conversaciones directas con tus clientes.</p>

      {error && (
        <div className="admin-activity-item" style={{ color: "#c94f4f" }}>
          ⚠️ {error}
        </div>
      )}

      <div className="messages-layout">
        {/* LISTA DE CONVERSACIONES */}
        <div className="messages-list">
          {loadingList && <p className="admin-empty">Cargando conversaciones...</p>}
          {!loadingList && conversations.length === 0 && (
            <p className="admin-empty">
              Todavía no tienes conversaciones — apenas un cliente te escriba, aparecerá aquí.
            </p>
          )}
          {conversations.map((conv) => (
            <button
              key={conv.conversationId}
              className={`messages-list-item ${
                selectedConv?.conversationId === conv.conversationId ? "active" : ""
              }`}
              onClick={() => openConversation(conv)}
            >
              <div className="messages-list-avatar">{conv.otherUser.name.charAt(0)}</div>
              <div className="messages-list-info">
                <strong>{conv.otherUser.name}</strong>
                <span>
                  {conv.lastMessage?.text?.slice(0, 34)}
                  {conv.lastMessage?.text?.length > 34 ? "…" : ""}
                </span>
              </div>
              {conv.unreadCount > 0 && (
                <span className="messages-unread-badge">{conv.unreadCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* PANEL DE CHAT */}
        <div className="messages-chat-panel">
          {!selectedConv ? (
            <div className="messages-empty-state">
              <p>Selecciona una conversación para ver los mensajes.</p>
            </div>
          ) : (
            <>
              <div className="messages-chat-header">
                <div className="messages-list-avatar">{selectedConv.otherUser.name.charAt(0)}</div>
                <div>
                  <strong>{selectedConv.otherUser.name}</strong>
                  <span>{selectedConv.otherUser.email}</span>
                </div>
              </div>

              <div className="messages-chat-body">
                {loadingChat && <p className="admin-empty">Cargando mensajes...</p>}
                {!loadingChat && messages.length === 0 && (
                  <p className="admin-empty">Todavía no hay mensajes en esta conversación.</p>
                )}
                {!loadingChat &&
                  messages.map((m) => (
                    <div
                      key={m._id}
                      className={`msg-bubble ${
                        m.sender.role === "vet" ? "msg-admin" : "msg-client"
                      }`}
                    >
                      <p>{m.text}</p>
                      <span>
                        {new Date(m.createdAt).toLocaleString("es-CL", {
                          hour: "2-digit",
                          minute: "2-digit",
                          day: "2-digit",
                          month: "2-digit",
                        })}
                      </span>
                    </div>
                  ))}
              </div>

              <form className="messages-chat-input" onSubmit={handleSend}>
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

export default MessagesSection;