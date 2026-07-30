import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { getVideoTokenRequest } from "../services/telemedicineService";
import "./VideoCall.css";

function VideoCall() {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const roomName = `HikariVet-${roomId}`;

  const [videoToken, setVideoToken] = useState(null);
  const [appId, setAppId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getVideoTokenRequest(roomName);
        setVideoToken(data.token);
        setAppId(data.appId);
      } catch (err) {
        setError(err.message || "No se pudo iniciar la videollamada");
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, [roomName]);

  return (
    <div className="vc-page">
      <div className="vc-header">
        <button className="vc-back-btn" onClick={() => navigate(-1)}>
          ← Volver
        </button>
        <h1>📹 Videollamada</h1>
      </div>

      <div className="vc-frame-wrap">
        {loading && <p style={{ padding: "2rem", textAlign: "center" }}>Conectando a la videollamada...</p>}
        {error && (
          <p style={{ padding: "2rem", textAlign: "center", color: "#c94f4f" }}>
            ⚠️ {error}
          </p>
        )}
        {!loading && !error && videoToken && appId && (
          <JaaSMeeting
            appId={appId}
            roomName={roomName}
            jwt={videoToken}
            configOverwrite={{
              disableThirdPartyRequests: true,
              disableLocalVideoFlip: true,
              backgroundAlpha: 0.5,
            }}
            interfaceConfigOverwrite={{
              VIDEO_LAYOUT_FIT: "nocrop",
              MOBILE_APP_PROMO: false,
              TILE_VIEW_MAX_COLUMNS: 4,
            }}
            getIFrameRef={(node) => {
              node.style.height = "100%";
              node.style.width = "100%";
            }}
          />
        )}
      </div>
    </div>
  );
}

export default VideoCall;